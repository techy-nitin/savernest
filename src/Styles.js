export const styles = {
  // ─── Page & Nav ───────────────────────────────────────────────
  page: {
    background: "#030712",
    minHeight: "100vh",
    fontFamily: "'Cabinet Grotesk', sans-serif",
    color: "#f9fafb",
  },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 99,
    background: "rgba(3,7,18,0.88)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid #111827",
    padding: "0 24px",
    animation: "fadeIn 0.4s ease both",
  },

  navInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    minHeight: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    flexWrap: "wrap",
  },

  logo: {
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 700,
    fontSize: "20px",
    color: "#f9fafb",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  logoSub: {
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: 500,
  },

  updatePill: {
    fontSize: "11px",
    color: "#4ade80",
    background: "rgba(74,222,128,0.08)",
    border: "1px solid rgba(74,222,128,0.18)",
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: 700,
    letterSpacing: "0.05em",
  },

  // ─── Container ────────────────────────────────────────────────
  container: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "56px 24px 48px",
  },

  // ─── Hero ─────────────────────────────────────────────────────
  heroSection: {
    position: "relative",
    overflow: "hidden",
    padding: "42px 34px",
    borderRadius: "32px",
    marginBottom: "34px",
    border: "1px solid rgba(31, 41, 55, 0.9)",
    background:
      "radial-gradient(circle at top left, rgba(74,222,128,0.10), transparent 26%), radial-gradient(circle at bottom right, rgba(34,211,238,0.10), transparent 30%), linear-gradient(180deg, rgba(17,24,39,0.92), rgba(3,7,18,0.98))",
    animation: "fadeUp 0.55s ease both",
  },

  heroGlowOne: {
    position: "absolute",
    top: "-80px",
    left: "-60px",
    width: "220px",
    height: "220px",
    borderRadius: "50%",
    background: "rgba(74, 222, 128, 0.14)",
    filter: "blur(85px)",
    pointerEvents: "none",
  },

  heroGlowTwo: {
    position: "absolute",
    right: "-80px",
    bottom: "-100px",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
    background: "rgba(34, 211, 238, 0.14)",
    filter: "blur(95px)",
    pointerEvents: "none",
  },

  heroGrid: {
    position: "relative",
    zIndex: 1,
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "36px",
    alignItems: "center",
  },

  heroLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },

  heroRight: {
    display: "flex",
    justifyContent: "flex-end",
  },

  heroPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "rgba(74,222,128,0.08)",
    border: "1px solid rgba(74,222,128,0.18)",
    borderRadius: "999px",
    padding: "8px 16px",
    fontSize: "11px",
    color: "#4ade80",
    fontWeight: 700,
    letterSpacing: "0.1em",
    marginBottom: "22px",
  },

  heroTitle: {
    fontFamily: "'Clash Display', sans-serif",
    fontSize: "clamp(46px, 7vw, 88px)",
    fontWeight: 700,
    lineHeight: 0.95,
    margin: "0 0 16px",
    letterSpacing: "-0.04em",
    color: "#f9fafb",
  },

  heroAccent: {
    background: "linear-gradient(90deg, #4ade80, #22d3ee)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  heroText: {
    fontSize: "17px",
    color: "#9ca3af",
    maxWidth: "640px",
    margin: "0",
    lineHeight: 1.75,
  },

  heroActions: {
    marginTop: "26px",
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryHeroBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "14px",
    fontWeight: 800,
    fontSize: "14px",
    color: "#031016",
    background: "linear-gradient(90deg, #4ade80, #22d3ee)",
    boxShadow: "0 14px 34px rgba(34, 211, 238, 0.18)",
  },

  secondaryHeroBtn: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    padding: "14px 22px",
    borderRadius: "14px",
    fontWeight: 800,
    fontSize: "14px",
    color: "#e5e7eb",
    background: "rgba(17,24,39,0.75)",
    border: "1px solid #1f2937",
  },

  trustRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "20px",
  },

  trustItem: {
    fontSize: "12px",
    color: "#94a3b8",
    background: "rgba(15,23,42,0.72)",
    border: "1px solid #1f2937",
    borderRadius: "999px",
    padding: "8px 12px",
    fontWeight: 700,
  },

  heroCardColumn: {
    width: "100%",
    maxWidth: "430px",
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },

  heroFeatureCardMain: {
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(17,24,39,0.88))",
    border: "1px solid #1f2937",
    borderRadius: "26px",
    padding: "24px",
    boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
  },

  heroFeatureBadge: {
    display: "inline-flex",
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "0.1em",
    color: "#4ade80",
    marginBottom: "14px",
  },

  heroFeatureTitle: {
    margin: "0 0 10px",
    fontFamily: "'Clash Display', sans-serif",
    fontSize: "clamp(26px, 4vw, 34px)",
    lineHeight: 1.05,
    color: "#f9fafb",
  },

  heroFeatureText: {
    margin: "0 0 20px",
    fontSize: "14px",
    lineHeight: 1.7,
    color: "#9ca3af",
  },

  heroStatsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "12px",
  },

  heroStatCard: {
    background: "rgba(3,7,18,0.75)",
    border: "1px solid #1f2937",
    borderRadius: "18px",
    padding: "16px 14px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  heroStatCardWide: {
    gridColumn: "1 / -1",
    background: "rgba(3,7,18,0.75)",
    border: "1px solid #1f2937",
    borderRadius: "18px",
    padding: "16px 14px",
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  heroStatNumber: {
    fontFamily: "'Clash Display', sans-serif",
    fontSize: "24px",
    fontWeight: 700,
    color: "#f9fafb",
  },

  heroStatLabel: {
    fontSize: "13px",
    lineHeight: 1.55,
    color: "#9ca3af",
    fontWeight: 600,
  },

  heroMiniCardRow: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "12px",
  },

  heroMiniCard: {
    background: "rgba(15,23,42,0.72)",
    border: "1px solid #1f2937",
    borderRadius: "18px",
    padding: "14px 16px",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  heroMiniLabel: {
    fontSize: "10px",
    fontWeight: 800,
    letterSpacing: "0.1em",
    color: "#6b7280",
  },

  heroMiniValue: {
    fontFamily: "'Clash Display', sans-serif",
    fontSize: "20px",
    color: "#f9fafb",
    fontWeight: 700,
  },

  // ─── Featured Banner ──────────────────────────────────────────
  featuredBanner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    flexWrap: "wrap",
    marginBottom: "30px",
    padding: "22px 24px",
    borderRadius: "24px",
    border: "1px solid #111827",
    background: "linear-gradient(180deg, #07101f, #0b1324)",
    animation: "fadeUp 0.6s ease both",
  },

  featuredLabel: {
    margin: "0 0 8px",
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "0.12em",
    color: "#4ade80",
  },

  featuredTitle: {
    margin: "0 0 8px",
    fontFamily: "'Clash Display', sans-serif",
    fontSize: "clamp(24px, 4vw, 34px)",
    lineHeight: 1.1,
    color: "#f9fafb",
  },

  featuredText: {
    margin: 0,
    fontSize: "14px",
    color: "#94a3b8",
    lineHeight: 1.6,
    maxWidth: "700px",
  },

  featuredLink: {
    color: "#e5e7eb",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: "14px",
    whiteSpace: "nowrap",
  },

  // ─── Section ──────────────────────────────────────────────────
  sectionWrap: {
    marginBottom: "48px",
    animation: "fadeUp 0.5s ease both",
  },

  sectionHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "end",
    gap: "16px",
    marginBottom: "18px",
    flexWrap: "wrap",
  },

  sectionEyebrow: {
    margin: "0 0 6px",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },

  sectionTitle: {
    margin: 0,
    fontFamily: "'Clash Display', sans-serif",
    fontSize: "28px",
    lineHeight: 1.1,
  },

  sectionAnchor: {
    color: "#9ca3af",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "13px",
  },

  // ─── Flip Card ────────────────────────────────────────────────
  flipOuter: {
    width: "100%",
    height: "100%",
    display: "flex",
    perspective: "1200px",
    boxSizing: "border-box",
  },

  flipGrid: {
  display: "grid",
  width: "100%",
  minHeight: "unset",
  transformStyle: "preserve-3d",
  borderRadius: "24px",
  transition:
    "transform 0.7s cubic-bezier(0.22,1,0.36,1), border-color 0.25s ease, box-shadow 0.25s ease",
},

  flipFront: {
    gridArea: "1 / 1",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    background: "#111827",
    borderRadius: "24px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  flipBack: {
    gridArea: "1 / 1",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.98), rgba(17,24,39,0.98))",
    borderRadius: "24px",
    padding: "22px 20px",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    height: "100%",
  },

  // ─── Card Image ───────────────────────────────────────────────
  imageWrap: {
    position: "relative",
    height: "230px",
    overflow: "hidden",
    flexShrink: 0,
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    filter: "brightness(0.84)",
    transition: "transform 0.4s ease",
  },

  imageOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, #111827 0%, transparent 60%)",
  },

  cardBadge: {
    position: "absolute",
    top: "14px",
    left: "14px",
    color: "#000",
    fontSize: "10px",
    fontWeight: 800,
    padding: "5px 12px",
    borderRadius: "999px",
    letterSpacing: "0.08em",
    fontFamily: "'Cabinet Grotesk', sans-serif",
    zIndex: 2,
  },

  cardSave: {
    position: "absolute",
    top: "14px",
    right: "62px",
    background: "rgba(0,0,0,0.72)",
    color: "#d1fae5",
    border: "1px solid #065f46",
    fontSize: "11px",
    fontWeight: 700,
    padding: "5px 10px",
    borderRadius: "999px",
    fontFamily: "'Cabinet Grotesk', sans-serif",
    zIndex: 2,
    whiteSpace: "nowrap",
  },

  flipBtn: {
    position: "absolute",
    top: "14px",
    right: "14px",
    zIndex: 4,
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(3,7,18,0.82)",
    color: "#f9fafb",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
  },

  // ─── Card Body ────────────────────────────────────────────────
 cardBody: {
  padding: "16px 18px 18px",
  display: "flex",
  flexDirection: "column",
},

  cardSubtitle: {
    margin: "0 0 6px",
    fontSize: "12px",
    color: "#6b7280",
    fontFamily: "'Cabinet Grotesk', sans-serif",
    letterSpacing: "0.04em",
    minHeight: "18px",
    overflow: "hidden",
  },

  cardTitle: {
    margin: "0 0 12px",
    fontSize: "20px",
    fontWeight: 700,
    color: "#f9fafb",
    fontFamily: "'Clash Display', sans-serif",
    lineHeight: 1.2,
    minHeight: "30px",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  },

  frontMetaRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "12px",
  },

  frontPrimaryPill: {
    fontSize: "11px",
    fontWeight: 800,
    color: "#031016",
    borderRadius: "999px",
    padding: "7px 12px",
  },

  trustMetaRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "14px",
    minHeight: "30px",
  },

  trustMeta: {
    fontSize: "11px",
    color: "#94a3b8",
    background: "rgba(15,23,42,0.72)",
    border: "1px solid #1f2937",
    borderRadius: "999px",
    padding: "6px 10px",
    fontWeight: 700,
    whiteSpace: "nowrap",
  },

  priceShareRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "6px",
    marginBottom: "14px",
    gap: "12px",
    minHeight: "44px",
  },

  priceGroup: {
    display: "flex",
    alignItems: "baseline",
    gap: "10px",
    flexWrap: "wrap",
  },

  price: {
    fontFamily: "'Clash Display', sans-serif",
    fontSize: "30px",
    fontWeight: 700,
    color: "#f9fafb",
  },

  oldPrice: {
    fontSize: "14px",
    color: "#4b5563",
    textDecoration: "line-through",
    fontFamily: "'Cabinet Grotesk', sans-serif",
  },

  shareBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "999px",
    border: "1px solid #1f2937",
    background: "rgba(15,23,42,0.72)",
    color: "#9ca3af",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  amazonBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    textDecoration: "none",
    padding: "13px 0",
    borderRadius: "12px",
    fontWeight: 800,
    fontSize: "14px",
    fontFamily: "'Cabinet Grotesk', sans-serif",
    marginTop: "0px",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "background 0.22s ease, color 0.22s ease",
    letterSpacing: "0.01em",
    cursor: "pointer",
  },

  // ─── Back Face ────────────────────────────────────────────────
  backTopRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "18px",
  },

  backLabel: {
    fontSize: "11px",
    fontWeight: 800,
    letterSpacing: "0.1em",
    color: "#4ade80",
  },

  backCloseBtn: {
    width: "38px",
    height: "38px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(3,7,18,0.75)",
    color: "#f9fafb",
    cursor: "pointer",
    fontSize: "18px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  backTitle: {
    margin: "0 0 14px",
    fontSize: "24px",
    fontWeight: 700,
    color: "#f9fafb",
    fontFamily: "'Clash Display', sans-serif",
    lineHeight: 1.2,
  },

  backSummary: {
    margin: "0 0 16px",
    fontSize: "15px",
    color: "#cbd5e1",
    lineHeight: 1.65,
    fontWeight: 500,
  },

  backPointsWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  backPoint: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "14px",
    color: "#e5e7eb",
    lineHeight: 1.6,
  },

  backPointIcon: {
    color: "#4ade80",
    fontWeight: 800,
    flexShrink: 0,
    marginTop: "1px",
  },

  backConPoint: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "14px",
    color: "#cbd5e1",
    lineHeight: 1.6,
  },

  backConIcon: {
    color: "#f59e0b",
    fontWeight: 800,
    flexShrink: 0,
    marginTop: "1px",
  },

  backScoreInline: {
    marginTop: "18px",
    fontSize: "14px",
    fontWeight: 700,
    color: "#f9fafb",
  },

  // ─── Footer ───────────────────────────────────────────────────
  footer: {
    borderTop: "1px solid #111827",
    paddingTop: "28px",
    marginTop: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "14px",
    animation: "fadeIn 0.6s ease 0.5s both",
  },

  footerLogo: {
    fontFamily: "'Clash Display', sans-serif",
    fontWeight: 700,
    fontSize: "18px",
    color: "#d1d5db",
  },

  footerLinks: {
    display: "flex",
    gap: "18px",
    flexWrap: "wrap",
  },

  footerLinkBtn: {
    color: "#9ca3af",
    fontSize: "13px",
    background: "transparent",
    border: "none",
    padding: 0,
    cursor: "pointer",
    fontWeight: 600,
    textDecoration: "none",
  },

  footerCopy: {
    fontSize: "12px",
    color: "#374151",
  },

  // ─── Info Page ────────────────────────────────────────────────
  infoPageWrap: {
    minHeight: "100vh",
    background: "#ffffff",
    position: "relative",
    overflow: "hidden",
    fontFamily: "'DM Sans', sans-serif",
    color: "#1e293b",
    paddingBottom: "80px",
  },

  infoBgGlowOne: {
    position: "absolute",
    top: "-10%",
    left: "-5%",
    width: "40vw",
    height: "40vw",
    background: "rgba(37, 99, 235, 0.05)",
    filter: "blur(120px)",
    borderRadius: "50%",
  },

  infoBgGlowTwo: {
    position: "absolute",
    bottom: "10%",
    right: "-5%",
    width: "30vw",
    height: "30vw",
    background: "rgba(124, 58, 237, 0.05)",
    filter: "blur(100px)",
    borderRadius: "50%",
  },

  infoPageInner: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "0 2rem",
    position: "relative",
    zIndex: 2,
  },

  infoTopBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2rem 0",
    marginBottom: "3rem",
    gap: "16px",
    flexWrap: "wrap",
  },

  backBtn: {
    textDecoration: "none",
    color: "#2563eb",
    fontWeight: 700,
    fontSize: "0.95rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  },

  infoMiniLinks: {
    display: "flex",
    gap: "1.5rem",
    flexWrap: "wrap",
  },

  infoMiniLink: {
    textDecoration: "none",
    color: "#64748b",
    fontSize: "0.85rem",
    fontWeight: 600,
    transition: "color 0.2s",
  },

  infoHeroCard: {
    padding: "4rem 0",
    borderBottom: "1px solid #f1f5f9",
    marginBottom: "4rem",
  },

  infoHeroEyebrow: {
    letterSpacing: "0.2em",
    fontSize: "0.75rem",
    fontWeight: 800,
    color: "#94a3b8",
    marginBottom: "1rem",
  },

  infoHeroTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
    lineHeight: "1.1",
    fontWeight: 800,
    marginBottom: "1.5rem",
    color: "#0f172a",
  },

  infoHeroAccent: {
    color: "#2563eb",
  },

  infoHeroText: {
    fontSize: "1.15rem",
    color: "#64748b",
    lineHeight: "1.7",
    maxWidth: "600px",
  },

  infoSectionsWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "5rem",
  },

  infoSectionCard: {
    display: "flex",
    gap: "2.5rem",
    position: "relative",
  },

  infoSectionBadge: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "3rem",
    fontWeight: 800,
    color: "#e2e8f0",
    lineHeight: "1",
    minWidth: "60px",
  },

  infoSectionTitle: {
    fontFamily: "'Syne', sans-serif",
    fontSize: "1.8rem",
    fontWeight: 800,
    marginBottom: "1.5rem",
    color: "#0f172a",
  },

  infoContent: {
    fontSize: "1.05rem",
    color: "#475569",
    lineHeight: "1.8",
  },

  highlightText: {
    padding: "1.5rem",
    backgroundColor: "#f8fafc",
    borderLeft: "4px solid #2563eb",
    borderRadius: "0 12px 12px 0",
    marginTop: "1.5rem",
  },

  infoFooter: {
    marginTop: "8rem",
    paddingTop: "2rem",
    borderTop: "1px solid #f1f5f9",
    textAlign: "center",
    color: "#94a3b8",
    fontSize: "0.85rem",
  },
  scoreBlock: {
  marginTop: "18px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
},

scoreHeader: {
  fontSize: "14px",
  fontWeight: 700,
  color: "#f9fafb",
},

scoreRow: {
  display: "grid",
  gridTemplateColumns: "90px 1fr 28px",
  alignItems: "center",
  gap: "10px",
},

scoreLabel: {
  fontSize: "12px",
  color: "#9ca3af",
  fontWeight: 600,
},

scoreBarTrack: {
  height: "6px",
  borderRadius: "999px",
  background: "#1f2937",
  overflow: "hidden",
},

scoreBarFill: {
  height: "100%",
  borderRadius: "999px",
},

scoreNumber: {
  fontSize: "12px",
  color: "#cbd5e1",
  fontWeight: 700,
},
};