# 🔧 Supabase + Vercel + GitHub Pages - Fullstack CRUD + Auth (Tanpa Framework)

Proyek ini adalah contoh implementasi fullstack:
- ✅ **Frontend** HTML + JavaScript biasa (tanpa framework)
- ✅ **Backend** Serverless API menggunakan Vercel
- ✅ **Database dan Auth** menggunakan Supabase

---

## 📁 Struktur Project
my-crud-project/
├── index.html ← Frontend (bisa di-host di GitHub Pages)
├── vercel-api/ ← Serverless API functions untuk Vercel
│ ├── get-items.js
│ ├── add-item.js
│ ├── update-item.js
│ ├── delete-item.js
│ └── lib/
│ └── supabaseClient.js
├── .env.example ← Template ENV untuk backend
├── README.md


---

## 🚀 Fitur

- 🔐 Register & Login user dengan Supabase Auth
- 📦 CRUD data ke tabel Supabase
- 📡 Komunikasi frontend ↔️ serverless ↔️ database
- 🌐 Hosting:
  - Frontend: GitHub Pages
  - Backend: Vercel
