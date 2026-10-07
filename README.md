# Big Deal

Marketing site, order funnel and contributor pages for Big Deal (working name). Newsstand-magazine look: cream paper, one red accent.

- `/` landing page
- `/start` 9-page order funnel (client-side only; no payment or backend yet)
- `/c/[token]` contributor invite page (placeholder token lookup)
- `/p/[code]` buyer dashboard (placeholder status)

```
npm install
npm run dev
```

Design tokens live in `app/globals.css`. Fonts load via `next/font/google`. On Railway: `npm run build`, then `npm start`.
