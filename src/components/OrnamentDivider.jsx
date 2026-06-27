import { motion } from "framer-motion";

// Signature Heritage: garis lengkung ornamen tipis yang muncul saat scroll
export default function OrnamentDivider({ className = "" }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <motion.svg
        viewBox="0 0 320 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      >
        {/* Garis lengkung kiri */}
        <motion.path
          d="M10 20 Q60 8 120 20 Q150 26 160 20"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeOpacity="0.55"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        {/* Ornamen tengah (diamond kecil) */}
        <motion.rect
          x="156"
          y="17"
          width="8"
          height="8"
          transform="rotate(45 160 21)"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeOpacity="0.7"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />
        {/* Garis lengkung kanan */}
        <motion.path
          d="M160 20 Q170 14 200 20 Q260 32 310 20"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeOpacity="0.55"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
        />
      </motion.svg>
    </div>
  );
}
