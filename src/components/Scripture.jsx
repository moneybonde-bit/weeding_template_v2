import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

export default function Scripture() {
  if (!config.scriptureVerse) return null;

  return (
    <section className="section scripture" id="ayat">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Ayat Alkitab
      </motion.p>

      <OrnamentDivider />

      <motion.blockquote
        className="scripture__text"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, delay: 0.15 }}
      >
        "{config.scriptureVerse}"
      </motion.blockquote>

      <motion.p
        className="scripture__ref"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        — {config.scriptureReference}
      </motion.p>

      <OrnamentDivider />
    </section>
  );
}
