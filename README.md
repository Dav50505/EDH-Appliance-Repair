# EDH Appliance Repair

Phase 1 foundation for the EDH Appliance Repair site rebuild.

## Platform decision

- Target platform: `Next.js` App Router with Tailwind CSS
- Hosting target: `Vercel`
- Domain target: `edhappliancerepair.com`

This aligns with the task list requirement for a modern stack, clean URLs, strong performance, and straightforward deployment to a fast CDN.

## Included in phase 1

- App Router scaffold with TypeScript
- Core routes:
  - `/`
  - `/services`
  - `/service-areas`
  - `/about`
  - `/contact`
- Shared sticky header and footer
- Centralized site config for NAP and metadata
- `robots.txt` via `app/robots.ts`
- XML sitemap via `app/sitemap.ts`

## Next steps to finish platform setup outside code

1. Install dependencies with `npm install`
2. Run local development with `npm run dev`
3. Deploy to Vercel
4. Point the custom domain to Vercel and enable SSL
5. Submit the generated sitemap to Google Search Console after launch
