import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

function Lightbox({ photo, onClose }) {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.img
            src={photo.src}
            alt={photo.alt}
            className="lightbox__img"
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.88, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />
          <button className="lightbox__close" onClick={onClose}>✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  if (!config.showGallery) return null;

  return (
    <section className="section gallery" id="gallery">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Galeri
      </motion.p>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Momen Kita
      </motion.h2>

      <OrnamentDivider />

      <div className="gallery__grid">
        {config.gallery.map((photo, i) => (
          <motion.div
            key={i}
            className="gallery__item"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            onClick={() => setSelected(photo)}
            whileHover={{ scale: 1.02 }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </motion.div>
        ))}
      </div>

      <Lightbox photo={selected} onClose={() => setSelected(null)} />

      <OrnamentDivider />
    </section>
  );
}
