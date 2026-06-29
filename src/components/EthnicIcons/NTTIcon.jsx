// NTT — stilasi motif "kabihu" tenun ikat Sumba Timur (figur leluhur/manusia
// geometris yang umum di kain hinggi). Bentuk simetris segitiga + figur stik.
export default function NTTIcon({ size = 36 }) {
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
      aria-label="Motif NTT — Kabihu Sumba"
    >
      {/* Bingkai tipis */}
      <rect x="10" y="10" width="60" height="60" strokeOpacity="0.35" />
      {/* Pita zigzag atas */}
      <path d="M14 22 L22 16 L30 22 L38 16 L46 22 L54 16 L62 22 L66 18" strokeOpacity="0.7" />
      {/* Figur stilasi tengah — kepala bulat */}
      <circle cx="40" cy="34" r="4" strokeOpacity="0.95" />
      {/* Badan segitiga + tangan terentang */}
      <path d="M40 38 L30 50 L50 50 Z" strokeOpacity="0.9" />
      <path d="M28 44 L22 40 M52 44 L58 40" strokeOpacity="0.85" />
      {/* Dua kaki */}
      <path d="M36 50 L34 58 M44 50 L46 58" strokeOpacity="0.85" />
      {/* Pita zigzag bawah */}
      <path d="M14 64 L22 58 L30 64 L38 58 L46 64 L54 58 L62 64 L66 60" strokeOpacity="0.7" />
    </svg>
  );
}
