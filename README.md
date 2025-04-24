# 🛍️ Product Catalog App

A simple full-stack web application where users can add new products and view them on the homepage. This app is built using **React (Vite)** for the frontend, **Node.js + Express** for the backend, and **MongoDB** as the database.

## 🔧 Tech Stack

- **Frontend**: React with Vite
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **API Client**: Axios
- **Styling**: Tailwind CSS / CSS Modules (update based on your choice)

---

## 🚀 Features

- Add a product with name, image, price, and description.
- Display all added products on the home screen.
- REST API integration between frontend and backend.
- MongoDB database for persistent storage.

---

## 📦 Installation

### Prerequisites

- Node.js
- MongoDB (local or Atlas)
- npm or yarn

### Clone the repo

```bash
git clone https://github.com/yourusername/product-catalog-app.git
cd product-catalog-app

---

### 🚀 Backend Setup
cd backend
npm install
npm run dev

---

###Frontend Setup
cd frontend
npm install
npm run dev

---

####Project Structure

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

----


 Environment Variables

Create a .env file inside the backend folder:

MONGO_URI=your_mongodb_connection_string
PORT=5000
