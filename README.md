# 🛍️ Product Catalog App

A simple full-stack web application where users can add new products and view them on the homepage. This app is built using **React (Vite)** for the frontend, **Node.js + Express** for the backend, and **MongoDB** as the database.

---

## 🛠️ Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **API Client**: Axios
- **Styling**: Tailwind CSS (or your preferred CSS solution)

---

## ✨ Features

- Add a product with name, image, price, and description.
- Display all added products on the home screen.
- RESTful API integration between frontend and backend.
- MongoDB used for persistent product storage.

---

## 📦 Installation Guide

Follow the steps below to set up the project locally on your machine.

---

### 🚀 Backend Setup

```bash
cd backend
npm install
```
Initially run the backend and then close the backend by clicking cd and then open the next termnial by opening the below commmand and then you will see the proper running project thank you

### Frontend Setup
```bash
cd frontend
npm install
```
---
### Env file 
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
---

### Project Structure
```bash
product-catalog-app/
├── backend/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
└── README.md
```






