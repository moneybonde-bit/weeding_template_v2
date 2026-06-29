import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

export default function OurPrayer() {
  if (!config.ourPrayer) return null;

  return (
    <section className="section our-prayer" id="our-prayer">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Prayer
      </motion.p>

      <OrnamentDivider />

      <motion.blockquote
        className="our-prayer__text"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.85, delay: 0.15 }}
      >
        {config.ourPrayer}
      </motion.blockquote>

      <OrnamentDivider />
    </section>
  );
}
