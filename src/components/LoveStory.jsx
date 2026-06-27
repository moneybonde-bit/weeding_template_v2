import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

export default function LoveStory() {
  if (!config.showLoveStory) return null;

  return (
    <section className="section love-story" id="love-story">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Cerita Cinta
      </motion.p>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Perjalanan Kami
      </motion.h2>

      <OrnamentDivider />

      <div className="love-story__timeline">
        {config.loveStory.map((item, i) => (
          <motion.div
            key={i}
            className={`love-story__item ${i % 2 === 0 ? "love-story__item--left" : "love-story__item--right"}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
          >
            <div className="love-story__dot" />
            <div className="love-story__card">
              <span className="love-story__year">{item.year}</span>
              <h3 className="love-story__event-title">{item.title}</h3>
              <p className="love-story__desc">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <OrnamentDivider />
    </section>
  );
}
