// Heritage - Modern Adat Wedding Config
// Klien: Arman Kanaf & Dian Hezedila Sharon
// Acara: 25 Juli 2026, Parigi Mautong, Sulawesi Tengah

const weddingConfig = {
  // ─── Identitas Mempelai ─────────────────────────────────────────────────────
  groomName: "Arman Kanaf",
  groomNameShort: "Arman",
  groomParents: "Putra keempat dari Bapak Felipus Kanaf & Ibu Frida A.B.T Baok",
  groomPhotoUrl: "", // URL foto mempelai pria (bulat, 1:1) — kosong = tampil inisial
  groomIG: "@armankanafkanaf",

  brideName: "Dian Hezedila Sharon",
  brideNameShort: "Dian",
  brideParents: "Putri kedua dari Alm. Bapak I Wayan Wismayasa & Ibu Elim Sia Wasti Tehampa",
  bridePhotoUrl: "", // URL foto mempelai wanita (bulat, 1:1) — kosong = tampil inisial
  brideIG: "@dianhzsharon",

  couplePhotoUrl: "", // Foto berdua — dipakai di section CouplePhoto jika diaktifkan

  // ─── Cover Background ───────────────────────────────────────────────────────
  // "slideshow" : gunakan coverPhotos[] — 3 foto bergantian auto-cycling (AKTIF)
  // "photo"     : gunakan couplePhotoUrl (1 foto tunggal)
  // "color"     : background solid gradient warna tema
  coverBackgroundType: "slideshow",

  // Tiga foto adat Arman & Dian — simpan file di src/assets/
  // Nama file bisa disesuaikan; pastikan path di sini cocok.
  coverPhotos: [
    "/assets/cover-1.jpg",
    "/assets/cover-2.jpg",
    "/assets/cover-3.jpg",
  ],

  // Kaligrafi Arab — dinonaktifkan (pasangan Kristiani)
  showArabicCalligraphy: false,
  arabicCalligraphyText: "",

  // ─── Acara ──────────────────────────────────────────────────────────────────
  events: [
    {
      id: "pemberkatan",
      name: "Pemberkatan Nikah",
      date: "Sabtu, 25 Juli 2026",
      time: "11.00 WITA – selesai",
      venue: "GKST Jemaat Imanuel Parigi",
      address: "Sulawesi Tengah",
      mapsUrl: "https://maps.app.goo.gl/grQ1n2DdH7pQQsqj7",
      showOnInvite: true,
    },
    {
      id: "resepsi",
      name: "Resepsi Pernikahan",
      date: "Sabtu, 25 Juli 2026",
      time: "19.00 WITA – selesai",
      venue: "Auditorium Kantor Bupati Parigi Mautong",
      address: "Sulawesi Tengah",
      mapsUrl: "https://maps.app.goo.gl/SjQUWF4XsHN4jCsF7",
      showOnInvite: true,
    },
  ],

  // ─── Countdown Target (Pemberkatan Nikah, WITA = UTC+8) ────────────────────
  countdownTarget: "2026-07-25T11:00:00+08:00",

  // ─── Our Prayer (section terpisah dari ayat Alkitab) ────────────────────────
  ourPrayer:
    "Dalam setiap doa kami dan dalam kasih-Nya yang kekal, Tuhan mempertemukan kami, bukan hanya untuk berjalan bersama, tetapi untuk dipersatukan dalam satu panggilan: menjadi terang dan saksi kasih Kristus bagi bangsa-bangsa.",

  // ─── Ayat Alkitab (section khusus di footer) ────────────────────────────────
  scriptureVerse:
    "Kiranya Engkau sekarang berkenan memberkati keluarga hamba-Mu ini, supaya tetap ada di hadapan-Mu untuk selama-lamanya. Sebab apa yang Engkau berkati, ya TUHAN, diberkati untuk selama-lamanya.",
  scriptureReference: "1 Tawarikh 17:27 (TB)",

  // ─── Penutup & Nama Keluarga ────────────────────────────────────────────────
  closingText: "Dengan kasih dan sukacita dalam Tuhan, Hormat kami keluarga besar",
  familyNamesLeft: [
    "Kel. Kanaf - Baok",
    "Kel. Neno - Nenoharan",
    "Kel. Pdt. Noh Ruku",
    "Kel. Masriani Ruthi Tiara Lina Siregar",
  ],
  familyNamesRight: [
    "Kel. Wismayasa – Tehampa",
    "Kel. Tehampa – Louhenapessy",
    "Kel. Bartolomius – Wirati",
    "Kel. Nyolo-nyolo - Tangkidi",
  ],

  // ─── Sections Toggle ────────────────────────────────────────────────────────
  showCouplePhotoSection: false,
  couplePhotoCaptionText: "",

  showLoveStory: false, // Belum ada data dari klien — aktifkan & isi loveStory[] nanti
  showGallery: true,
  showMaps: true,
  showRsvp: true,
  showWishes: true,
  showDigitalEnvelope: true,

  // ─── Love Story (isi nanti jika klien menyediakan cerita) ───────────────────
  loveStory: [],

  // ─── Galeri — 30 foto (isi file ke src/assets/gallery/ dengan nama berikut) ──
  // Format: foto-01.jpg … foto-30.jpg
  gallery: Array.from({ length: 30 }, (_, i) => ({
    src: `/assets/gallery/foto-${String(i + 1).padStart(2, "0")}.jpg`,
    alt: `Foto ${i + 1} — Arman & Dian`,
  })),

  // ─── Maps Embed ─────────────────────────────────────────────────────────────
  // Ganti nilai ini dengan embed URL dari Google Maps (klik Share → Embed a map)
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Auditorium+Kantor+Bupati+Parigi+Mautong+Sulawesi+Tengah&output=embed",

  // ─── RSVP & Ucapan ───────────────────────────────────────────────────────────
  rsvpWebhookUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
  wishesWebhookUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",

  // ─── Amplop Digital ──────────────────────────────────────────────────────────
  digitalEnvelope: {
    bankAccounts: [
      {
        bank: "BRI",
        accountNumber: "4676 0105 6209 536",
        accountName: "Arman Kanaf",
      },
    ],
    qrisImageUrl: "", // QRIS belum tersedia — section otomatis tersembunyi saat kosong
  },

  // ─── Musik ────────────────────────────────────────────────────────────────────
  // Belum ditentukan klien — isi path setelah file audio tersedia
  // Contoh: "/music/background.mp3"
  musicUrl: "",

  // ─── WhatsApp & Hashtag (belum diisi klien — kosong = tersembunyi) ───────────
  whatsappNumber: "", // format: "628123456789"
  weddingHashtag: "", // format: "#ArmanDian2026"

  // ─── Cover Video (nonaktif — pakai slideshow foto) ───────────────────────────
  showCoverVideo: false,
  coverVideoUrl: "",

  // ─── Meta / SEO ──────────────────────────────────────────────────────────────
  metaTitle: "Undangan Pernikahan Arman & Dian · 25 Juli 2026",
  metaDescription:
    "Dengan penuh sukacita kami mengundang Anda hadir dalam pemberkatan dan resepsi pernikahan Arman Kanaf & Dian Hezedila Sharon.",
};

export default weddingConfig;
