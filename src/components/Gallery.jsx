import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.91, y: 18 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];

  // Keyboard nav: Esc, ←, →
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
      >
        {/* Swipe-friendly: drag horizontal → next/prev */}
        <motion.img
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          className="lightbox__img"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 220 }}
          onClick={(e) => e.stopPropagation()}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.3}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) onNext();
            else if (info.offset.x > 60) onPrev();
          }}
        />

        <button
          className="lightbox__nav lightbox__nav--prev"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Foto sebelumnya"
        >‹</button>
        <button
          className="lightbox__nav lightbox__nav--next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Foto berikutnya"
        >›</button>
        <button className="lightbox__close" onClick={onClose} aria-label="Tutup">✕</button>
        <p className="lightbox__counter">{index + 1} / {photos.length}</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!config.showGallery) return null;

  const photos = config.gallery || [];
  const totalLabel = photos.length;

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, [photos.length]);

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

      {/* Preview 2 foto mempelai — selalu tampil */}
      <div className="gallery__preview">
        <PreviewCard
          label="Mempelai Pria"
          name={config.groomNameShort}
          src={config.groomPhotoUrl}
          initial={config.groomNameShort?.[0]}
          delay={0.1}
        />
        <PreviewCard
          label="Mempelai Wanita"
          name={config.brideNameShort}
          src={config.bridePhotoUrl}
          initial={config.brideNameShort?.[0]}
          delay={0.25}
        />
      </div>

      {/* Tombol toggle */}
      <motion.button
        className="gallery__toggle-btn"
        onClick={() => setExpanded((v) => !v)}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileTap={{ scale: 0.97 }}
      >
        {expanded ? "Sembunyikan Foto" : `Lihat ${totalLabel} Foto Lainnya →`}
      </motion.button>

      {/* Grid expandable */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="gallery__grid-wrapper"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              className="gallery__grid"
              variants={gridVariants}
              initial="hidden"
              animate="show"
            >
              {photos.map((photo, i) => (
                <motion.div
                  key={i}
                  className="gallery__item"
                  variants={itemVariants}
                  onClick={() => setLightboxIndex(i)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      <OrnamentDivider />
    </section>
  );
}

function PreviewCard({ label, name, src, initial, delay }) {
  return (
    <motion.div
      className="gallery__preview-card"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="gallery__preview-img">
        {src ? (
          <img src={src} alt={`${label} — ${name}`} loading="lazy" />
        ) : (
          <div className="gallery__preview-placeholder">
            <span>{initial}</span>
          </div>
        )}
      </div>
      <p className="gallery__preview-label">{label}</p>
      <p className="gallery__preview-name">{name}</p>
    </motion.div>
  );
}
