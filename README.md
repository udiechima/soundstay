# SoundStay

An Airbnb-inspired platform for booking historic music studios around the world, with the ability to pre-arrange session musicians and collaborators for your stay.

## Features

- **Browse iconic studios** — Abbey Road, Electric Lady, Capitol Studios, Hansa Tonstudio, and more, filterable by type (Recording, Film Score, etc.)
- **Studio detail pages** — Photo galleries, full descriptions, gear/amenity lists, and notable artists who recorded there
- **Collaborator picker** — Select from 8 session musician types (Guitarist, Vocalist, Bassist, Drummer, Keyboardist, Saxophonist, Violinist, Producer) that can be pre-arranged on arrival
- **Live price calculator** — Booking panel updates the total in real time as you add dates and collaborators
- **Responsive UI** — Works on mobile and desktop

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Server Components)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) (Base UI primitives)
- TypeScript
- Deployed on [Vercel](https://vercel.com)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    page.tsx                # Home — hero, search, studio grid
    studios/[id]/page.tsx   # Studio detail page
  components/
    navbar.tsx              # Sticky header with mobile menu
    studios-explorer.tsx    # Category filter + studio card grid
    booking-panel.tsx       # Date picker, collaborator selector, price breakdown
  lib/
    data.ts                 # Mock studio and collaborator data
```

## Live Demo

[soundstay.vercel.app](https://soundstay.vercel.app)
