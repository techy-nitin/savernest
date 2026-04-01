import { useState } from "react";
import { styles } from "./Styles";

export default function DealCard({ deal }) {
  const [hovered, setHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);

  const handleShare = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const shareText =
        typeof deal.reason === "string"
          ? deal.reason
          : deal.reason?.summary || "";

      if (navigator.share) {
        await navigator.share({
          title: deal.title,
          text: shareText,
          url: deal.link,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(deal.link);
        alert("Link copied!");
      }
    } catch (_) {}
  };

  return (
    <div
      style={styles.flipOuter}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          ...styles.flipGrid,
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          border: `1.5px solid ${hovered ? deal.accent : "#1f2937"}`,
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px ${deal.accent}22`
            : "0 16px 40px rgba(0,0,0,0.28)",
        }}
      >
        {/* FRONT */}
        <div style={styles.flipFront}>
          <div style={styles.imageWrap}>
            <img
              src={deal.image}
              alt={deal.title}
              style={{
                ...styles.image,
                transform: hovered ? "scale(1.05)" : "scale(1)",
              }}
            />
            <div style={styles.imageOverlay} />

            <span
              style={{
                ...styles.cardBadge,
                background: deal.tagColor || deal.accent,
              }}
            >
              {deal.tag}
            </span>

            <span style={styles.cardSave}>{deal.save}</span>

            <button
              type="button"
              style={styles.flipBtn}
              title="Why this pick?"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsFlipped(true);
              }}
            >
              ⓘ
            </button>
          </div>

          <div style={styles.cardBody}>
            <p style={styles.cardSubtitle}>{deal.subtitle}</p>

            <h3 style={styles.cardTitle}>{deal.title}</h3>

            <div style={styles.frontMetaRow}>
              <span
                style={{
                  ...styles.frontPrimaryPill,
                  background: deal.accent,
                }}
              >
                Best for: {deal.bestFor}
              </span>
            </div>

            <div style={styles.trustMetaRow}>
              <span style={styles.trustMeta}>{deal.trustLine || " "}</span>
            </div>

            <div style={styles.priceShareRow}>
              <div style={styles.priceGroup}>
                <span style={styles.price}>{deal.price}</span>
                <span style={styles.oldPrice}>{deal.oldPrice}</span>
              </div>

              <button
                type="button"
                style={styles.shareBtn}
                onClick={handleShare}
                title="Share"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </button>
            </div>

            <a
              href={deal.link}
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.amazonBtn,
                background: btnHovered ? deal.accent : deal.buttonBg || "#1e293b",
                color: btnHovered ? "#030712" : deal.buttonColor || "#f9fafb",
              }}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
            >
              {deal.cta || "Check today’s price"} ↗
            </a>
          </div>
        </div>

        {/* BACK */}
        <div style={styles.flipBack}>
          <div style={styles.backTopRow}>
            <span style={styles.backLabel}>WHY THIS PICK WON</span>
            <button
              type="button"
              style={styles.backCloseBtn}
              title="Back"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsFlipped(false);
              }}
            >
              ←
            </button>
          </div>

          <h3 style={styles.backTitle}>{deal.title}</h3>

          <p style={styles.backSummary}>{deal.reason?.summary}</p>

          <div style={styles.backPointsWrap}>
            {deal.reason?.pros?.slice(0, 3).map((point, i) => (
              <div key={i} style={styles.backPoint}>
                <span style={styles.backPointIcon}>✔</span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          <div style={{ ...styles.backPointsWrap, marginTop: "10px" }}>
            {deal.reason?.cons?.slice(0, 1).map((point, i) => (
              <div key={i} style={styles.backConPoint}>
                <span style={styles.backConIcon}>⚠</span>
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* <div style={styles.backScoreInline}>
            SaverNest Score:{" "}
            <span style={{ color: deal.accent }}>
              {deal.saverNestScore?.overall}/10
            </span>
          </div> */}
          <div style={styles.scoreBlock}>
  <div style={styles.scoreHeader}>
    SaverNest Score{" "}
    <span style={{ color: deal.accent }}>
      {deal.saverNestScore?.overall}/10
    </span>
  </div>

  <div style={styles.scoreRow}>
    <span style={styles.scoreLabel}>Value</span>
    <div style={styles.scoreBarTrack}>
      <div
        style={{
          ...styles.scoreBarFill,
          width: `${deal.saverNestScore?.value * 10}%`,
          background: deal.accent,
        }}
      />
    </div>
    <span style={styles.scoreNumber}>
      {deal.saverNestScore?.value}
    </span>
  </div>

  <div style={styles.scoreRow}>
    <span style={styles.scoreLabel}>Performance</span>
    <div style={styles.scoreBarTrack}>
      <div
        style={{
          ...styles.scoreBarFill,
          width: `${deal.saverNestScore?.performance * 10}%`,
          background: deal.accent,
        }}
      />
    </div>
    <span style={styles.scoreNumber}>
      {deal.saverNestScore?.performance}
    </span>
  </div>

  <div style={styles.scoreRow}>
    <span style={styles.scoreLabel}>Reliability</span>
    <div style={styles.scoreBarTrack}>
      <div
        style={{
          ...styles.scoreBarFill,
          width: `${deal.saverNestScore?.reliability * 10}%`,
          background: deal.accent,
        }}
      />
    </div>
    <span style={styles.scoreNumber}>
      {deal.saverNestScore?.reliability}
    </span>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}