import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  // clipPath reveal bergantian kiri-kanan (zigzag)
  const hiddenClip = isLeft ? "inset(0 100% 0 0 round 4px)" : "inset(0 0 0 100% round 4px)";
  const visibleClip = "inset(0 0% 0 0% round 4px)";

  return (
    <div className={`love-story__item ${isLeft ? "love-story__item--left" : "love-story__item--right"}`}>
      <div className="love-story__dot" />
      <motion.div
        className="love-story__card"
        initial={{ opacity: 0, clipPath: hiddenClip }}
        whileInView={{ opacity: 1, clipPath: visibleClip }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      >
        <span className="love-story__year">{item.year}</span>
        <h3 className="love-story__event-title">{item.title}</h3>
        <p className="love-story__desc">{item.description}</p>
      </motion.div>
    </div>
  );
}

export default function LoveStory() {
  if (!config.showLoveStory) return null;

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax: background element bergerak lebih lambat dari konten
  const bgY = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]),
    { stiffness: 60, damping: 20 }
  );

  // Timeline line tumbuh seiring scroll
  const lineScaleY = useSpring(
    useTransform(scrollYProgress, [0.1, 0.9], [0, 1]),
    { stiffness: 80, damping: 25 }
  );

  return (
    <section ref={sectionRef} className="section love-story" id="love-story">
      {/* Elemen parallax dekoratif di background */}
      <motion.div className="love-story__parallax-bg" style={{ y: bgY }} aria-hidden="true" />

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
        {/* Garis timeline — tumbuh sesuai scroll (parallax line) */}
        <motion.div
          className="love-story__timeline-line"
          style={{ scaleY: lineScaleY, transformOrigin: "top" }}
        />

        {config.loveStory.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>

      <OrnamentDivider />
    </section>
  );
}
