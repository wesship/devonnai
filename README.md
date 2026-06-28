# D3VONN.IO

D3VONN.IO is an AI Business Operating System for deploying, monitoring, and controlling autonomous AI workers from one command center.

## Production surface

- Homepage proof layer and command-center positioning
- AI workforce section for Hermes, TARS, Sapphire, Guardian, Atlas, and Forge
- Public demo route at `/demo`
- Documentation route at `/docs`
- Trust routes for `/security`, `/status`, `/roadmap`, and `/case-studies`
- Legal routes for `/privacy` and `/terms`
- Public status API at `/api/status`
- SEO assets: `/sitemap.xml`, `/robots.txt`, `/manifest.json`, `/icon.svg`, `/og-image.svg`

## Commands

```bash
npm ci
npm run lint
npm run build
npm run dev
```

## Deployment

The project is configured for Vercel with `vercel.json`:

- Framework: Next.js
- Install command: `npm ci`
- Build command: `npm run build`
- Region: `iad1`

## Verification

GitHub Actions workflow: `.github/workflows/verify-site.yml`

The workflow runs:

1. `npm ci`
2. `npm run lint`
3. `npm run build`

Manual route verification is documented in `docs/deployment-verification.md`.

## Public routes

- `/`
- `/demo`
- `/features`
- `/pricing`
- `/marketplace`
- `/docs`
- `/security`
- `/status`
- `/api/status`
- `/roadmap`
- `/case-studies`
- `/changelog`
- `/about`
- `/blog`
- `/careers`
- `/contact`
- `/privacy`
- `/terms`

## Safety note

Do not claim formal certifications such as SOC 2 until the audit is complete. Use security-roadmap or SOC 2-ready language only when accurate.
