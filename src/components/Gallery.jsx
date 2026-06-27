import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

// Stagger variants: parent mengatur delay antar anak
const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.91, y: 18 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function Lightbox({ photo, onClose }) {
  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.img
            src={photo.src}
            alt={photo.alt}
            className="lightbox__img"
            // Scale + spring untuk smooth popup
            initial={{ scale: 0.72, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.72, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          />
          <motion.button
            className="lightbox__close"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            ✕
          </motion.button>
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

      {/* Staggered reveal: viewport trigger pada parent, anak muncul berurutan */}
      <motion.div
        className="gallery__grid"
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {config.gallery.map((photo, i) => (
          <motion.div
            key={i}
            className="gallery__item"
            variants={itemVariants}
            onClick={() => setSelected(photo)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </motion.div>
        ))}
      </motion.div>

      <Lightbox photo={selected} onClose={() => setSelected(null)} />

      <OrnamentDivider />
    </section>
  );
}
