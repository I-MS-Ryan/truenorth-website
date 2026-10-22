# TrueNorth Group website

A responsive, static website for TrueNorth Construction Codes Services Group. No installation or build step is required. Open `dist/index.html` or serve the `dist` directory.

## Content

The seven pages are Home, Building, Fire, Planning, About TrueNorth, Our Resources and Contact. They introduce services, engagement options, team resources and the professional network supporting coordinated delivery. Contact links open the visitor's email application; there is no form backend or collection of personal information. No analytics scripts or tracking cookies have been added.

## Deploy on GitHub Pages

1. Create or select your GitHub repository.
2. Upload the **contents** of `dist/` to the repository root (not the containing folder).
3. Under Settings → Pages, choose Deploy from a branch, select `main` and `/ (root)`, then Save.
4. Verify ownership of `tn-g.ca` in GitHub before changing domain records.
5. Set the Pages custom domain to `tn-g.ca`; configure the apex and `www` DNS records at GoDaddy following GitHub's current custom-domain documentation: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
6. Preserve Google Workspace MX, SPF, DKIM, DMARC and verification records. Only change the website records needed for Pages. Enable HTTPS after certificate issuance.

A CNAME file is deliberately not included before domain ownership and repository configuration have been confirmed. Add it using GitHub's custom-domain setting when connecting the domain.

## Editing

- `dist/*.html`: the seven complete pages, with shared navigation and page-specific metadata.
- `scripts/make-pages.py` and `scripts/approved-content.html`: repeatable page generation from the approved content. The generator writes HTML only; CSS is maintained separately.
- `dist/styles.css`: typography, colours, layout and responsive rules.
- `dist/script.js`: navigation and copyright year.
- `dist/assets/truenorth-logo.png`: latest supplied logo, displayed directly with CSS framing to keep the concept caption outside the visible logo area. No replacement lettering is overlaid; the source image is unchanged.
- `dist/assets/prairie-river.png`: original AI-generated illustrative landscape, not an actual client project. Replace it with the preferred waiting-page photograph once reuse rights are confirmed.

Before public launch, review the service descriptions, official business name, contact mailbox readiness and any jurisdiction-specific claims. The website describes possible scopes rather than declaring blanket regulatory authority.
