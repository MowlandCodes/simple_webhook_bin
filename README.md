# Webhook Bin 🎣

<p align="center">
  <img src="https://raw.githubusercontent.com/MowlandCodes/MowlandCodes/main/assets/banner.png" alt="Webhook Bin Banner" />
</p>

<p align="center">
  <strong>A simple, persistent webhook listener for your CTF journey and development needs.</strong>
  <br />
  <br />
  <img src="https://img.shields.io/badge/Made%20with-TypeScript-blue?logo=typescript&logoColor=white" alt="Made with TypeScript">
  <img src="https://img.shields.io/badge/Powered%20by-Express.js-black?logo=express&logoColor=white" alt="Powered by Express.js">
  <img src="https://img.shields.io/badge/Database-Knex.js-orange?logo=knex.js&logoColor=white" alt="Database with Knex.js">
  <img src="https://img.shields.io/badge/License-UNLICENSED-red" alt="License">
</p>

---

## ## About The Project

Pernah kesel pas lagi ikut CTF atau ngoprek sesuatu, terus butuh cara cepet buat nangkep dan nginspeksi _payload_ dari webhook? **Webhook Bin** adalah solusinya. Ini adalah server Express.js sederhana yang siap menampung semua data webhook yang dikirim, menyimpannya secara persisten di database, dan memungkinkan kamu untuk mengaksesnya kembali kapan pun lewat API.

Gak perlu lagi ngandelin servis _online_ yang datanya ilang atau terbatas. Dengan ini, kamu punya "tong sampah" webhook pribadi yang bisa di-host di mana aja.

---

## ## ✨ Features

- **🗄️ Persistent Storage:** Semua data yang masuk disimpan di database (SQLite, MySQL, PostgreSQL, dll) menggunakan Knex.js. Gak ada lagi data yang hilang pas server di-restart.
- **🔌 Flexible Data Ingestion:** Bisa nangkep data dari `Body` ataupun `Query Parameter`, bahkan bisa nge-merge keduanya secara otomatis.
- **🔑 RESTful API:** Sedia API _endpoint_ yang jelas untuk menyimpan, melihat semua data, dan melihat data spesifik berdasarkan ID.
- **🚀 Easy to Setup:** Cukup clone, install dependensi, setup file `.env`, jalankan migrasi, dan server siap tempur.
- **🔷 Built with TypeScript:** Kode lebih terstruktur, aman, dan gampang di-maintain.

---

## ## 🛠️ Tech Stack

Proyek ini dibangun menggunakan teknologi modern dan handal:

- **Backend:** Node.js, Express.js
- **Language:** TypeScript
- **Database:** Knex.js (Query Builder) dengan driver `mysql`, `sqlite3`, atau `pg`.
- **Development:** Nodemon, ts-node, dotenv

---

## ## 🚀 Getting Started

Ikuti langkah-langkah ini untuk menjalankan server Webhook Bin di lokal.

### ### Prerequisites

Pastikan kamu sudah menginstall:

- [Node.js](https://nodejs.org/) (v18 atau lebih tinggi)
- NPM / Yarn / PNPM

### ### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MowlandCodes/webhook_bin.git
   cd webhook_bin
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Setup environment variables:**
   Buat file `.env` di _root_ proyek dengan meniru dari `.env.example`.

   ```bash
   cp .env.example .env
   ```

   Kemudian, buka file `.env` dan sesuaikan dengan konfigurasi database kamu.

4. **Run database migrations:**
   Perintah ini akan membuat tabel yang dibutuhkan di database sesuai konfigurasi di `knexfile.ts`.

   ```bash
   npx knex migrate:latest
   ```

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   Server akan berjalan di `http://localhost:3000` (atau port yang kamu set di `.env`).

---

## ## 📖 API Endpoints

Berikut adalah daftar _endpoint_ yang tersedia.

| Method | Endpoint       | Deskripsi                                       | Contoh `curl` Command                                                                                                |
| :----- | :------------- | :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| `POST` | `/webhook`     | Menyimpan data dari `body` dan/atau `query`.    | `curl -X POST -H "Content-Type: application/json" -d '{"user":"naufal"}' "http://localhost:3000/webhook?from=query"` |
| `GET`  | `/webhook`     | Mengambil semua data webhook yang tersimpan.    | `curl http://localhost:3000/webhook`                                                                                 |
| `GET`  | `/webhook/:id` | Mengambil data webhook spesifik berdasarkan ID. | `curl http://localhost:3000/webhook/a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d`                                            |

---

## ## ⚙️ Configuration

Aplikasi ini dikonfigurasi menggunakan _environment variables_.

| Variable      | Deskripsi                                               | Contoh Default |
| :------------ | :------------------------------------------------------ | :------------- |
| `PORT`        | Port untuk server Express.                              | `3000`         |
| `ENVIRONMENT` | Environment aplikasi (`development` atau `production`). | `development`  |
| `DB_DRIVER`   | Driver database Knex (`sqlite3`, `mysql`, `pg`).        | `sqlite3`      |
| `DB_HOST`     | Host database.                                          | `127.0.0.1`    |
| `DB_PORT`     | Port database.                                          | `3306`         |
| `DB_USER`     | Username database.                                      | `root`         |
| `DB_PASSWORD` | Password database.                                      | `password`     |
| `DB_NAME`     | Nama database.                                          | `webhook_bin`  |

---

## ## 📜 License

Proyek ini berada di bawah lisensi UNLICENSED. Silakan gunakan, modifikasi, dan distribusikan sesuai kebutuhan. Jika kamu ingin menggunakannya sebagai proyek open-source, pertimbangkan untuk menambahkan lisensi seperti MIT.

---

<p align="center">
  Made with ❤️ by <b>MowlandCodes</b>
</p>
