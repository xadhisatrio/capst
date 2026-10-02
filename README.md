# RotiKita

Prototipe Sistem Informasi Pre-Order Produk Kue dan Roti UMKM untuk Capstone Project STSI4440.

## Fitur versi awal

- Katalog dan pencarian produk
- Filter kategori
- Keranjang pre-order
- Formulir jadwal pengambilan/pengiriman
- Unggah bukti pembayaran
- Pelacakan status pesanan
- Login/register dalam mode demo
- Dashboard admin, kapasitas produksi, dan daftar pesanan
- Skema database Supabase

## Menjalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Menghubungkan Supabase

1. Buat project baru di Supabase.
2. Jalankan `supabase/schema.sql` melalui SQL Editor.
3. Salin `.env.example` menjadi `.env.local`.
4. Isi URL dan publishable key dari pengaturan API Supabase.

Tanpa variabel Supabase, aplikasi tetap dapat dibuka dalam mode demo.

## Deploy ke Vercel

1. Unggah folder ini ke repository GitHub.
2. Import repository melalui dashboard Vercel.
3. Tambahkan environment variables Supabase pada pengaturan project Vercel.
4. Jalankan deployment.
