import { useState } from "react";
import { copyToClipboard } from "../utils/copyToClipboard";
import config from "../data/weddingConfig";

export default function LinkGenerator() {
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);

  const base = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
  const link = name ? `${base}?to=${encodeURIComponent(name)}` : "";

  async function handleCopy() {
    if (!link) return;
    await copyToClipboard(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="link-gen">
      <div className="link-gen__header">
        <h1 className="link-gen__title">Generator Link Undangan</h1>
        <p className="link-gen__sub">
          {config.groomNameShort} & {config.brideNameShort} · Heritage Template
        </p>
      </div>

      <div className="link-gen__body">
        <div className="form-group">
          <label htmlFor="guest-name">Nama Tamu</label>
          <input
            id="guest-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Contoh: Budi Santoso"
          />
        </div>

        {link && (
          <div className="link-gen__preview">
            <p className="link-gen__preview-label">Link undangan:</p>
            <code className="link-gen__url">{link}</code>
            <button className="link-gen__copy-btn" onClick={handleCopy}>
              {copied ? "Tersalin ✓" : "Salin Link"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
