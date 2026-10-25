# SaverNest

**Curated technology picks for buyers who want better value, not endless product lists.**

SaverNest is a React website that presents selected gadgets across a few shopping categories. Each product card shows its intended audience, listed price, comparison price, savings text, a short explanation, pros and cons, and a SaverNest score.

## What the site includes

- **Curated categories:** gaming laptops, mobile phones, audio devices and smartwatches.
- **Product reasoning:** each recommendation includes a summary, pros, a trade-off and a suggested use case.
- **Value scoring:** cards show overall, value, performance and reliability scores.
- **Interactive cards:** flip a card to read why the item was selected; share links with the browser share sheet or clipboard where supported.
- **Responsive browsing:** category carousels adapt to mobile, tablet and desktop widths.
- **Information pages:** shortlist approach, privacy statement, affiliate disclosure, contact details and update policy.
- **Affiliate links:** product buttons lead to external Amazon product/deal links.
- **Telegram deal channel:** a link to the site's Telegram channel is available from the page.

## Tech stack

- React 19
- React Router
- Vite
- Swiper

## Run locally

You need a recent Node.js version and npm.

```bash
git clone https://github.com/techy-nitin/savernest.git
cd savernest
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

## Useful commands

```bash
npm run build
npm run preview
npm run lint
```

## Project layout

```text
savernest/
├── public/             # Static assets, icons, sitemap and robots file
├── src/
│   ├── App.jsx         # Routes
│   ├── HomePage.jsx    # Main landing page
│   ├── InfoPage.jsx    # Transparency and policy sections
│   ├── DealCard.jsx    # Product card and flip/share interactions
│   ├── SectionSlider.jsx
│   ├── Products.js     # Curated product data
│   ├── Site.js         # Site name, tagline and font URL
│   └── Styles.js       # Shared inline styles
├── package.json
└── vite.config.js
```

## Updating product recommendations

Product names, descriptions, scores, displayed prices, savings labels, images and outbound links are stored in `src/Products.js`. Update this data when recommendations change and verify every destination link before publishing.

**Important:** the current implementation uses locally defined product data. It does not fetch live prices or stock from Amazon or another commerce API, so displayed prices and savings can become outdated. Treat them as editorial data that needs manual review.

## Affiliate disclosure

The site includes an Amazon affiliate disclosure. Affiliate relationships and displayed prices should be reviewed for accuracy and compliance before publishing changes.

## Current scope

SaverNest is a frontend-only React site. The repository does not contain an application backend, user accounts, a database or an admin interface for editing recommendations.
