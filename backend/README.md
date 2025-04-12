# Daystar Daycare Center Backend

This is the backend system for Daystar Daycare Center, built with **Node.js**, **Express**, and **MySQL**. It manages user accounts, children, babysitters, attendance, incidents, payments, notifications, and financial summaries.

---

## 🚀 Features
- **User Authentication** (JWT-based, roles: manager, babysitter)
- **Babysitter Management**
- **Child Registration & Attendance Tracking**
- **Incident Reporting** by babysitters
- **Fee Management** for guardians (session-based billing)
- **Babysitter Payment Tracking**
- **Email Notifications**
- **Dashboard Summary** for finance and statistics

---

## 📁 Folder Structure
```
project-root/
├── config/            # Database connection
├── controllers/       # All business logic
├── middleware/        # Auth & role-checking middleware
├── models/            # Table creation scripts
├── routes/            # API routes
├── utils/             # JWT token & email helpers
├── index.js           # Entry point
├── .env               # Environment configuration
```

---

## 🛠️ Setup Instructions

### 1. Clone the repository
```bash
git clone <your_repo_url>
cd daycare-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
```env
PORT=5000
HOST=localhost
USER=root
PASSWORD=your_mysql_password
DATABASE=daycare_db
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

### 4. Run the server
```bash
npm run dev
```

### 5. Initialize database tables
Tables are automatically created on server startup:
- `users`
- `babysitters`
- `children`
- `attendance`
- `incidents`
- `payments`
- `fees`
- `notifications`

---

## 🔐 Roles & Access
| Role        | Permissions                                   |
|-------------|-----------------------------------------------|
| **Manager** | Full access to all routes                     |
| Babysitter  | Can mark attendance & report incidents only   |

---

## 📬 Email & Notifications
Uses Gmail SMTP via [Nodemailer](https://nodemailer.com/about/) to:
- Send OTP codes for password resets
- Send custom messages via notifications endpoint

---

## 📊 Dashboard Summary Endpoint
- **Route**: `GET /api/dashboard`
- Returns income, expenses, total children, babysitters, and attendance

---

## 🔒 Authentication
Uses **JWT** in HTTP-only cookies for session security. Logged-in users will have their role and user ID embedded in the token.

---

## 📦 API Endpoints Overview

### Auth
```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/forgot-password
POST /api/auth/verify-otp
POST /api/auth/reset-password
```

### Babysitters
```
POST /api/babysitters/register
GET /api/babysitters/
```

### Children
```
POST /api/children/register
GET /api/children/
```

### Attendance
```
POST /api/attendance/mark
GET /api/attendance/
```

### Incidents
```
POST /api/incidents/report
GET /api/incidents/
```

### Payments
```
POST /api/finance/record
GET /api/finance/
```

### Parent Fees
```
POST /api/fees/record
GET /api/fees/
```

### Notifications
```
POST /api/notify/send
GET /api/notify/
```

### Dashboard
```
GET /api/dashboard
```

---

## 📘 License
MIT License

---

## 👨‍💻 Author
Daystar Daycare System – Web Programming Final Project
