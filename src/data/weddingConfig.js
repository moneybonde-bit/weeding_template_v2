// Heritage - Modern Adat Wedding Config
// Field structure KONSISTEN dengan tema 1 (Serene - Minimalist Modern)
// Field khusus tema ini ditandai dengan komentar // [HERITAGE]

const weddingConfig = {
  // ─── Identitas Acara ────────────────────────────────────────────────────
  groomName: "Raden Arjuna Pratama",
  groomNameShort: "Arjuna",
  groomParents: "Putra pertama dari Bapak H. Soedjono & Ibu Hj. Sri Wahyuni",
  groomPhoto: "", // URL foto atau string kosong untuk pakai inisial

  brideName: "Dewi Kinanthi Wulandari",
  brideNameShort: "Kinanthi",
  brideParents: "Putri kedua dari Bapak Bambang Supriyadi & Ibu Endah Lestari",
  bridePhoto: "", // URL foto atau string kosong untuk pakai inisial

  // [HERITAGE] Toggle kaligrafi Arab di nama mempelai (default: false)
  showArabicCalligraphy: false,
  arabicCalligraphyText: "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ", // bisa diganti sesuai kebutuhan

  // ─── Acara (bisa tambah/kurangi entry — setiap entry format sama) ───────
  // [HERITAGE] Tema ini mendukung acara adat tambahan (siraman, midodareni, dll.)
  events: [
    {
      id: "siraman",
      name: "Siraman",
      date: "Jumat, 14 Februari 2025",
      time: "09.00 WIB",
      venue: "Rumah Kediaman Mempelai Wanita",
      address: "Jl. Kemuning No. 12, Yogyakarta",
      mapsUrl: "https://maps.google.com/?q=-7.7956,110.3695",
      showOnInvite: true,
    },
    {
      id: "midodareni",
      name: "Midodareni",
      date: "Jumat, 14 Februari 2025",
      time: "19.00 WIB",
      venue: "Rumah Kediaman Mempelai Wanita",
      address: "Jl. Kemuning No. 12, Yogyakarta",
      mapsUrl: "https://maps.google.com/?q=-7.7956,110.3695",
      showOnInvite: true,
    },
    {
      id: "akad",
      name: "Akad Nikah",
      date: "Sabtu, 15 Februari 2025",
      time: "08.00 WIB",
      venue: "Masjid Agung Keraton",
      address: "Jl. Alun-Alun Utara No. 1, Yogyakarta",
      mapsUrl: "https://maps.google.com/?q=-7.8053,110.3642",
      showOnInvite: true,
    },
    {
      id: "resepsi",
      name: "Resepsi Pernikahan",
      date: "Sabtu, 15 Februari 2025",
      time: "11.00 – 15.00 WIB",
      venue: "Pendopo Agung Heritage Hall",
      address: "Jl. Malioboro No. 52, Yogyakarta",
      mapsUrl: "https://maps.google.com/?q=-7.7933,110.3673",
      showOnInvite: true,
    },
  ],

  // ─── Countdown Target (tanggal & jam acara utama) ──────────────────────
  countdownTarget: "2025-02-15T08:00:00",

  // ─── Sections Toggle ────────────────────────────────────────────────────
  showLoveStory: true,
  showGallery: true,
  showMaps: true,
  showRsvp: true,
  showWishes: true,
  showDigitalEnvelope: true,

  // ─── Love Story ─────────────────────────────────────────────────────────
  loveStory: [
    {
      year: "2019",
      title: "Pertama Berjumpa",
      description:
        "Pertemuan pertama di festival budaya Yogyakarta. Sebuah tatapan yang tidak sengaja menjadi awal dari segalanya.",
    },
    {
      year: "2021",
      title: "Membangun Mimpi Bersama",
      description:
        "Dua tahun saling mengenal, kami menyadari bahwa mimpi kami lebih indah ketika dijalani bersama.",
    },
    {
      year: "2024",
      title: "Lamaran",
      description:
        "Di bawah langit senja Prambanan, ia mengulurkan tangan dan memintaku melengkapi hidupnya selamanya.",
    },
  ],

  // ─── Galeri ─────────────────────────────────────────────────────────────
  gallery: [
    { src: "https://picsum.photos/seed/heritage1/600/800", alt: "Foto 1" },
    { src: "https://picsum.photos/seed/heritage2/600/800", alt: "Foto 2" },
    { src: "https://picsum.photos/seed/heritage3/800/600", alt: "Foto 3" },
    { src: "https://picsum.photos/seed/heritage4/600/800", alt: "Foto 4" },
    { src: "https://picsum.photos/seed/heritage5/800/600", alt: "Foto 5" },
    { src: "https://picsum.photos/seed/heritage6/600/800", alt: "Foto 6" },
  ],

  // ─── Maps (embed URL untuk lokasi utama / resepsi) ──────────────────────
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4!2d110.3673!3d-7.7933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDcnMzUuOSJTIDExMMKwMjInMDIuMyJF!5e0!3m2!1sen!2sid!4v1234567890",

  // ─── RSVP ───────────────────────────────────────────────────────────────
  rsvpWebhookUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",

  // ─── Ucapan & Doa ────────────────────────────────────────────────────────
  wishesWebhookUrl: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",

  // ─── Amplop Digital ──────────────────────────────────────────────────────
  digitalEnvelope: {
    bankAccounts: [
      {
        bank: "BCA",
        accountNumber: "1234567890",
        accountName: "Raden Arjuna Pratama",
      },
      {
        bank: "Mandiri",
        accountNumber: "0987654321",
        accountName: "Dewi Kinanthi Wulandari",
      },
    ],
    qrisImageUrl: "", // URL gambar QRIS, kosongkan jika tidak ada
  },

  // ─── Musik ───────────────────────────────────────────────────────────────
  musicUrl: "/music/background.mp3", // taruh file di /public/music/

  // ─── Cover Video (opsional) ───────────────────────────────────────────────
  // [HERITAGE] Tema ini mendukung video prosesi adat di cover
  showCoverVideo: false,
  coverVideoUrl: "", // URL video untuk diloop di cover

  // ─── Meta / SEO ──────────────────────────────────────────────────────────
  metaTitle: "Undangan Pernikahan Arjuna & Kinanthi",
  metaDescription:
    "Kami mengundang Anda untuk hadir dan merayakan momen sakral pernikahan kami.",
};

export default weddingConfig;
