import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

// Ikon untuk tiap jenis acara
const EVENT_ICONS = {
  siraman: "💧",
  midodareni: "🌙",
  sungkeman: "🙏",
  akad: "🕌",
  resepsi: "✨",
  pemberkatan: "⛪",
};

function getIcon(id) {
  return EVENT_ICONS[id] || "📅";
}

export default function Events() {
  const visibleEvents = config.events.filter((e) => e.showOnInvite !== false);

  return (
    <section className="section events" id="events">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Rangkaian Acara
      </motion.p>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Turut Mengundang
      </motion.h2>

      <OrnamentDivider />

      <div className="events__grid">
        {visibleEvents.map((event, i) => (
          <motion.div
            key={event.id}
            className="events__card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: i * 0.1 }}
          >
            <div className="events__icon">{getIcon(event.id)}</div>
            <h3 className="events__name">{event.name}</h3>
            <div className="events__ornament" />
            <p className="events__date">{event.date}</p>
            <p className="events__time">{event.time}</p>
            <p className="events__venue">{event.venue}</p>
            <p className="events__address">{event.address}</p>
            {event.mapsUrl && (
              <a
                href={event.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="events__maps-btn"
              >
                Lihat Peta
              </a>
            )}
          </motion.div>
        ))}
      </div>

      <OrnamentDivider />
    </section>
  );
}
