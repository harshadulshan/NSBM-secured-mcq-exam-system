<div align="center">

<!-- Animated Header -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a0f2c,50:1a56db,100:60a5fa&height=200&section=header&text=NSBM%20Secured%20MCQ%20Exam%20System&fontSize=36&fontColor=ffffff&fontAlignY=38&desc=A%20Modern%20Full%20Stack%20Online%20Exam%20Platform&descAlignY=58&descColor=93c5fd" />

<!-- Badges -->
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

<br/>

[![GitHub stars](https://img.shields.io/github/stars/harshadulshan/NSBM-secured-mcq-exam-system?style=social)](https://github.com/harshadulshan/NSBM-secured-mcq-exam-system)
[![GitHub forks](https://img.shields.io/github/forks/harshadulshan/NSBM-secured-mcq-exam-system?style=social)](https://github.com/harshadulshan/NSBM-secured-mcq-exam-system)

</div>

---

## ✨ Overview

> A **secure, modern, full-stack MCQ exam platform** built for NSBM Green University Town. Designed with a professional **Glassmorphism UI**, JWT-based authentication, real-time timer, and a complete admin panel — all powered by React and FastAPI.

---

## 🖼️ Screenshots

<div align="center">

### 🔐 Login Page
<img src="screenshots/login.png" width="800" style="border-radius:12px; margin-bottom:16px;" />

### 📝 Exam Page
<img src="screenshots/exam.png" width="800" style="border-radius:12px; margin-bottom:16px;" />

### 📊 Result Page
<img src="screenshots/result.png" width="800" style="border-radius:12px; margin-bottom:16px;" />

### 🛠️ Admin Panel
<img src="screenshots/admin.png" width="800" style="border-radius:12px; margin-bottom:16px;" />

</div>

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🔐 JWT Authentication | Secure login and register with token-based auth |
| ⏱️ Live Countdown Timer | 30 minute exam timer with color warning |
| 📊 Progress Bar | Real-time answered question tracking |
| 🎓 Grade System | Automatic A, B, C, F grade calculation |
| 🛡️ Admin Panel | Add and delete questions through the browser |
| 💾 Result History | All exam results saved to database |
| 🌐 REST API | Full FastAPI backend with auto documentation |
| 🎨 Glassmorphism UI | Modern Midnight Blue frosted glass design |
| 📱 Responsive | Works on both mobile and desktop |

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React 18 with Vite
- 🔀 React Router DOM
- 📡 Axios
- 🎨 Custom CSS with Glassmorphism

### Backend
- ⚡ FastAPI
- 🗄️ SQLite with SQLAlchemy
- 🔑 JWT with python-jose
- 🔒 bcrypt for password hashing
- 🦄 Uvicorn ASGI server

---

## ⚙️ Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- Git

### 1️⃣ Clone the Repository
```bash

http://localhost:5173

---

## 🔐 Default Credentials

| Role | Username | Password |
|---|---|---|
| Admin | admin | admin123 |
| Student | register yourself | any password |

> To make a user admin, update the `is_admin` field in the database.

---

## 📂 Project Structure

NSBM-secured-mcq-exam-system/
│
├── backend/
│   └── app/
│       ├── database/     # DB connection and seed
│       ├── models/       # SQLAlchemy models
│       ├── routes/       # API route handlers
│       └── main.py       # FastAPI entry point
│
├── frontend/
│   └── src/
│       ├── api/          # Axios config
│       ├── components/   # Reusable UI components
│       ├── context/      # Auth context
│       ├── pages/        # Page components
│       └── assets/       # Logo and images
│
└── screenshots/          # Project preview images

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

### 👨‍💻 Developer

**Harsha Dulshan**
Final Year MIS Undergraduate | NSBM Green University
Founder — Kaldera Construction

[![GitHub](https://img.shields.io/badge/GitHub-harshadulshan-181717?style=for-the-badge&logo=github)](https://github.com/harshadulshan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/harshadulshan)

<br/>

⭐ Star this repo if you found it useful!

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:60a5fa,50:1a56db,100:0a0f2c&height=120&section=footer" />

</div>
