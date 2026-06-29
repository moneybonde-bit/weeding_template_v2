import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";
import EthnicIconRow from "./EthnicIcons";

function PersonCard({ name, parents, photoUrl, initial, ig, delay }) {
  return (
    <motion.div
      className="couple__card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="couple__avatar">
        {photoUrl ? (
          <img src={photoUrl} alt={name} className="couple__photo" />
        ) : (
          <span className="couple__initial">{initial}</span>
        )}
      </div>
      <h3 className="couple__name">{name}</h3>
      <p className="couple__parents">{parents}</p>
      {ig && (
        <a
          href={`https://instagram.com/${ig.replace("@", "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="couple__ig"
        >
          {ig}
        </a>
      )}
    </motion.div>
  );
}

export default function Couple() {
  return (
    <section className="section couple" id="couple">
      <OrnamentDivider />

      {config.showArabicCalligraphy && (
        <motion.p
          className="couple__arabic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {config.arabicCalligraphyText}
        </motion.p>
      )}

      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Mempelai
      </motion.p>

      <div className="couple__grid">
        <PersonCard
          name={config.groomName}
          parents={config.groomParents}
          photoUrl={config.groomPhotoUrl}
          initial={config.groomNameShort[0]}
          ig={config.groomIG}
          delay={0.1}
        />
        <div className="couple__separator">
          <span>&amp;</span>
        </div>
        <PersonCard
          name={config.brideName}
          parents={config.brideParents}
          photoUrl={config.bridePhotoUrl}
          initial={config.brideNameShort[0]}
          ig={config.brideIG}
          delay={0.25}
        />
      </div>

      <EthnicIconRow />

      <OrnamentDivider />
    </section>
  );
}
