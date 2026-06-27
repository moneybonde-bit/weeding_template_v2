import { useState } from "react";
import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import OrnamentDivider from "./OrnamentDivider";

const SAMPLE_WISHES = [
  { name: "Budi Santoso", message: "Selamat menempuh hidup baru. Semoga sakinah, mawaddah, warahmah." },
  { name: "Sri Rahayu", message: "Bahagia selalu untuk kalian berdua. Semoga menjadi keluarga yang berkah." },
];

export default function Wishes({ guestName }) {
  const [wishes, setWishes] = useState(SAMPLE_WISHES);
  const [form, setForm] = useState({
    name: guestName !== "Tamu Undangan" ? guestName : "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  if (!config.showWishes) return null;

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setStatus("loading");
    try {
      await fetch(config.wishesWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      });
      setWishes((prev) => [{ name: form.name, message: form.message }, ...prev]);
      setForm({ name: "", message: "" });
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section wishes" id="wishes">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Ucapan & Doa
      </motion.p>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Kirimkan Doa
      </motion.h2>

      <OrnamentDivider />

      <motion.form
        className="wishes__form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="form-group">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Nama Anda"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Ucapan & doa untuk mempelai..."
            rows={4}
            required
          />
        </div>
        <button type="submit" className="wishes__submit-btn" disabled={status === "loading"}>
          {status === "loading" ? "Mengirim..." : "Kirim Ucapan"}
        </button>
        {status === "error" && <p className="wishes__error">Gagal mengirim. Coba lagi.</p>}
      </motion.form>

      <div className="wishes__list">
        {wishes.map((w, i) => (
          <motion.div
            key={i}
            className="wishes__item"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <p className="wishes__item-name">{w.name}</p>
            <p className="wishes__item-msg">"{w.message}"</p>
          </motion.div>
        ))}
      </div>

      <OrnamentDivider />
    </section>
  );
}
