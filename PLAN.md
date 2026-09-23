# ASL Learning Platform — Implementation Plan

Turns the single client-side speller into a **data-driven learning platform**, and
extends coverage beyond A–Z to **numbers (0–9)** and a few **essential signs**.

## Goals
1. Extend the sign set beyond A–Z to include digits 0–9 and a small set of essentials.
2. Make signs **content-managed** (stored in tables, editable without code) and add
   **lessons** + **per-user progress tracking** so it works like a real learning app.

---

## Architecture overview

```
Sign (x_snc_asl_sign)          ← the content library (letters, numbers, essentials)
   ▲
   │ grouped into
Lesson (x_snc_asl_lesson)      ← e.g. "Alphabet", "Numbers", "Essentials"
   ▲
   │ tracked by
Progress (x_snc_asl_progress)  ← which signs a signed-in user has marked "learned"
```

- The **Speller widget** stops using a hardcoded JS map and instead reads signs from
  the `Sign` table (so numbers/essentials appear automatically once seeded).
- A new **Lessons experience** lets users browse lessons, view each lesson's signs,
  and mark them learned; progress is shown as a completion percentage.
- The portal stays **public**: content tables get public-read ACLs; progress
  read/write is restricted to the signed-in owner (progress simply won't persist for
  anonymous visitors).

---

## Task list

### Phase 1 — Data model
- [ ] Create `x_snc_asl_sign` table (label, match token, category, image URL, description, order).
- [ ] Create `x_snc_asl_lesson` table (title, description, category, order).
- [ ] Create `x_snc_asl_progress` table (user, sign, learned flag, updated).
- [ ] Relate signs to lessons (grouping) and add public-read ACLs on content tables;
      restrict progress to the owning user.

### Phase 2 — Seed content
- [ ] Migrate the existing A–Z signs into `Sign` records (verified image URLs).
- [ ] Add 0–9 number signs and a few essential signs (verify each image resolves).
- [ ] Create starter lessons: **Alphabet (A–Z)**, **Numbers (0–9)**, **Essentials**.

### Phase 3 — Refactor the Speller
- [ ] Update the ASL Sign Speller widget to read the token→image map from the `Sign`
      table via its server script (numbers/essentials then work when typed).
- [ ] Keep the existing UX (type → signs on one row, Clear button).

### Phase 4 — Lessons experience
- [ ] New **Lessons** page (public).
- [ ] Widget to list lessons with progress %.
- [ ] Widget to open a lesson, show its signs, and mark each sign "learned".
- [ ] Navigation between the Speller (home) and Lessons.

### Phase 5 — Ship
- [ ] Build, install, and verify: numbers render in the speller, lessons load, and
      progress persists for a signed-in user.

---

## Notes & decisions
- **Images:** referenced by Wikimedia `Special:FilePath/<filename>` (resolves by name,
  robust to hash changes); each URL is verified before seeding.
- **Progress requires login** to persist (anonymous users can still learn/browse).
- Sign images remain public-domain ASL fingerspelling art from Wikimedia Commons.
