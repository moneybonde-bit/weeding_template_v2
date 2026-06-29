import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";
import EthnicIconRow from "./EthnicIcons";

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

      {/* Blok Keluarga — section "KELUARGA" di bottom nav */}
      {hasFamily && (
        <div id="keluarga" className="footer__families-wrapper">
          {config.closingText && (
            <motion.p
              className="footer__closing"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {config.closingText}
            </motion.p>
          )}

          <motion.div
            className="footer__families"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
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
          </motion.div>

          {/* Icon etnik di Footer — penempatan kedua (campuran) */}
          <EthnicIconRow className="ethnic-icons--on-dark" size={32} />
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
