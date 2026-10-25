# ShopEase

ShopEase is a full-stack e-commerce project with a React storefront and a Java/Spring Boot REST API. The code covers product discovery, product details and reviews, cart and wishlist operations, buyer orders, invoice PDFs, seller onboarding and seller inventory tools.

> This README describes the current repository implementation, including important unfinished integrations. It is not a claim that every flow is production-ready.

## Main features in the codebase

### Shopping
- Home page with promotional carousel, category collections, brand pages, deal cards and bank-offer content.
- Product listing with keyword search and category filtering.
- Product detail pages with images and ratings/reviews.
- Add-to-cart, quantity changes, remove-from-cart and move-to-wishlist actions.
- Wishlist listing, removal and move-to-cart actions.

### Buyer account and orders
- Sign-up and sign-in screens.
- Profile page and account deletion request.
- Checkout form and order placement.
- Order history, cancellation, buy-again action, review management and invoice PDF download.
- Return/refund request and status display.

### Seller tools
- Seller registration with email OTP verification.
- Seller status and activation workflow.
- Add, update and delete products.
- Seller dashboard with inventory, order/sales summaries and CSV export actions.

### Backend services
- REST endpoints for products, search, categories, reviews, cart, wishlist, orders, seller operations, location lookup, payments and returns.
- PostgreSQL persistence through Spring Data JPA.
- Scheduled order-status and return-status transitions.
- PDF invoice generation.

## Technology

| Layer | Stack |
|---|---|
| Frontend | React 19, Vite, React Router, Tailwind CSS, Swiper, Framer Motion, Lucide |
| Backend | Java 17, Spring Boot 3.3.5, Spring Web, Spring Data JPA, Spring Security |
| Database | PostgreSQL |
| Other backend libraries | JWT, BCrypt password encoder, Spring Mail, iText PDF |
| Deployment configuration | GitHub Actions workflow builds `./ShopEase` and deploys its `dist` folder to GitHub Pages |

## Repository layout

```text
ShopEase/
├── ShopEase/       # React frontend
│   ├── src/
│   └── package.json
├── ShopEase_Back/  # Spring Boot backend
│   ├── src/main/java/
│   ├── src/main/resources/application.properties
│   └── pom.xml
└── .github/
    └── workflows/deploy.yml
```

## Run the frontend

Install Node.js and npm, then:

```bash
cd ShopEase
npm install
npm run dev
```

Other available scripts:

```bash
npm run build
npm run preview
npm run lint
```

The frontend's API base URL is defined in `ShopEase/src/config.js`. It currently points to the hosted backend URL. For local backend development, change it to the local backend address (normally `http://localhost:8081`) and restore the deployed value before publishing.

## Configure and run the backend

You need Java 17, Maven and a reachable PostgreSQL database. From the repository root, configure these environment variables before starting the backend:

| Variable | Purpose |
|---|---|
| `SPRING_DATASOURCE_URL` | JDBC URL for PostgreSQL |
| `SPRING_DATASOURCE_USERNAME` | Database username |
| `SPRING_DATASOURCE_PASSWORD` | Database password |
| `SPRING_MAIL_HOST` | SMTP host used for seller OTP email |
| `SPRING_MAIL_PORT` | SMTP port |
| `SPRING_MAIL_USERNAME` | SMTP username |
| `SPRING_MAIL_PASSWORD` | SMTP password |
| `PORT` | Optional server port; defaults to `8081` |

Then run:

```bash
cd ShopEase_Back
mvn spring-boot:run
```

The application uses `spring.jpa.hibernate.ddl-auto=update`, so Hibernate may update the schema when the backend starts. Use a dedicated development database and review migration strategy before production.

## Important implementation notes

- **Payment is not integrated end-to-end.** The checkout UI displays COD, UPI and card choices, but the current order-placement request does not send the selected payment method and does not call a payment gateway.
- **Delivery and return progression is simulated.** Scheduled backend jobs advance order and return statuses after elapsed time; these are not connected to a shipping provider or a real refund processor.
- **Backend authorization needs hardening.** The current Spring Security configuration permits all requests, while login generates a JWT. Do not treat the frontend's local-storage route guard as server-side authorization.
- **Move secrets out of source.** The JWT signing secret is hard-coded in the current utility class. Use a secure environment variable or secret manager before deployment.
- **Review routing setup.** `ShopEase/src/main.jsx` wraps the app in `BrowserRouter`, while `ShopEase/src/App.jsx` creates a `HashRouter`. React Router should have one router provider, so consolidate this before relying on the frontend.
- **Seller edit route:** the dashboard links to `/seller/edit-product/:id`, but that path is not registered in the current `App.jsx` route table.
- **CORS should be checked against the deployed frontend origin.** Some controllers specify localhost-only CORS annotations, which may conflict with production use.

## API areas

The backend currently defines routes in these areas:

- `/api/auth` — sign-up, login, logout and user deletion
- `/api/products` — listing, detail, search, category listing and reviews
- `/api/cart` — add, read and delete cart entries
- `/wishlist` — add, list and remove wishlist entries
- `/orders` — place and retrieve orders, lifecycle actions and invoice download
- `/api/seller` — seller registration/status, product management, dashboard and CSV exports
- `/payments` — create/read payment records
- `/return-refund` — request, process and inspect return status
- `/api/location` — IP-based or coordinate-based location lookup

## Testing

The backend repositories include Spring Boot context-load test classes. These are basic smoke tests, not comprehensive tests of checkout, payment, authorization, inventory or return workflows. Run and extend tests before using the project with real customers.
