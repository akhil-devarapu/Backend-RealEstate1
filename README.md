# 🏡 Real Estate Platform - Backend

This is a fully functional backend API for a real estate listing platform built using **Node.js**, **Express.js**, and **SQLite**. It supports features like property listings, project management, inquiries, broker details, price trends, and more—mirroring platforms like MagicBricks, 99acres, and Housing.com.

---

## 🚀 Features

### ✅ Authentication & Authorization
- Role-based access: `buyer`, `seller`, `broker`, `builder`, `admin`
- JWT-based secure login & access control
- OTP verification for mobile number
- Admin managed separately with dedicated table

### 🏘️ Property Listings
- Add, view, and search property listings
- Location-based search, filters, and sorting
- Map-based search via coordinates
- Detailed property info API

### 🧱 Project Management (for Builders)
- Add new projects with unit types and specifications
- View projects by ID
- List all units under a project

### 📥 Inquiries & Site Visits
- Send inquiry messages (buyers only)
- Schedule site visits
- Sellers can manage lead status (contacted, visit scheduled, converted, etc.)

### ❤️ Favorites & Comparisons
- Add/remove properties to favorites
- Compare selected properties by features, pricing, pros & cons

### 🧑‍💼 Broker APIs
- Register as a broker
- Search brokers by location, specialization, rating

### 📝 Reviews
- Submit reviews on properties with aspect-based ratings (location, amenities, connectivity, etc.)
- View all reviews by property ID

### 📊 Price Trends
- Fetch price trends based on city, locality, and property type
- Get forecast and historical data

### 🧮 Home Loan Calculator
- Calculate EMI based on loan amount, interest rate, and tenure

### 🔔 Notifications & Alerts
- Create property alerts by filters and preferred frequency
- View notifications (daily/weekly)

### 🛠️ Admin APIs
- Verify property listings
- View listing reports

### 📈 Seller Dashboard
- View listings posted by seller
- Track views, inquiries, shortlisted counts
- Update lead status for received inquiries

---

## 🗂️ Tech Stack

| Layer           | Tech                    |
|----------------|-------------------------|
| Runtime         | Node.js                 |
| Framework       | Express.js              |
| Database        | SQLite (via `sqlite3`)  |
| Auth            | JWT + bcrypt            |
| API Testing     | Postman                 |
| Environment     | `.env` for secrets      |

---

## 📁 Folder Structure

real-estate-backend/
│
├── src/
│   ├── config/                   # DB connection
│   │   └── database.js
│   │
│   ├── controllers/             # All controller logic
│   │   ├── adminController.js
│   │   ├── alertController.js
│   │   ├── authController.js
│   │   ├── brokerController.js
│   │   ├── favoritesController.js
│   │   ├── inquiryController.js
│   │   ├── priceController.js
│   │   ├── projectController.js
│   │   ├── propertyController.js
│   │   ├── reviewController.js
│   │   ├── searchController.js
│   │   ├── sellerController.js
│   │   └── userController.js
│   │
│   ├── middleware/              # Middlewares for auth, roles
│   │   ├── auth.js
│   │   └── roleMiddleware.js
│   │
│   ├── routes/                  # All API route files
│   │   ├── adminRoutes.js
│   │   ├── alertRoutes.js
│   │   ├── authRoutes.js
│   │   ├── brokerRoutes.js
│   │   ├── favoriteRoutes.js
│   │   ├── inquiryRoutes.js
│   │   ├── priceRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── propertyRoutes.js
│   │   ├── reviewRoutes.js
│   │   ├── searchRoutes.js
│   │   └── sellerRoutes.js
│   │
│   ├── app.js                  # Main Express app entry
│   └── initdb.js               # SQLite DB schema/init script
│----Database/
|        |---scheema.sql
|       |----seed.sql
|
|-----data/
|      |---real_estate.db
|
├── .env                        # Environment secrets (ignored by Git)
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
