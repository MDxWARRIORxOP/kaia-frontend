# KAIA Frontend

Marketing website foundation for KAIA, built with React, TypeScript, Vite, and Tailwind CSS.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/
    images/
  components/
    layout/
    ui/
  pages/
  routes/
  utils/
```

## Design System Basics

### Colors

- `primary`: `#166534`
- `darkGreen`: `#101E07`
- `background`: `#f8f8f6`
- `textPrimary`: `#111827`
- `textSecondary`: `#6b7280`

### Typography

- Font family: `Inter`
- Base font size: `16px`
- Base line height: `24px`

### Layout

- Container width: `max-w-7xl`
- Spacing: Tailwind default spacing scale

## Reusable Components

### `Container`

Shared page wrapper used to center content and apply horizontal padding consistently.

### `Button`

Reusable button component with built-in variants:

- `primary`
- `secondary`

Supports:

- `children`
- native button props
- `className` overrides

### `Input`

Reusable input styled for the footer subscription area and similar dark-surface form patterns.

## Layout and Routing

- `MainLayout` wraps the shared `Navbar` and `Footer`
- `routes/index.tsx` contains the route setup
- `HomePage` is the current base route

The current nav routes are:

- `/`
- `/about-us`
- `/for-buyers`
- `/for-sellers`
- `/marketplace`

## Conventions

- Keep shared UI primitives in `src/components/ui`
- Keep structural sections in `src/components/layout`
- Keep route-level screens in `src/pages`
- Keep repeated static content in `src/utils/constants.ts`
- Prefer Tailwind utilities over custom CSS where possible
- Avoid inline styles unless absolutely necessary
- Keep components small and responsibility-focused

## Current Foundation

The project currently includes:

- Responsive navbar with active route states
- Footer with newsletter input, menu links, and contact information
- Shared design tokens in Tailwind
- Base home page scaffold
- Production-ready routing setup

