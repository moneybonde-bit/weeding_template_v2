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

export default function Cover({ guestName, onOpen }) {
  const [opened, setOpened] = useState(false);
  const [countdown, setCountdown] = useState(() => calcCountdown(config.countdownTarget));

  useEffect(() => {
    const id = setInterval(() => setCountdown(calcCountdown(config.countdownTarget)), 1000);
    return () => clearInterval(id);
  }, []);

  function handleOpen() {
    setOpened(true);
    setTimeout(() => onOpen(), 900);
  }

  const mainEvent = config.events.find((e) => e.id === "resepsi") || config.events[0];

  return (
    <AnimatePresence>
      {!opened ? (
        <motion.div
          className="cover"
          key="cover"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Video background (opsional) */}
          {config.showCoverVideo && config.coverVideoUrl && (
            <video
              className="cover__video"
              src={config.coverVideoUrl}
              autoPlay
              muted
              loop
              playsInline
            />
          )}

          <div className="cover__overlay" />

          {/* Ornamen sudut atas */}
          <svg className="cover__corner cover__corner--tl" viewBox="0 0 80 80" fill="none">
            <path d="M2 78 L2 2 L78 2" stroke="var(--color-gold)" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M2 50 Q20 20 50 2" stroke="var(--color-gold)" strokeWidth="0.8" strokeOpacity="0.35" />
          </svg>
          <svg className="cover__corner cover__corner--br" viewBox="0 0 80 80" fill="none">
            <path d="M78 2 L78 78 L2 78" stroke="var(--color-gold)" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M78 30 Q60 60 30 78" stroke="var(--color-gold)" strokeWidth="0.8" strokeOpacity="0.35" />
          </svg>

          <div className="cover__content">
            {/* Kaligrafi Arab (jika diaktifkan) */}
            {config.showArabicCalligraphy && (
              <motion.p
                className="cover__arabic"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {config.arabicCalligraphyText}
              </motion.p>
            )}

            <motion.p
              className="cover__label"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              Undangan Pernikahan
            </motion.p>

            <motion.h1
              className="cover__names"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {config.groomNameShort}
              <span className="cover__names-amp"> & </span>
              {config.brideNameShort}
            </motion.h1>

            <motion.div
              className="cover__ornament-line"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
            />

            <motion.p
              className="cover__date"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {mainEvent.date}
            </motion.p>

            {/* Countdown */}
            <motion.div
              className="cover__countdown"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              {COUNTDOWN_KEYS.map((k) => (
                <div key={k} className="cover__countdown-unit">
                  <span className="cover__countdown-num">
                    {String(countdown[k]).padStart(2, "0")}
                  </span>
                  <span className="cover__countdown-label">{k}</span>
                </div>
              ))}
            </motion.div>

            {/* Kepada tamu */}
            <motion.div
              className="cover__guest"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <p className="cover__guest-label">Kepada Yth.</p>
              <p className="cover__guest-name">{guestName}</p>
            </motion.div>

            {/* CTA */}
            <motion.button
              className="cover__btn"
              onClick={handleOpen}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Buka Undangan
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
