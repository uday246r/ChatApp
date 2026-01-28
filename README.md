# ChatApp

A **full-stack Chat Application** built with **TypeScript**, featuring a **Node.js backend** and a **React (Vite) frontend**.

---

## 📁 Project Structure

```
ChatApp/
│
├── backend/
│   ├── src/
│   │   ├── index.ts
│   │   └── day1.ts
│   │
│   ├── dist/
│   │   ├── index.js
│   │   ├── day1.js
│   │   ├── *.d.ts
│   │   └── *.map
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── node_modules/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── vite-env.d.ts
│   │
│   ├── index.html
│   ├── package.json
│   ├── eslint.config.js
│   └── tsconfig.app.json
│
└── README.md
```

---

## 🚀 Tech Stack

### Backend

* Node.js
* TypeScript
* Compiled output in `dist/`
* Source code in `src/`

### Frontend

* React
* TypeScript
* Vite
* CSS for styling

---

## ⚙️ Backend Setup

```bash
cd backend
npm install
npm run build
npm start
```

### Development Mode

```bash
npm run dev
```

> Backend TypeScript files are compiled from `src/` to `dist/`.

---

## ⚙️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

---

## 📦 Scripts (Typical)

### Backend

* `npm run dev` – Run backend in development
* `npm run build` – Compile TypeScript
* `npm start` – Run compiled JS

### Frontend

* `npm run dev` – Start Vite dev server
* `npm run build` – Build for production
* `npm run preview` – Preview production build

---

## 📌 Notes

* Backend uses **TypeScript build output (`dist`)**, so do not edit files in `dist/` manually.
* Frontend is powered by **Vite**, providing fast refresh and optimized builds.
* Both frontend and backend have **separate `package.json` files**.

---

## 👨‍💻 Author

**Uday**
B.E. CSE Student | MERN & TypeScript Developer
