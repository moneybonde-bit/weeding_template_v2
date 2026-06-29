// Bada (Lore Lindu, Sulawesi Tengah) — siluet stilasi Patung Megalitik Palindo.
// Hanya outline tegak sederhana; detail wajah/wajah patung sengaja tidak
// ditiru untuk menghindari salah representasi budaya.
export default function BadaIcon({ size = 36 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Motif Bada — Megalitik Lore Lindu"
    >
      {/* Garis tanah / dasar */}
      <path d="M14 68 L66 68" strokeOpacity="0.6" />
      {/* Tumpukan batu kecil di kiri-kanan (mengisyaratkan lanskap megalitik) */}
      <ellipse cx="20" cy="64" rx="5" ry="2.5" strokeOpacity="0.5" />
      <ellipse cx="60" cy="64" rx="5" ry="2.5" strokeOpacity="0.5" />
      {/* Patung utama — kepala bulat */}
      <circle cx="40" cy="22" r="8" strokeOpacity="0.95" />
      {/* Badan tabung (silinder vertikal) */}
      <path d="M32 30 L32 62 Q32 66 36 66 L44 66 Q48 66 48 62 L48 30" strokeOpacity="0.95" />
      {/* Garis bahu */}
      <path d="M32 30 L48 30" strokeOpacity="0.85" />
      {/* Garis dekoratif badan (mengisyaratkan ukiran samar) */}
      <path d="M36 42 L44 42" strokeOpacity="0.5" />
      <path d="M36 50 L44 50" strokeOpacity="0.5" />
      {/* Mata simbolik — dua titik */}
      <circle cx="37" cy="22" r="1" fill="currentColor" />
      <circle cx="43" cy="22" r="1" fill="currentColor" />
    </svg>
  );
}
