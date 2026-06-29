import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Mapping: id section → label & ikon
const NAV_ITEMS = [
  { id: "couple", label: "MEMPELAI", icon: HeartIcon },
  { id: "events", label: "ACARA", icon: PinIcon },
  { id: "ayat", label: "AYAT", icon: BookIcon },
  { id: "gallery", label: "GALERI", icon: ImageIcon },
  { id: "keluarga", label: "KELUARGA", icon: PeopleIcon },
];

export default function BottomNav() {
  const [active, setActive] = useState(NAV_ITEMS[0].id);

  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pilih entry paling "tengah" yang sedang intersect
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // Ambil yang paling besar rasio intersection-nya
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActive(visible[0].target.id);
        }
      },
      {
        // Sweet spot: section dianggap aktif saat berada di tengah viewport
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleClick(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <motion.nav
      className="bottom-nav"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      aria-label="Navigasi cepat undangan"
    >
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id)}
            className={`bottom-nav__item${isActive ? " bottom-nav__item--active" : ""}`}
            aria-current={isActive ? "true" : undefined}
          >
            <Icon active={isActive} />
            <span className="bottom-nav__label">{item.label}</span>
          </button>
        );
      })}
    </motion.nav>
  );
}

/* ── Inline SVG icons (line-art, monokrom — warna lewat currentColor) ───── */

function HeartIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
    </svg>
  );
}

function PinIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z" />
      <circle cx="12" cy="10" r="2.5" fill={active ? "#fff" : "none"} />
    </svg>
  );
}

function BookIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5h6a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H3z" />
      <path d="M21 5h-6a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h7z" />
    </svg>
  );
}

function ImageIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" fill={active ? "currentColor" : "none"} stroke="currentColor" />
      <circle cx="9" cy="10" r="1.5" fill={active ? "#fff" : "none"} stroke={active ? "#fff" : "currentColor"} />
      <path d="M21 16l-5-5-8 8" stroke={active ? "#fff" : "currentColor"} />
    </svg>
  );
}

function PeopleIcon({ active }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <circle cx="17" cy="9" r="2.6" />
      <path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5" />
      <path d="M15 20c.4-2.5 2.2-4 4.5-4 1 0 1.8.2 2.5.6" />
    </svg>
  );
}
