import { useState } from "react";
import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

const ATTENDANCE_OPTIONS = ["Hadir", "Tidak Hadir", "Masih Ragu"];

export default function Rsvp({ guestName }) {
  const [form, setForm] = useState({
    name: guestName !== "Tamu Undangan" ? guestName : "",
    attendance: "",
    persons: "1",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  if (!config.showRsvp) return null;

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.attendance) return;
    setStatus("loading");
    try {
      await fetch(config.rsvpWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section rsvp" id="rsvp">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        RSVP
      </motion.p>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Konfirmasi Kehadiran
      </motion.h2>

      <OrnamentDivider />

      <motion.div
        className="rsvp__form-wrapper"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {status === "success" ? (
          <div className="rsvp__success">
            <p className="rsvp__success-icon">🙏</p>
            <p className="rsvp__success-msg">Terima kasih atas konfirmasi kehadiran Anda.</p>
            <p className="rsvp__success-sub">Kami sangat menantikan kehadiran Anda.</p>
          </div>
        ) : (
          <form className="rsvp__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="rsvp-name">Nama Lengkap</label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
              />
            </div>

            <div className="form-group">
              <label>Konfirmasi Kehadiran</label>
              <div className="rsvp__attendance-options">
                {ATTENDANCE_OPTIONS.map((opt) => (
                  <label key={opt} className="rsvp__radio-label">
                    <input
                      type="radio"
                      name="attendance"
                      value={opt}
                      checked={form.attendance === opt}
                      onChange={handleChange}
                    />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {form.attendance === "Hadir" && (
              <div className="form-group">
                <label htmlFor="rsvp-persons">Jumlah Tamu</label>
                <select
                  id="rsvp-persons"
                  name="persons"
                  value={form.persons}
                  onChange={handleChange}
                >
                  {["1", "2", "3", "4", "5+"].map((n) => (
                    <option key={n} value={n}>{n} orang</option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              className="rsvp__submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Mengirim..." : "Kirim Konfirmasi"}
            </button>

            {status === "error" && (
              <p className="rsvp__error">Terjadi kesalahan. Silakan coba lagi.</p>
            )}
          </form>
        )}
      </motion.div>

      <OrnamentDivider />
    </section>
  );
}
