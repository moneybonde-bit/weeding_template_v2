import { motion } from "framer-motion";
import config from "../../data/weddingConfig";
import BaliIcon from "./BaliIcon";
import NTTIcon from "./NTTIcon";
import BadaIcon from "./BadaIcon";

// Registry — tambah daerah baru di sini saat dibutuhkan untuk klien lain.
const ICON_REGISTRY = {
  bali: { Component: BaliIcon, label: "Bali" },
  ntt: { Component: NTTIcon, label: "NTT (Sumba)" },
  bada: { Component: BadaIcon, label: "Bada (Lore Lindu)" },
};

export default function EthnicIconRow({ size = 36, className = "" }) {
  if (!config.showEthnicIcons) return null;
  const regions = (config.ethnicRegions || []).filter((r) => ICON_REGISTRY[r]);
  if (regions.length === 0) return null;

  return (
    <motion.div
      className={`ethnic-icons ${className}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: 0.15 }}
      aria-label="Motif budaya tema undangan"
    >
      {regions.map((region, i) => {
        const { Component, label } = ICON_REGISTRY[region];
        return (
          <div key={region} className="ethnic-icons__cell" title={label}>
            <Component size={size} />
            {i < regions.length - 1 && <span className="ethnic-icons__sep" />}
          </div>
        );
      })}
    </motion.div>
  );
}
