# D3VONN.IO Deployment Verification

Run this checklist after every production deploy.

## Local validation

Commands to run before deployment:

- npm ci
- npm run lint
- npm run build

## Public route checks

Confirm each route returns HTTP 200:

- /
- /demo
- /features
- /pricing
- /marketplace
- /docs
- /security
- /status
- /api/status
- /roadmap
- /case-studies
- /changelog
- /about
- /blog
- /careers
- /contact
- /privacy
- /terms
- /robots.txt
- /sitemap.xml
- /manifest.json
- /icon.svg
- /og-image.svg

## Conversion checks

- Hero CTA opens /demo
- Pricing CTA opens /pricing
- Enterprise CTA opens /contact?inquiry=enterprise
- Footer links do not return 404
- Sitemap includes every public route
- Manifest includes icon metadata
- Social preview uses /og-image.svg

## Manual review

- Confirm mobile nav opens and closes
- Confirm footer is visible on every page
- Confirm status page aligns with /api/status
- Confirm legal pages are reachable
- Confirm no page claims certifications that are not complete
