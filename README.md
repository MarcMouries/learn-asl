# ASL — American Sign Language Speller

A ServiceNow application that helps people learn the American Sign Language (ASL)
fingerspelling alphabet. A visitor types letters into a text field and instantly
sees the corresponding ASL hand-sign image for each letter, laid out on a single
row.

The experience is delivered as a public **Service Portal**, so anyone can use it
without logging in.

- **Scope:** `x_snc_asl`
- **Portal URL:** `https://<instance>.service-now.com/asl`
- **Built with:** ServiceNow App Engine (Fluent SDK)

---

## What it does

1. The user types a word or phrase (e.g. `HELLO`).
2. For each recognized letter (A–Z), the widget renders the matching ASL
   fingerspelling sign together with the letter.
3. Signs scale to fit a single row, and a **Clear** button resets the input.

Only alphabetic characters A–Z are represented; spaces, digits, and punctuation
are ignored.

---

## How it works

The app is entirely client-side — no tables or server queries are involved. The
letter-to-image mapping lives in the widget's client controller, and each sign
is an SVG image served from Wikimedia Commons.

### Components

| Component | Fluent API | Table | Purpose |
|-----------|-----------|-------|---------|
| ASL Sign Speller | `SPWidget` | `sp_widget` | Text input + per-letter sign rendering |
| Learn ASL (home) | `SPPage` | `sp_page` | Public page hosting the widget |
| ASL | `ServicePortal` | `sp_portal` | Portal entry point (`urlSuffix: asl`) |
| ASL Theme | `SPTheme` | `sp_theme` | Visual identity; wires header + footer |
| ASL Header | `SPHeaderFooter` | `sp_header_footer` | "Built with ServiceNow App Engine" logo header, no login |
| ASL Footer | `SPHeaderFooter` | `sp_header_footer` | Attribution: "Made with ❤️ by Marc with ServiceNow App Engine" |

### Source layout

```
src/fluent/
├── service-portal/portal.now.ts          # ServicePortal definition
├── sp-page/home/home-page.now.ts          # Home page + widget instance
├── sp-widget/asl-sign/                    # ASL Sign Speller widget
│   ├── widget.now.ts
│   ├── template.html                      # AngularJS template
│   ├── client_script.js                   # Letter → image mapping + logic
│   ├── server_script.js                   # Supplies the title
│   └── styles.css
├── sp-theme/asl-theme/asl-theme.now.ts    # Custom theme (SCSS variables)
└── sp-header-footer/
    ├── asl-header/                         # Logo header (no login)
    └── asl-footer/                         # Attribution footer
```

---

## Public access

The page, widget, header, and footer are all marked **public**, and the portal
does not require authentication. This lets unauthenticated visitors use the
speller directly at `/asl`.

---

## Build & deploy

```bash
now-sdk build      # compile the Fluent sources
now-sdk install    # deploy to the connected instance
```

Then open `https://<instance>.service-now.com/asl`.

---

## Notes & credits

- Sign images are the ASL fingerspelling SVGs hosted on
  [Wikimedia Commons](https://commons.wikimedia.org/) (public domain), referenced
  by their original `.svg` file URLs.
- Built on ServiceNow App Engine using the Fluent SDK.
