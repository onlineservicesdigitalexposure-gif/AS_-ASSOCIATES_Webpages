# AS Associates — Website

A single-page site for AS Associates (Advocate Ayan Chakraborty), built with
React + Vite.

## Getting started

```bash
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # production build into /dist
npm run preview   # preview the production build
```

## Folder structure

```
public/                 static assets served as-is
  images/
    gallery/             gallery photos (currently placeholder illustrations)
    favicon.svg
src/
  components/           one file per UI section (Header, Hero, About, ...)
  data/                  plain-JS content files — edit these to update text
    siteInfo.js          firm name, address, phone, email, hours
    services.js          the list of practice areas shown in "The Docket"
    gallery.js           the list of gallery images and captions
  App.jsx                assembles the page from the components
  index.css              all styling, design tokens and animations
  main.jsx               React entry point
index.html
```

## Making common changes

- **Contact details, address, phone, email:** edit `src/data/siteInfo.js`.
- **Practice areas / services:** edit `src/data/services.js` — add, remove, or
  reorder objects in the array; the on-screen docket numbers follow automatically.
- **Gallery photos:** replace the SVGs in `public/images/gallery/` with real
  photographs (JPG/PNG/WebP work fine), then update the `src` paths in
  `src/data/gallery.js` to match your filenames.
- **Colours and fonts:** the design tokens (`--ink`, `--brass`, `--maroon`,
  `--sage`, `--parchment`, fonts) are declared at the top of `src/index.css`.

## Notes

- The contact form opens the visitor's email app with the message pre-filled
  (no backend required). To collect submissions server-side instead, swap the
  `handleSubmit` function in `src/components/Contact.jsx` for a call to your
  form endpoint of choice.
- The map in the Contact section is a plain Google Maps embed built from the
  address in `siteInfo.js` — no API key needed.
- Animations respect `prefers-reduced-motion` for visitors who have that
  system setting enabled.
