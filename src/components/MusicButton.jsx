import { motion } from "framer-motion";

export default function MusicButton({ playing, onToggle }) {
  return (
    <motion.button
      className="music-btn"
      onClick={onToggle}
      title={playing ? "Matikan Musik" : "Hidupkan Musik"}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      whileTap={{ scale: 0.92 }}
    >
      {playing ? (
        // Equalizer icon (music playing)
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="10" width="3" height="10" rx="1" />
          <rect x="9" y="6" width="3" height="14" rx="1" />
          <rect x="15" y="8" width="3" height="12" rx="1" />
          <rect x="21" y="4" width="0" height="0" />
        </svg>
      ) : (
        // Muted icon
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 9v6h4l5 5V4l-5 5H9z" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      )}
    </motion.button>
  );
}
