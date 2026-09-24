# ASL App — Implementation Plan

## Part 1 — Learning platform ✅ shipped

Turned the single client-side speller into a data-driven learning platform and
extended coverage beyond A–Z.

```
Sign (x_snc_asl_sign)          ← content library (letters, numbers, essentials)
   ▲ grouped into
Lesson (x_snc_asl_lesson)      ← Alphabet, Numbers, Everyday essentials
   ▲ tracked by
Progress (x_snc_asl_progress)  ← which signs a signed-in user has learned
```

- [x] **Phase 1** — `Sign`, `Lesson`, `Progress` tables + ACLs (public read on
      content, owner-only on progress).
- [x] **Phase 2** — Seeded 3 lessons and 43 signs.
- [x] **Phase 3** — Speller reads its token map from the `Sign` table, so new
      characters become spellable as data, with no code change.
- [x] **Phase 4** — Lessons page: lesson list with progress %, lesson detail,
      mark-learned toggle, header navigation.
- [x] **Images for essentials** — added `attribution` and `reference_url` fields;
      HELLO has a verified Wikimedia image (CC BY-SA 4.0); all six essentials link
      to their Lifeprint page via "Watch it signed".

### Known findings / open items

- **Wikimedia has no per-word ASL image set** (searched four ways) and no
  per-word video set — only HELLO. Word signs also depend on *movement*, which a
  still image cannot convey, hence the reference links. Numbers likewise have no
  public-domain image set, so they ship with written descriptions.
- **No invented image URLs.** In a learning app a wrong image teaches the wrong
  sign; a description-only card is the honest fallback.
- `Record()` **seeds on first install only** — it does not update rows that
  already exist. Editing seeded content requires reconciling existing rows.
- ⚠️ **Outstanding:** the Lessons page is built and installed but was verified by
  data query only — `ui_diagnostics` timed out twice. Worth an eyeball at
  `/asl?id=x_snc_asl_lessons`.

---

## Part 2 — "Spell your name" game 🚧 in progress

An engagement hook: personalise, then test, then compete. Fingerspelling is the
authentic real-world use of the ASL alphabet — names have no dedicated sign — so
this is the genuine use case, not a gimmick.

### Flow

```
1. Name entry   → "What's your first name?"
2. Reveal       → their name fingerspelled, sign by sign
3. Quiz         → 10 questions: see a sign, pick the letter
4. Results      → score + top-10 all-time leaderboard
```

### Design decisions

| Decision | Rationale |
|---|---|
| **Fixed 10 questions** — their name as warm-up, topped up with random letters | A name-length quiz is unfair: "Al" = 2 questions vs "Alexandria" = 10. Fixed length makes scores comparable. |
| **Arcade leaderboard** — each play inserts a row, top 10 all-time | A leaderboard needs an identity, but the portal must stay usable without login. The first name they type *is* the display name. No login, no session identity machinery. |
| **Accuracy only, no speed bonus** | Timers penalise screen-reader and motor-impaired users — unacceptable in an accessibility app. Time is a tiebreaker at most. |
| **Fully visual feedback, no audio** | Deaf users are a core audience. |
| **Quiz pool = the 26 letters** | Only letters have images. Numbers and essentials are description-only, so they can't be recognition questions. Names are letters anyway. |
| **Visually similar distractors** (A/S/T, M/N, K/V) | Teaches real handshape discrimination instead of trivial guessing. |
| **Server-side scoring** | Client never ships the answer key. |

### Risks, stated plainly

- **Public leaderboard + free-text name is an abuse surface.** Anonymous players
  need create permission on the score table. Mitigations: length cap, character
  allowlist (letters, spaces, hyphens, apostrophes — the same set that is
  fingerspellable), and `{{ }}` / `ng-bind` only, never `ng-bind-html`.
- **Scores are not tamper-proof.** Scoring is server-side so the answer key is
  not exposed, but a determined person can still forge a submission. Acceptable
  for a learning game — worth stating rather than implying it is secure.
- **Names outside A–Z** — José, Renée, Mary-Jane, O'Brien, non-Latin scripts.
  Accents are normalised where possible (é→E); anything unfingerspellable is
  skipped with a visible note. Must never render silently empty.

### Task list

- [x] **Phase 1 — Data model.** `x_snc_asl_score` table (player name, score,
      total questions, accuracy, optional user ref) + ACLs: public read, public
      create, append-only (no update/delete). *Verified on instance: schema
      correct, both ACLs active, no update/delete ACL exists.*
- [x] **Phase 2 — Name entry.** Play widget, view 1: input with validation,
      length cap, allowlist, and accent normalisation.
- [x] **Phase 3 — Reveal.** View 2: the name fingerspelled, reusing the existing
      sign-card rendering.
- [x] **Phase 4 — Quiz.** View 3: 10 questions, sign image → pick the letter from
      4 options with similar-handshape distractors. Scored server-side.
- [x] **Phase 5 — Results + leaderboard.** View 4: score and top-10 all-time.
      New public `Play` page, added to header nav beside Speller / Lessons.
- [x] **Phase 6 — Ship.** Built, installed and verified.

### Verification performed

Logic was exercised against real instance data rather than assumed:

- Quiz pool = **26 letters, all with images** (numbers/essentials correctly excluded).
- Accent folding: José→JOSE, Renée→RENEE, Zoë→ZOE, Mary-Jane→MARYJANE,
  O'Brien→OBRIEN. Non-Latin input (中文) yields zero letters and correctly hits
  the "cannot fingerspell" error path instead of rendering empty.
- Short names work: "Al" produces 2 name letters, topped up to 10 questions —
  the fairness fix confirmed.
- **2,000 generated questions across 200 rounds: zero defects** — always 10
  questions, always 4 unique options, correct answer always present.
- Play page renders with no console errors.

### Deliberate design notes

- The **reveal → quiz transition is client-side only** (questions are already
  loaded), so it costs no round trip.
- Answers are collected locally and scored in **one** server call, rather than a
  call per question. This keeps the game snappy, keeps the answer key off the
  client, and the teaching moment moves to the end-of-round review screen
  (your answer vs. the correct letter, with the sign image).

### Optional follow-on

For signed-in users, a correct answer could mark that letter learned in
`x_snc_asl_progress`, connecting the game to the Lessons progress bars.

---

## Part 3 — Leaderboard hardening + no sign-in ✅ shipped

### The hole that was closed

The original leaderboard was forgeable two ways:

1. **`x_snc_asl_score` had a public create ACL**, so anyone could `POST`
   `score=10` straight to the Table API and never play the quiz.
2. **`x_snc_asl_sign` had public read**, so the answer key could be fetched
   before answering — the client was sent each question's sign `sys_id`.

### The security model now

| Layer | Mechanism |
|---|---|
| Answer key never leaves the server | Correct answers are written to `x_snc_asl_quiz_session`; the browser gets an opaque token plus images and four options. **No sign `sys_id`, no letter** — nothing in the payload to look up. |
| Score is always server-computed | Scoring reads answers back from the session and compares **by position**. The client cannot influence which sign it answered, nor the round length. |
| No replay | The session is marked `consumed` before scoring, so a round cannot be re-submitted to farm the board. |
| No REST surface | The sign, lesson and score tables have **no ACLs at all**, so forged inserts and answer-key reads are both denied. Also `accessibleFrom: package_private` and `allowWebServiceAccess: false`. |
| Widgets still work | Every read/write happens in a widget server script using plain `GlideRecord`, which **does not evaluate ACLs**. |

**The load-bearing fact, verified by experiment:** impersonating the guest user,
plain `GlideRecord` on `sys_properties` returned **10 rows** while
`GlideRecordSecure` returned **0**. That is what allows zero-ACL tables to stay
readable by the anonymous portal but closed to REST.

### No sign-in

- The `user` column is gone from `x_snc_asl_score` — every player is anonymous.
- All sign-in prompts removed from the Play and Lessons widgets.
- **Progress tracking removed from the Lessons widget.** With no authenticated
  user there is nobody to own a "learned" flag, so the progress bars and
  mark-learned button would have been permanently dead controls. Lessons are now
  a study reference showing a sign count per lesson.
- `x_snc_asl_progress` and its three owner-scoped ACLs remain on the instance but
  are **unreachable**. Candidate for deletion — see open items.

### Verified

- Instance ACL state: only the 3 progress ACLs remain. The 4 public ACLs
  (sign read, lesson read, score read, score create) were **deleted** by the
  install, not orphaned.
- `x_snc_asl_quiz_session` schema correct (`token` mandatory, `answers` 4000,
  `consumed`).

### Open items

- ⚠️ **Not directly observed:** the guest-permission simulation
  (`GlideRecordSecure` vs `GlideRecord` on the ASL tables specifically) was
  interrupted twice, and the Play page render timed out. The reasoning rests on
  the verified `GlideRecord`-bypasses-ACLs behaviour, which is API-level rather
  than table-specific — but a smoke test of `/asl` is worth doing.
- Unbounded session growth is handled opportunistically: each round start sweeps
  sessions older than an hour (max 200). A scheduled job would be sturdier.
- `x_snc_asl_progress` is dead weight — remove the table and its ACLs, or
  repurpose for anonymous browser-local progress.
