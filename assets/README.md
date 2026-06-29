# Folder Aset Foto — Klien Arman & Dian

Folder ini dilayani Vite di URL root (`/assets/...`). Semua file di sini langsung bisa diakses
publik setelah deploy.

## 1. Foto Cover Hero — Slideshow 3 Foto Adat

Simpan di sini, langsung di `public/assets/`:

```
cover-1.jpg
cover-2.jpg
cover-3.jpg
```

- Format: JPG (rekomendasi) atau PNG
- Rasio: bebas, tapi sebaiknya **portrait 3:4 atau 4:5** (akan di-crop center via `object-fit: cover`)
- Ukuran file: kompres dulu ke **<300 KB** per foto (pakai tinypng.com atau squoosh.app)
- Resolusi minimum: 1080×1440px

Kalau ekstensi berbeda (misal `.png`), edit path di `src/data/weddingConfig.js`
field `coverPhotos`.

## 2. Foto Galeri — 25 Slot

Simpan di subfolder `public/assets/gallery/` dengan penamaan **persis** seperti ini:

```
foto-01.jpg
foto-02.jpg
foto-03.jpg
...
foto-25.jpg
```

- Format: JPG
- Rasio: 4:3 landscape (akan ditampilkan dalam grid 4:3)
- Ukuran file: kompres ke **<200 KB** per foto
- Resolusi minimum: 800×600px

Jika kurang dari 25 foto, edit array `gallery` di `src/data/weddingConfig.js` untuk
hapus entry yang belum ada — kalau path tidak ada filenya, kartu galeri akan tampil
broken-image icon.
