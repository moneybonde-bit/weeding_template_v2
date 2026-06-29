// Bali — stilasi "patra punggel" (sulur daun melengkung ornamen Bali).
// Bentuk dekoratif umum yang aman dipakai sebagai motif, bukan ikon sakral.
export default function BaliIcon({ size = 36 }) {
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
      aria-label="Motif Bali — Patra Punggel"
    >
      {/* Lingkaran tengah */}
      <circle cx="40" cy="40" r="4" strokeOpacity="0.9" />
      {/* Sulur spiral utama */}
      <path d="M40 36 Q44 22 56 22 Q66 22 66 32 Q66 40 58 42" strokeOpacity="0.8" />
      <path d="M40 44 Q36 58 24 58 Q14 58 14 48 Q14 40 22 38" strokeOpacity="0.8" />
      {/* Daun melengkung kiri-atas */}
      <path d="M30 30 Q22 24 22 16 Q26 18 32 26" strokeOpacity="0.7" />
      {/* Daun melengkung kanan-bawah */}
      <path d="M50 50 Q58 56 58 64 Q54 62 48 54" strokeOpacity="0.7" />
      {/* Aksen titik */}
      <circle cx="62" cy="32" r="1" fill="currentColor" />
      <circle cx="18" cy="48" r="1" fill="currentColor" />
    </svg>
  );
}
