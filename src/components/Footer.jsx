import { motion } from "framer-motion";
import config from "../data/weddingConfig";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <svg className="footer__ornament" viewBox="0 0 320 40" fill="none">
        <path d="M10 20 Q80 5 160 20 Q240 35 310 20" stroke="var(--color-gold)" strokeWidth="1" strokeOpacity="0.4" />
      </svg>

      <p className="footer__names">
        {config.groomNameShort} & {config.brideNameShort}
      </p>
      <p className="footer__date">{config.events.find(e => e.id === "resepsi")?.date || ""}</p>
      <p className="footer__credit">Dibuat dengan ❤️ · Heritage Wedding Template</p>
    </motion.footer>
  );
}
