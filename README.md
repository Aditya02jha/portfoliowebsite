# Portfolio — Websites & Apps for Growing Businesses

A fast, modern, dependency-free portfolio site. No build step, no framework — just open `index.html` or push to GitHub Pages.

## ✏️ Change your info (one file)

Everything you see on the site lives in **`assets/js/site.config.js`**:

| What you want to change | Where in the config |
| --- | --- |
| Name, logo letters, status badge | `brand` |
| Email, phone, WhatsApp, location | `contact` (phone/WhatsApp are written as pieces — see below) |
| GitHub / LinkedIn / other socials | `socials` |
| Headline, subtitle, buttons | `hero` |
| Services | `services.items` |
| Projects / case studies | `work.items` |
| Numbers strip | `stats` |
| Prices & packages | `pricing.plans` |
| About text, photo, skills | `about` |
| FAQs | `faq.items` |
| Accent colours | `theme` |
| Show / hide / reorder sections | `sections` array |

**Tips**
- Wrap any word in `*asterisks*` to render it in the italic accent font.
- Add your photo: drop it in `assets/img/` and set `about.photo: "assets/img/me.jpg"`.
- Add a project screenshot: set `image: "assets/img/project.jpg"` on a work item.
- Testimonials stay hidden until you add real ones to `testimonials`.
- Icons available: see `assets/js/core/icons.js` (add your own SVG there).

## 📬 Make the contact form deliver to your inbox

By default, the form opens the visitor's email app with everything pre-filled.
To receive submissions directly:
1. Create a free form at [formspree.io](https://formspree.io).
2. Paste the endpoint into `contact.formEndpoint` (e.g. `"https://formspree.io/f/abcd1234"`).

## 🔒 Privacy & security

**Your phone number is never visible in the page.** In the config it's split into pieces:

```js
phoneParts: ["+91", "93158", "12393"],
whatsappParts: ["91", "9315", "812393"],
```

Bots that scrape websites for numbers find nothing. The pieces are joined only when a real visitor taps:
- **On phones** → "Tap to call" opens the dialer directly.
- **On desktop** → first click reveals the number, second click calls.
- **WhatsApp** → the chat link is built on tap.

To change the number, just edit the pieces (split it any way you like). Use `[]` to hide a button.

**Other protections already in place**
- A Content-Security-Policy in `index.html` only allows this site's own scripts + Google Fonts.
  If you ever add a third-party script (e.g. analytics), add its domain to that tag.
- All text from the config is HTML-escaped before display.
- No secrets, server or database — nothing to hack.
- In GitHub → Settings → Pages, tick **Enforce HTTPS**.

## 🗂 Project structure

```
index.html                ← page shell (rarely needs editing)
404.html
assets/
  css/
    tokens.css            ← colours, fonts, spacing (design system)
    base.css              ← reset + typography
    components.css        ← buttons, cards, tags, headings
    layout.css            ← nav + footer
    sections.css          ← one block per section
    effects.css           ← animations, cursor, grain
  js/
    site.config.js        ← ★ ALL YOUR CONTENT
    core/utils.js         ← tiny template helpers
    core/icons.js         ← SVG icon set
    core/effects.js       ← cursor, magnetic buttons, reveals, counters, form
    sections/*.js         ← one render function per section
    main.js               ← boots everything
  img/favicon.svg
```

### Adding a new section
1. Create `assets/js/sections/mysection.js`:
   ```js
   window.Sections = window.Sections || {};
   Sections.mysection = (S) => `<section class="section" id="mysection">…</section>`;
   ```
2. Add `<script src="assets/js/sections/mysection.js"></script>` in `index.html` (before `effects.js`).
3. Add `"mysection"` to `sections` in the config and styles to `sections.css`.

## 🚀 Deploy on GitHub Pages (free)

1. Create a repo — name it **`<your-username>.github.io`** for a root URL (e.g. `aditya02jha.github.io`).
2. Upload all files from this folder (keep the structure) and commit.
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `root` → Save.
4. Live in ~1 minute at `https://<your-username>.github.io`.

Custom domain: add it under Settings → Pages, then point your domain's DNS to GitHub.
Update `meta.url` in the config to your live URL.

## 🧪 Run locally

Just double-click `index.html`. Or serve it:
```bash
python -m http.server 8000   # then open http://localhost:8000
```

## ♿ Built-in quality
- Fully responsive (phone → ultra-wide)
- Respects "reduce motion" accessibility setting
- Custom cursor only on mouse devices; keyboard focus styles everywhere
- Zero dependencies, ~60 KB of code total
