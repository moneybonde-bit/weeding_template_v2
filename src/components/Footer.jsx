import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

export default function Footer() {
  const mainEvent = config.events.find((e) => e.id === "resepsi") || config.events[0];
  const hasFamily =
    config.familyNamesLeft?.length > 0 || config.familyNamesRight?.length > 0;

  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Ornamen atas */}
      <svg className="footer__ornament" viewBox="0 0 320 40" fill="none">
        <path
          d="M10 20 Q80 5 160 20 Q240 35 310 20"
          stroke="var(--color-gold)"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
      </svg>

      {/* Ayat Alkitab */}
      {config.scriptureVerse && (
        <motion.div
          className="footer__scripture"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="footer__scripture-text">"{config.scriptureVerse}"</p>
          <p className="footer__scripture-ref">{config.scriptureReference}</p>
        </motion.div>
      )}

      <OrnamentDivider />

      {/* Teks penutup */}
      {config.closingText && (
        <p className="footer__closing">{config.closingText}</p>
      )}

      {/* Nama keluarga dua kolom */}
      {hasFamily && (
        <div className="footer__families">
          <div className="footer__family-col">
            {config.familyNamesLeft.map((name, i) => (
              <p key={i} className="footer__family-name">{name}</p>
            ))}
          </div>
          <div className="footer__family-divider" />
          <div className="footer__family-col">
            {config.familyNamesRight.map((name, i) => (
              <p key={i} className="footer__family-name">{name}</p>
            ))}
          </div>
        </div>
      )}

      <OrnamentDivider />

      {/* Nama mempelai & tanggal */}
      <p className="footer__names">
        {config.groomNameShort} & {config.brideNameShort}
      </p>
      <p className="footer__date">{mainEvent?.date || ""}</p>
      <p className="footer__credit">Dibuat dengan ❤️ · Heritage Wedding Template</p>
    </motion.footer>
  );
}
