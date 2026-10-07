import { useState } from "react";
import { styles } from "./Styles";

function shareProduct(deal, setCopied) {
  const text = `${deal.title} - ${deal.price}\n${deal.link}`;

  if (navigator.share) {
    navigator
      .share({
        title: deal.title,
        text,
        url: deal.link,
      })
      .catch(() => {});
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }).catch(() => {});
}

export default function ShareButtons({ deal }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      onClick={() => shareProduct(deal, setCopied)}
      style={styles.imageShareBtn}
      aria-label="Share this deal"
      title={copied ? "Copied" : "Share"}
    >
      {copied ? (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8L9 12L15 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
        </svg>
      )}
    </button>
  );
}