import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

// Pola ukuran tile untuk efek mosaic editorial (tall / wide / normal)
function tileSize(i) {
  const m = i % 6;
  if (m === 0) return "tall";
  if (m === 3) return "wide";
  return "normal";
}

function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  const photo = photos[index];

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
  const [activeCat, setActiveCat] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const photos = config.gallery || [];
  const categories = config.galleryCategories || [{ id: "all", label: "Semua" }];

  const filtered = useMemo(() => {
    if (activeCat === "all") return photos;
    return photos.filter((p) => p.category === activeCat);
  }, [photos, activeCat]);

  const handlePrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  if (!config.showGallery) return null;

  function catLabel(id) {
    return categories.find((c) => c.id === id)?.label || "";
  }

  return (
    <section className="section gallery" id="gallery">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {config.galleryEyebrow || "Galeri"}
      </motion.p>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {config.galleryTitle || "Momen Kita"}
      </motion.h2>

      <div className="section__divider-sm" />

      {config.galleryDescription && (
        <motion.p
          className="gallery__desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {config.galleryDescription}
        </motion.p>
      )}

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

      <motion.button
        className="gallery__toggle-btn"
        onClick={() => setExpanded((v) => !v)}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        {expanded ? "Sembunyikan Foto" : `Lihat ${photos.length} Foto Lainnya →`}
      </motion.button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            className="gallery__expand"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Filter pills */}
            <div className="gallery__filters" role="tablist">
              {categories.map((cat) => {
                const isActive = activeCat === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`gallery__filter${isActive ? " gallery__filter--active" : ""}`}
                    onClick={() => setActiveCat(cat.id)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="gallery-filter-pill"
                        className="gallery__filter-bg"
                        transition={{ type: "spring", damping: 26, stiffness: 320 }}
                      />
                    )}
                    <span className="gallery__filter-text">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mosaic dengan reflow beranimasi saat ganti filter */}
            <motion.div layout className="gallery__mosaic">
              <AnimatePresence mode="popLayout">
                {filtered.map((photo, i) => (
                  <motion.button
                    key={photo.src}
                    layout
                    type="button"
                    className={`gallery__tile gallery__tile--${tileSize(i)}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onClick={() => setLightboxIndex(i)}
                  >
                    <img src={photo.src} alt={photo.alt} loading="lazy" />
                    <span className="gallery__tile-overlay">
                      <span className="gallery__tile-cat">{catLabel(photo.category)}</span>
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <p className="gallery__empty">Belum ada foto di kategori ini.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <Lightbox
          photos={filtered}
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
      whileHover={{ y: -4 }}
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
