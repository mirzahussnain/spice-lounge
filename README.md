# Spice Lounge

Spice Lounge is a Next.js 16 landing and menu experience focused on cinematic food storytelling, animated sections, and a full menu page with filter/search/sort interactions.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Project Structure

- `src/app/page.tsx`: Home page composition
- `src/app/menu/page.tsx`: Full menu page
- `src/components/sections/*`: Hero, Menu, Story, Ambience, Testimonials, Reservations sections
- `src/components/ui/*`: Reusable UI and animation helpers
- `src/data/*`: Menu/content source data
- `public/*`: Static assets (brand, spices, smog, video)

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

`http://localhost:3000`

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables

No required environment variables for the current setup.

If you add secrets later, use `.env.local` and do not commit them.

## Deployment (Netlify)

This project is configured to deploy on Netlify with Next.js support.

Recommended commands:

```bash
npx netlify login
npx netlify init
npx netlify deploy --build
npx netlify deploy --prod --build
```

## Linting

```bash
npm run lint
```

## Notes

- Keep styling Tailwind-first.
- Keep raw CSS in `src/app/globals.css` only for complex effects (pseudo-elements, custom scrollbars, keyframes, browser-specific behavior).
