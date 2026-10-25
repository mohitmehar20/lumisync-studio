# Lumisync Studio

A polished, responsive event management and advertising agency website built with Next.js App Router, React, TypeScript, Framer Motion, and Lucide icons.

## Run locally

1. Install Node.js 20.9+.
2. In this folder, run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Customize

- Replace the Lumisync Studio name, email, and social links in `app/page.tsx`.
- Update the service cards and portfolio projects in the constants at the top of `app/page.tsx`.
- Replace the Unsplash image URLs with your own licensed project photography.
- Connect the contact form's `submitInquiry` handler to your CRM, API route, or email service. The current form validates fields and shows an on-page demo success state; it does not send email yet.
- Edit colours, typography, spacing, and responsive breakpoints in `app/globals.css`.

## Included

- Responsive mobile navigation
- Hero section with clear inquiry CTA
- Service overview for events, branding, digital marketing, weddings, and corporate experiences
- Portfolio / case-study gallery
- Three-step process section
- Interactive testimonial carousel
- Contact inquiry form with client-side validation and success state
- Metadata, accessible labels, focus styles, and reduced-motion support
