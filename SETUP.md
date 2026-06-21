# Setup Guide — Zerodha Clone

Complete step-by-step instructions to get the project running locally and deploy it to the cloud.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Clone the Repository](#2-clone-the-repository)
3. [Backend Setup](#3-backend-setup)
4. [Environment Variables (.env)](#4-environment-variables-env)
5. [MongoDB Atlas Setup](#5-mongodb-atlas-setup)
6. [Seed the Database](#6-seed-the-database)
7. [Frontend Setup](#7-frontend-setup)
8. [Running the App](#8-running-the-app)
9. [Project URLs](#9-project-urls)
10. [Deployment](#10-deployment)
11. [Common Errors & Fixes](#11-common-errors--fixes)

---

## 1. Prerequisites

Make sure you have the following installed on your machine before starting:

| Tool | Version | Download |
|------|---------|----------|
| Node.js | v18 or higher | https://nodejs.org |
| npm | v9 or higher | Comes with Node.js |
| Git | Any recent version | https://git-scm.com |

To check if they are installed:
```bash
node -v
npm -v
git --version
```

---

## 2. Clone the Repository

```bash
git clone https://github.com/your-username/zerodha-clone.git
cd zerodha-clone
```

The project has two main folders:
- `frontend/` — React + Vite app
- `backend/` — Express + Node.js API server

---

## 3. Backend Setup

Navigate into the backend folder and install dependencies:

```bash
cd backend
npm install
```

This installs:
- `express` — Web server
- `mongoose` — MongoDB ODM
- `bcryptjs` — Password hashing
- `express-session` — Session-based auth
- `cors` — Cross-origin requests
- `body-parser` — Request body parsing
- `dotenv` — Environment variable loader
- `nodemon` — Auto-restart in development

---

## 4. Environment Variables (.env)

The backend needs a `.env` file to connect to MongoDB and configure the session.

Create a file at `backend/.env` (this file is **never committed to Git**):

```bash
# Navigate to backend folder
cd backend

# Create the .env file
touch .env
```

Open `backend/.env` and add the following:

```env
# MongoDB Atlas connection string
# Replace with your own Atlas URI (see Section 5 below)
MONGO_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority

# Port for the Express server
PORT=3002

# Session secret — use any long random string
SESSION_SECRET=your-super-secret-key-change-this
```

### Variable Explanations

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGO_URL` | **Yes** | Your MongoDB Atlas connection string. Get it from Atlas → Connect → Drivers |
| `PORT` | No | Port the backend server runs on. Defaults to `3002` if not set |
| `SESSION_SECRET` | Recommended | Secret key used to sign session cookies. Set any random string. Use something long and random in production |

> **Never share or commit your `.env` file.** The `.gitignore` file already excludes it.

---

## 5. MongoDB Atlas Setup

If you don't have a MongoDB Atlas account yet:

### Step 1 — Create a free account
Go to [https://cloud.mongodb.com](https://cloud.mongodb.com) and sign up for free.

### Step 2 — Create a Cluster
- Click **"Build a Database"**
- Choose **"M0 Free"** (free tier)
- Select a cloud provider and region closest to you
- Click **"Create"**

### Step 3 — Create a Database User
- Go to **Database Access** in the left sidebar
- Click **"Add New Database User"**
- Set a username and password (remember these — you'll use them in `MONGO_URL`)
- Set role to **"Atlas admin"** or **"Read and write to any database"**
- Click **"Add User"**

### Step 4 — Whitelist your IP
- Go to **Network Access** in the left sidebar
- Click **"Add IP Address"**
- Click **"Allow Access from Anywhere"** (for development) → `0.0.0.0/0`
- Click **"Confirm"**

### Step 5 — Get your Connection String
- Go to **Database** → Click **"Connect"** on your cluster
- Choose **"Drivers"**
- Select **Driver: Node.js**, Version: **5.5 or later**
- Copy the connection string — it looks like:
  ```
  mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  ```
- Replace `<username>` and `<password>` with your database user credentials
- Paste this as your `MONGO_URL` in `backend/.env`

---

## 6. Seed the Database

The holdings and positions data need to be seeded into MongoDB so the dashboard shows real data.

You can either:

### Option A — Use the API (auto-seeded)
The app falls back to showing seed data from `frontend/src/data/data.jsx` when no database records exist, so you can skip this step and it will still show data.

### Option B — Manually seed via MongoDB Compass
1. Download [MongoDB Compass](https://www.mongodb.com/products/compass)
2. Connect with your Atlas URI
3. Create a database called `zerodhaDB`
4. Create collections: `holdings`, `positions`, `orders`
5. Insert sample documents matching the schema in `backend/schemas/`

### Sample Holdings Document
```json
{
  "name": "INFY",
  "qty": 1,
  "avg": 1350.50,
  "price": 1555.45,
  "net": "-1.60%",
  "day": "-1.60%",
  "isLoss": true
}
```

### Sample Positions Document
```json
{
  "product": "CNC",
  "name": "EVEREADY",
  "qty": 2,
  "avg": 316.27,
  "price": 312.35,
  "net": "-1.24%",
  "day": "-1.24%",
  "isLoss": true
}
```

---

## 7. Frontend Setup

Open a **new terminal**, navigate to the frontend folder, and install dependencies:

```bash
cd frontend
npm install
```

This installs:
- `react` & `react-dom` — UI library
- `react-router-dom` — Client-side routing
- `axios` — HTTP client for API calls
- `chart.js` + `react-chartjs-2` — Charts for Holdings and Watchlist
- `vite` + `@vitejs/plugin-react` — Build tool and dev server

### Vite Proxy Configuration

The frontend is pre-configured to proxy API requests to the backend. In `frontend/vite.config.js`:

```js
proxy: {
  '/auth': { target: 'http://localhost:3002', changeOrigin: true },
  '/api':  { target: 'http://localhost:3002', changeOrigin: true },
  ...
}
```

This means in development, any request to `/auth/login` from the frontend automatically goes to `http://localhost:3002/auth/login`. **No changes needed for local development.**

---

## 8. Running the App

You need **two terminals** running simultaneously.

### Terminal 1 — Start the Backend
```bash
cd backend
npm start
```

You should see:
```
MongoDB Connected
Server running on port 3002
```

### Terminal 2 — Start the Frontend
```bash
cd frontend
npm run start
```

You should see:
```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:5000/
```

---

## 9. Project URLs

Once both servers are running:

| Page | URL |
|------|-----|
| Home (landing) | http://localhost:5000/ |
| About | http://localhost:5000/about |
| Products | http://localhost:5000/product |
| Pricing | http://localhost:5000/pricing |
| Support | http://localhost:5000/support |
| Login | http://localhost:5000/login |
| Signup | http://localhost:5000/signup |
| Dashboard | http://localhost:5000/dashboard |
| Holdings | http://localhost:5000/dashboard/holdings |
| Positions | http://localhost:5000/dashboard/positions |
| Orders | http://localhost:5000/dashboard/orders |
| Funds | http://localhost:5000/dashboard/funds |
| Apps | http://localhost:5000/dashboard/apps |
| Backend API | http://localhost:3002 |

---

## 10. Deployment

### Frontend → Vercel

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repo
4. Set **Root Directory** to `frontend`
5. Set **Build Command** to `npm run build`
6. Set **Output Directory** to `dist`
7. Add this **Environment Variable** in Vercel:
   ```
   VITE_API_URL = https://your-render-backend-url.onrender.com
   ```
8. Click **Deploy**

### Backend → Render

1. Go to [render.com](https://render.com) → **New → Web Service**
2. Connect your GitHub repo
3. Set **Root Directory** to `backend`
4. Set **Build Command** to `npm install`
5. Set **Start Command** to `node index.js`
6. Add these **Environment Variables** in Render:
   ```
   MONGO_URL      = your MongoDB Atlas URI
   PORT           = 3002
   SESSION_SECRET = your-strong-random-secret
   ```
7. Click **Create Web Service**

### After Deploying Both

Update `frontend/vite.config.js` — replace `http://localhost:3002` with your Render URL:

```js
proxy: {
  '/auth': { target: 'https://your-app.onrender.com', changeOrigin: true },
  '/api':  { target: 'https://your-app.onrender.com', changeOrigin: true },
  ...
}
```

Then redeploy the frontend on Vercel.

---

## 11. Common Errors & Fixes

### `MongoDB Connection Error`
- Check that `MONGO_URL` in `backend/.env` is correct
- Make sure your IP is whitelisted in MongoDB Atlas (Network Access → `0.0.0.0/0`)
- Make sure the database username and password are correct (no special characters that need URL encoding)

### `Cannot GET /` on port 3002
- This is normal — the backend only serves API routes, not a webpage
- The frontend at port 5000 is the actual app

### `401 Unauthorized` in browser console
- This is the auth check firing — it's expected on public pages. The app checks if you're logged in and shows login/logout buttons accordingly

### `CORS error` in production
- In `backend/index.js`, update the CORS origin to your Vercel frontend URL:
  ```js
  app.use(cors({
    origin: 'https://your-app.vercel.app',
    credentials: true,
  }));
  ```

### Port already in use
```bash
# Kill process on port 3002 (backend)
npx kill-port 3002

# Kill process on port 5000 (frontend)
npx kill-port 5000
```

### `npm install` fails
- Make sure you are running Node.js v18 or above: `node -v`
- Delete `node_modules` and `package-lock.json` and retry:
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```

---

## File Structure Reference

```
backend/
├── .env               ← YOU CREATE THIS (see Section 4)
├── index.js           ← Server entry point
├── routes/
│   ├── authRoute.js   ← /auth/login, /auth/signup, /auth/logout
│   └── dataRoute.js   ← /api/holdings, /api/positions
├── model/             ← Mongoose models
├── schemas/           ← Mongoose schemas
└── package.json

frontend/
├── src/
│   ├── index.jsx      ← App entry + all routes
│   ├── components/    ← Dashboard pages
│   ├── landing_page/  ← Public pages
│   ├── data/data.jsx  ← Static seed data (watchlist, positions)
│   └── utils/authService.jsx  ← API helpers
├── public/media/      ← Images and SVGs
├── vite.config.js     ← Dev server + API proxy config
└── package.json
```

---

<p align="center">Having issues? Open an issue on GitHub or check the <a href="./README.md">README</a></p>
