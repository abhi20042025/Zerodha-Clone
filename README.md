# Zerodha Clone

A full-stack stock trading platform clone built with the **MERN stack** — replicating the core look, feel, and functionality of [Zerodha](https://zerodha.com), India's largest stock broker.

---

## Preview

| Landing Page | Dashboard | Holdings |
|---|---|---|
| ![Landing](https://kite.zerodha.com/static/images/kite-logo.svg) | Kite-style layout | Real-time P&L |

---

## Features

### Landing Pages
- **Home** — Hero section, stats, product showcase, education section, awards
- **About** — Company story, team & philosophy
- **Products** — Kite, Coin, Console, Varsity product pages
- **Pricing** — Transparent brokerage pricing breakdown
- **Support** — Support portal with categories and quick links

### Authentication
- User **Signup** with hashed passwords (bcryptjs)
- User **Login** with session-based auth (express-session)
- Protected dashboard — auto-redirects to login if not authenticated
- **Logout** from the dashboard profile menu

### Dashboard (Kite-Style)
- **Summary** — Equity margin & holdings overview
- **Orders** — Today's order history
- **Holdings** — Full holdings table with P&L, Net change, Day change + bar chart
- **Positions** — Open intraday/CNC positions
- **Funds** — Equity margin breakdown, add/withdraw funds
- **Apps** — Zerodha ecosystem (Kite, Coin, Console, Varsity, Sensibull, Streak)
- **Watchlist** — Live stock watchlist with Buy/Sell action buttons
- **Buy Window** — Place buy orders directly from the watchlist

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, React Router v7, Vite 5 |
| Styling | Bootstrap 5, Custom CSS |
| Charts | Chart.js, react-chartjs-2 |
| Backend | Node.js, Express 5 |
| Database | MongoDB Atlas (via Mongoose) |
| Auth | express-session + bcryptjs |
| Dev Tools | Nodemon, Vite HMR |

---

## Project Structure

```
zerodha-clone/
├── frontend/                  # React + Vite app (port 5000)
│   ├── public/
│   │   ├── font-awesome/      # Icon font assets
│   │   └── media/             # Images, SVGs, logos
│   ├── src/
│   │   ├── components/        # Dashboard components
│   │   │   ├── Dashboard.css  # All dashboard styles
│   │   │   ├── Dashboard.jsx  # Route layout
│   │   │   ├── Home.jsx       # Dashboard wrapper
│   │   │   ├── Menu.jsx       # Top nav bar
│   │   │   ├── TopBar.jsx     # NIFTY / SENSEX bar
│   │   │   ├── WatchList.jsx  # Left panel watchlist
│   │   │   ├── Summary.jsx    # Dashboard home
│   │   │   ├── Holdings.jsx   # Holdings table
│   │   │   ├── Positions.jsx  # Positions table
│   │   │   ├── Orders.jsx     # Orders page
│   │   │   ├── Funds.jsx      # Funds page
│   │   │   ├── Apps.jsx       # Apps page
│   │   │   ├── BuyActionWindow.jsx  # Buy order modal
│   │   │   ├── DoughnoutChart.jsx   # Doughnut chart
│   │   │   ├── VerticalGraph.jsx    # Bar chart
│   │   │   ├── GeneralContext.jsx   # App context
│   │   │   └── ProtectedRoute.jsx   # Auth guard
│   │   ├── landing_page/      # Public landing pages
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── home/          # Home page sections
│   │   │   ├── about/         # About page
│   │   │   ├── product/       # Products page
│   │   │   ├── Pricing/       # Pricing page
│   │   │   ├── support/       # Support page
│   │   │   ├── login/         # Login page
│   │   │   └── signup/        # Signup page
│   │   ├── data/
│   │   │   └── data.jsx       # Static watchlist & positions data
│   │   ├── utils/
│   │   │   └── authService.jsx  # API auth helpers
│   │   └── index.jsx          # App entry point + routing
│   ├── index.html             # Vite HTML entry
│   ├── vite.config.js         # Vite config + proxy
│   └── package.json
│
├── backend/                   # Express API server (port 3002)
│   ├── model/                 # Mongoose models
│   │   ├── UserModel.js
│   │   ├── HoldingsModel.js
│   │   ├── OrdersModel.js
│   │   └── PositionsModel.js
│   ├── schemas/               # Mongoose schemas
│   ├── routes/
│   │   ├── authRoute.js       # /auth/* endpoints
│   │   └── dataRoute.js       # /api/* endpoints
│   ├── index.js               # Express server entry
│   ├── .env                   # Environment variables (not committed)
│   └── package.json
│
├── README.md                  # This file
└── SETUP.md                   # ← Full local setup guide
```

---

## Quick Start

> For full step-by-step instructions including environment variables, MongoDB setup, seeding data, and deployment — see **[SETUP.md](./SETUP.md)**

```bash
# 1. Clone the repo
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone

# 2. Setup backend
cd backend && npm install
# Add your .env file (see SETUP.md)
npm start

# 3. Setup frontend (new terminal)
cd frontend && npm install
npm run start
```

Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## API Endpoints

### Auth — `/auth`
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/signup` | Register a new user |
| POST | `/auth/login` | Login with email + password |
| POST | `/auth/logout` | Logout and destroy session |
| GET | `/auth/user` | Get current logged-in user |

### Data — `/api`
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/holdings` | Get user holdings |
| GET | `/api/positions` | Get user positions |
| GET | `/allHoldings` | Get all holdings (seed data) |
| GET | `/allPositions` | Get all positions (seed data) |
| POST | `/newOrder` | Place a new buy order |

---

## Deployment

This app requires **two separate deployments**:

| Part | Recommended Platform | Free Tier |
|------|---------------------|-----------|
| Frontend | [Vercel](https://vercel.com) | Yes |
| Backend | [Render](https://render.com) | Yes |
| Database | [MongoDB Atlas](https://cloud.mongodb.com) | Yes |

See [SETUP.md → Deployment Section](./SETUP.md#deployment) for the complete guide.

---

## Screenshots

### Landing Page
- Full Zerodha-style navbar, hero section with dashboard preview image, stats, product cards

### Dashboard
- Kite-style topbar with NIFTY 50 / SENSEX live indices
- Left panel watchlist with 9 stocks, doughnut chart
- Dashboard, Orders, Holdings, Positions, Funds, Apps tabs

---

## License

This project is built for **educational purposes only** as a portfolio/learning project.  
It is not affiliated with or endorsed by Zerodha Broking Ltd.

---

<p align="center">Built with React + Node.js + MongoDB</p>
