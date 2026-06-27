import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

export default function CouplePhoto() {
  if (!config.showCouplePhotoSection) return null;

  return (
    <section className="section couple-photo" id="couple-photo">
      <motion.div
        className="couple-photo__frame-wrapper"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="couple-photo__frame">
          {config.couplePhotoUrl ? (
            <img
              src={config.couplePhotoUrl}
              alt={`${config.groomNameShort} & ${config.brideNameShort}`}
              className="couple-photo__img"
            />
          ) : (
            <div className="couple-photo__placeholder">
              <span className="couple-photo__placeholder-text">
                {config.groomNameShort[0]} & {config.brideNameShort[0]}
              </span>
            </div>
          )}
        </div>

        {/* Ornamen border sudut pada frame */}
        <svg className="couple-photo__corner couple-photo__corner--tl" viewBox="0 0 40 40" fill="none">
          <path d="M2 38 L2 2 L38 2" stroke="var(--color-gold)" strokeWidth="1.5" strokeOpacity="0.6" />
        </svg>
        <svg className="couple-photo__corner couple-photo__corner--tr" viewBox="0 0 40 40" fill="none">
          <path d="M38 38 L38 2 L2 2" stroke="var(--color-gold)" strokeWidth="1.5" strokeOpacity="0.6" />
        </svg>
        <svg className="couple-photo__corner couple-photo__corner--bl" viewBox="0 0 40 40" fill="none">
          <path d="M2 2 L2 38 L38 38" stroke="var(--color-gold)" strokeWidth="1.5" strokeOpacity="0.6" />
        </svg>
        <svg className="couple-photo__corner couple-photo__corner--br" viewBox="0 0 40 40" fill="none">
          <path d="M38 2 L38 38 L2 38" stroke="var(--color-gold)" strokeWidth="1.5" strokeOpacity="0.6" />
        </svg>
      </motion.div>

      {config.couplePhotoCaptionText && (
        <motion.p
          className="couple-photo__caption"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {config.couplePhotoCaptionText}
        </motion.p>
      )}

      <OrnamentDivider />
    </section>
  );
}
