import { useState } from "react";
import { motion } from "framer-motion";
import config from "../data/weddingConfig";
import { copyToClipboard } from "../utils/copyToClipboard";
import OrnamentDivider from "./OrnamentDivider";

export default function DigitalEnvelope() {
  const [copied, setCopied] = useState(null);
  if (!config.showDigitalEnvelope) return null;

  async function handleCopy(text, id) {
    await copyToClipboard(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <section className="section digital-envelope" id="envelope">
      <motion.p
        className="section__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Amplop Digital
      </motion.p>

      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Hadiah & Doa
      </motion.h2>

      <OrnamentDivider />

      <motion.p
        className="digital-envelope__desc"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Bagi yang ingin memberikan hadiah, kami menerima dengan tulus melalui:
      </motion.p>

      <div className="digital-envelope__accounts">
        {config.digitalEnvelope.bankAccounts.map((acc, i) => (
          <motion.div
            key={i}
            className="digital-envelope__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
          >
            <p className="digital-envelope__bank">{acc.bank}</p>
            <p className="digital-envelope__account-num">{acc.accountNumber}</p>
            <p className="digital-envelope__account-name">{acc.accountName}</p>
            <button
              className="digital-envelope__copy-btn"
              onClick={() => handleCopy(acc.accountNumber, `acc-${i}`)}
            >
              {copied === `acc-${i}` ? "Tersalin ✓" : "Salin Nomor"}
            </button>
          </motion.div>
        ))}
      </div>

      {config.digitalEnvelope.qrisImageUrl && (
        <motion.div
          className="digital-envelope__qris"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="digital-envelope__qris-label">atau via QRIS</p>
          <img
            src={config.digitalEnvelope.qrisImageUrl}
            alt="QRIS"
            className="digital-envelope__qris-img"
          />
        </motion.div>
      )}

      <OrnamentDivider />
    </section>
  );
}
