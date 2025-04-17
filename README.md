# 💸 Smart-Split-AI (Microservices + Docker)

This is a real-life, microservices-based **AI-powered personal finance manager** built using Node.js, Express, MongoDB, and Docker. It includes:

- 🔐 **Auth Service** — handles user authentication (login/register)
- 💰 **Expense Service** — manages expenses and split logic
- 🤝 **Settlement Service** — calculates and tracks balances between users
- 🐳 **Docker & Docker Compose** — all services run in containers for easy local setup

---

## ⚙️ Services Overview

### 1. 🔐 Auth Service
- Handles user registration & login
- JWT authentication
- MongoDB for user data

### 2. 💸 Expense Service
- Add expenses with split logic (who paid, who owes)
- Calculates per-user share
- MongoDB for expense data


## 🧩 Technologies Used

- Node.js + Express
- MongoDB + Mongoose
- Docker + Docker Compose
- REST APIs
- JWT Authentication
- Microservices architecture

### ✅ Prerequisites

- Docker & Docker Compose installed
- `.env` files created from `.env.example` for each service

### 🔧 Clone the Repository

git clone https://github.com/Prabodhini-tiwari/Smart-Split-AI.git
cd Smart-Split-AI

🐳 Run All Services:

docker-compose up --build


