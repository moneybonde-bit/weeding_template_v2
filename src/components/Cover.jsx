import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import config from "../data/weddingConfig";

const COUNTDOWN_KEYS = ["hari", "jam", "menit", "detik"];

function calcCountdown(target) {
  const diff = new Date(target) - new Date();
  if (diff <= 0) return { hari: 0, jam: 0, menit: 0, detik: 0 };
  const s = Math.floor(diff / 1000);
  return {
    hari: Math.floor(s / 86400),
    jam: Math.floor((s % 86400) / 3600),
    menit: Math.floor((s % 3600) / 60),
    detik: s % 60,
  };
}

const CURTAIN_SPRING = { type: "spring", damping: 22, stiffness: 70, mass: 1.1 };

const coverPhotos = config.coverPhotos || [];
const isSlideshow = config.coverBackgroundType === "slideshow" && coverPhotos.length > 0;
const hasPhoto = config.coverBackgroundType === "photo" && config.couplePhotoUrl;

export default function Cover({ guestName, onOpen }) {
  const [phase, setPhase] = useState("idle"); // "idle" | "opening"
  const [countdown, setCountdown] = useState(() => calcCountdown(config.countdownTarget));
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCountdown(calcCountdown(config.countdownTarget)), 1000);
    return () => clearInterval(id);
  }, []);

  // Auto-cycle foto slideshow setiap 4.5 detik
  useEffect(() => {
    if (!isSlideshow || coverPhotos.length <= 1) return;
    const id = setInterval(() => {
      setActivePhotoIndex((i) => (i + 1) % coverPhotos.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  function handleOpen() {
    if (phase !== "idle") return;
    setPhase("opening");
    setTimeout(() => onOpen(), 1800);
  }

  const mainEvent = config.events.find((e) => e.id === "resepsi") || config.events[0];

  return (
    <div className="cover">
      {/* ── Layer 1: Background ─────────────────────────────────── */}
      {isSlideshow ? (
        <>
          <AnimatePresence>
            <motion.img
              key={activePhotoIndex}
              src={coverPhotos[activePhotoIndex]}
              alt=""
              className="cover__bg-photo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.4 }}
            />
          </AnimatePresence>
          <div className="cover__overlay cover__overlay--photo" />
        </>
      ) : hasPhoto ? (
        <>
          <img
            src={config.couplePhotoUrl}
            alt=""
            className="cover__bg-photo"
          />
          <div className="cover__overlay cover__overlay--photo" />
        </>
      ) : (
        <>
          {config.showCoverVideo && config.coverVideoUrl && (
            <video className="cover__video" src={config.coverVideoUrl} autoPlay muted loop playsInline />
          )}
          <div className="cover__overlay cover__overlay--color" />
        </>
      )}

      {/* ── Layer 2: Konten yang terungkap setelah kain terbuka ─── */}
      <motion.div
        className="cover__reveal"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "opening" ? 1 : 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        aria-hidden="true"
      >
        {config.showArabicCalligraphy && (
          <p className="cover__arabic">{config.arabicCalligraphyText}</p>
        )}
        <p className="cover__label">Undangan Pernikahan</p>
        <h1 className="cover__names">
          {config.groomNameShort}
          <span className="cover__names-amp"> & </span>
          {config.brideNameShort}
        </h1>
        <div className="cover__ornament-line" />
        <p className="cover__date">{mainEvent.date}</p>

        <div className="cover__countdown">
          {COUNTDOWN_KEYS.map((k) => (
            <div key={k} className="cover__countdown-unit">
              <span className="cover__countdown-num">
                {String(countdown[k]).padStart(2, "0")}
              </span>
              <span className="cover__countdown-label">{k}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Layer 3: Panel kain kiri ───────────────────────────── */}
      <motion.div
        className="cover__curtain cover__curtain--left"
        animate={phase === "opening" ? { x: "-100%" } : { x: "0%" }}
        transition={CURTAIN_SPRING}
      >
        <svg className="cover__corner cover__corner--tl" viewBox="0 0 80 80" fill="none">
          <path d="M2 78 L2 2 L78 2" stroke="var(--color-gold)" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M2 50 Q20 20 50 2" stroke="var(--color-gold)" strokeWidth="0.8" strokeOpacity="0.35" />
        </svg>
        <div className="cover__curtain-edge" />
      </motion.div>

      {/* ── Layer 3: Panel kain kanan ──────────────────────────── */}
      <motion.div
        className="cover__curtain cover__curtain--right"
        animate={phase === "opening" ? { x: "100%" } : { x: "0%" }}
        transition={CURTAIN_SPRING}
      >
        <svg className="cover__corner cover__corner--br" viewBox="0 0 80 80" fill="none">
          <path d="M78 2 L78 78 L2 78" stroke="var(--color-gold)" strokeWidth="1" strokeOpacity="0.5" />
          <path d="M78 30 Q60 60 30 78" stroke="var(--color-gold)" strokeWidth="0.8" strokeOpacity="0.35" />
        </svg>
        <div className="cover__curtain-edge cover__curtain-edge--right" />
      </motion.div>

      {/* ── Layer 4: Konten di atas kain (selalu terlihat, fade out saat kain terbuka) */}
      <motion.div
        className="cover__front-content"
        animate={phase === "opening" ? { opacity: 0, y: -16 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.1 }}
      >
        {config.showArabicCalligraphy && (
          <p className="cover__arabic">{config.arabicCalligraphyText}</p>
        )}

        <p className="cover__label">Undangan Pernikahan</p>

        <h1 className="cover__names">
          {config.groomNameShort}
          <span className="cover__names-amp"> & </span>
          {config.brideNameShort}
        </h1>

        <motion.div
          className="cover__ornament-line"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        />

        <p className="cover__date">{mainEvent.date}</p>

        <motion.div
          className="cover__guest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <p className="cover__guest-label">Kepada Yth.</p>
          <p className="cover__guest-name">{guestName}</p>
        </motion.div>

        <motion.button
          className="cover__btn"
          onClick={handleOpen}
          disabled={phase !== "idle"}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          Buka Undangan
        </motion.button>

        {/* Indikator slideshow — tampil hanya di mode slideshow */}
        {isSlideshow && coverPhotos.length > 1 && (
          <div className="cover__slideshow-dots">
            {coverPhotos.map((_, i) => (
              <span
                key={i}
                className={`cover__slideshow-dot${i === activePhotoIndex ? " cover__slideshow-dot--active" : ""}`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
