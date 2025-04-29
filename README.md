# 🛒 Shopping Cart App

This is a **React + Redux Toolkit + TypeScript** shopping cart application, built using **Vite** and deployed with **GitHub Pages** via **GitHub Actions**.

Users can:
- View a list of products
- Add products to their cart
- Increase or decrease product quantities
- Remove products from their cart
- Navigate between Home and Cart pages
- See real-time cart updates

---

## 🚀 Live Demo
[![Deploy to GitHub Pages](https://img.shields.io/github/deployments/phaiza/shopping-cart-redux-store/github-pages?label=Deployed%20on%20GitHub%20Pages)](https://phaiza.github.io/shopping-cart-redux-store/)

---

## 🛠️ Tech Stack

- **React** (with functional components and hooks)
- **Redux Toolkit** (for state management)
- **TypeScript** (for strong typing)
- **Vite** (for fast dev build)
- **React Router** (for routing)
- **GitHub Actions** (for CI/CD deployment)

---

## 🏗️ Project Structure
src/
├── app/                  # Redux store setup
├── components/            # Reusable components (ProductList, etc.)
├── features/              # Redux slices (cart, products)
├── pages/                 # Main pages (Home, Cart)
├── types/                 # TypeScript types
├── App.tsx                # Main application
├── main.tsx               # Entry point

---

## 🧩 Key Features

- **Add to Cart** with live quantity updates
- **Remove from Cart** with smart quantity handling
- **Navigation** between Home and Cart pages
- **Real-time state updates** through Redux DevTools
- **CI/CD pipeline** with GitHub Actions → automatic deploy to GitHub Pages

---

## 📦 Installation and Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/phaiza/shopping-cart-redux-store.git
cd shopping-cart-redux-store
```
2.	Install dependencies:
```bash
npm install
```
3.	Start the development server:
```bash
npm run dev
```
4.	Build for production:
```bash
npm run build
```

## 🚀 Deployment (CI/CD)

This project uses GitHub Actions to automatically build and deploy to GitHub Pages whenever changes are pushed to the main branch.

Workflow file:
.github/workflows/deploy.yml
