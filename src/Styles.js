// Styles.js
export const styles = {
  page: {
    backgroundColor: "#030712",
    color: "#f3f4f6",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
    width: "100%",
    overflowX: "hidden",
  },
  
  // Navigation
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(16px)",
    backgroundColor: "rgba(3, 7, 18, 0.82)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  },
  navInner: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "12px 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "800",
    letterSpacing: "-0.5px",
    color: "#ffffff",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
  },
  logoSub: {
    fontSize: "12px",
    color: "#9ca3af",
    fontWeight: "400",
  },
  updatePill: {
    backgroundColor: "rgba(34, 197, 94, 0.12)",
    color: "#4ade80",
    border: "1px solid rgba(74, 222, 128, 0.25)",
    borderRadius: "999px",
    padding: "6px 14px",
    fontSize: "12px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },

  // Main Layout Container
  container: {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 24px 60px 24px",
  },

  // Hero Section
  heroSection: {
    position: "relative",
    backgroundColor: "#0b1120",
    borderRadius: "28px",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    marginTop: "20px",
    marginBottom: "40px",
    overflow: "hidden",
  },
  heroGlowOne: {
    position: "absolute",
    top: "-20%",
    left: "-10%",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(74, 222, 128, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
    pointerEvents: "none",
  },
  heroGlowTwo: {
    position: "absolute",
    bottom: "-20%",
    right: "-10%",
    width: "400px",
    height: "400px",
    background: "radial-gradient(circle, rgba(34, 211, 238, 0.15) 0%, rgba(0, 0, 0, 0) 70%)",
    pointerEvents: "none",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "40px",
    alignItems: "center",
  },
  heroLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  heroPill: {
    fontSize: "11px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#4ade80",
    backgroundColor: "rgba(74, 222, 128, 0.1)",
    padding: "6px 12px",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  heroTitle: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.08",
    color: "#ffffff",
    letterSpacing: "-1px",
  },
  heroAccent: {
    background: "linear-gradient(135deg, #4ade80 0%, #22d3ee 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroText: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#9ca3af",
    margin: "16px 0 24px 0",
  },
  heroActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  primaryHeroBtn: {
    backgroundColor: "#ffffff",
    color: "#030712",
    fontWeight: "700",
    padding: "12px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "14px",
    transition: "all 0.2s ease",
  },
  secondaryHeroBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#f3f4f6",
    fontWeight: "600",
    padding: "12px 24px",
    borderRadius: "12px",
    textDecoration: "none",
    fontSize: "14px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  trustRow: {
    display: "flex",
    gap: "16px",
    marginTop: "24px",
    flexWrap: "wrap",
  },
  trustItem: {
    fontSize: "12px",
    color: "#6b7280",
    fontWeight: "500",
  },

  // Hero Card Column (Right Side)
  heroRight: {
    display: "flex",
    justifyContent: "flex-end",
  },
  heroCardColumn: {
    width: "100%",
    maxWidth: "380px",
  },
  heroFeatureCardMain: {
    backgroundColor: "rgba(17, 24, 39, 0.7)",
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: "24px",
  },
  heroFeatureBadge: {
    fontSize: "10px",
    fontWeight: "800",
    color: "#38bdf8",
    letterSpacing: "1px",
  },
  heroFeatureTitle: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "8px 0",
  },
  heroFeatureText: {
    fontSize: "13px",
    color: "#9ca3af",
    marginBottom: "16px",
  },
  heroStatsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "10px",
  },
  heroStatCard: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  heroStatCardWide: {
    gridColumn: "span 2",
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  heroStatNumber: {
    display: "block",
    fontSize: "14px",
    fontWeight: "700",
    color: "#ffffff",
  },
  heroStatLabel: {
    fontSize: "11px",
    color: "#6b7280",
  },

  // Featured Banner
  featuredBanner: {
    backgroundColor: "rgba(17, 24, 39, 0.5)",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    padding: "28px 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "40px",
  },
  featuredLabel: {
    fontSize: "11px",
    fontWeight: "800",
    color: "#f59e0b",
    letterSpacing: "1.5px",
    margin: 0,
  },
  featuredTitle: {
    fontSize: "22px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "4px 0",
  },
  featuredText: {
    fontSize: "14px",
    color: "#9ca3af",
    margin: 0,
  },
  featuredLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    padding: "10px 18px",
    borderRadius: "10px",
    whiteSpace: "nowrap",
  },

  // Section Component Styles
  sectionWrap: {
    marginBottom: "48px",
  },
  sectionHeaderRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: "20px",
  },
  sectionEyebrow: {
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1px",
    textTransform: "uppercase",
    margin: "0 0 4px 0",
  },
  sectionTitle: {
    fontWeight: "800",
    color: "#ffffff",
    margin: 0,
  },
  sectionAnchor: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "600",
  },

  // DealCard 3D Flip Mechanics
  flipOuter: {
    perspective: "1000px",
    width: "100%",
    minHeight: "440px",
  },
  flipGrid: {
    position: "relative",
    width: "100%",
    height: "100%",
    minHeight: "440px",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), border 0.3s ease, box-shadow 0.3s ease",
    borderRadius: "20px",
    backgroundColor: "#0d1322",
  },
  flipFront: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    overflow: "hidden",
    backgroundColor: "#0d1322",
  },
  flipBack: {
    position: "absolute",
    inset: 0,
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    backgroundColor: "#0d1322",
    overflowY: "auto",
  },

  // DealCard Elements
  imageWrap: {
    position: "relative",
    width: "100%",
    height: "200px",
    backgroundColor: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  image: {
    maxHeight: "160px",
    maxWidth: "80%",
    objectFit: "contain",
    transition: "transform 0.3s ease",
  },
  imageOverlay: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(to top, rgba(13, 19, 34, 1) 0%, rgba(0,0,0,0) 40%)",
  },
  cardBadge: {
    position: "absolute",
    top: "12px",
    left: "12px",
    padding: "4px 8px",
    borderRadius: "6px",
    fontSize: "10px",
    fontWeight: "800",
    color: "#030712",
    letterSpacing: "0.5px",
  },
  cardSave: {
    position: "absolute",
    top: "12px",
    right: "12px",
    backgroundColor: "rgba(3, 7, 18, 0.75)",
    backdropFilter: "blur(4px)",
    color: "#f3f4f6",
    fontSize: "10px",
    fontWeight: "700",
    padding: "4px 8px",
    borderRadius: "6px",
  },
  flipBtn: {
    position: "absolute",
    bottom: "12px",
    right: "12px",
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(8px)",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    width: "28px",
    height: "28px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
  },
  cardBody: {
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "space-between",
  },
  cardSubtitle: {
    fontSize: "11px",
    color: "#9ca3af",
    margin: "0 0 4px 0",
  },
  cardTitle: {
    fontSize: "16px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "0 0 10px 0",
    lineHeight: "1.3",
  },
  frontMetaRow: {
    marginBottom: "8px",
  },
  frontPrimaryPill: {
    display: "inline-block",
    fontSize: "10px",
    fontWeight: "700",
    color: "#030712",
    padding: "3px 8px",
    borderRadius: "4px",
  },
  trustMetaRow: {
    marginBottom: "12px",
  },
  trustMeta: {
    fontSize: "11px",
    color: "#6b7280",
    fontStyle: "italic",
  },
  priceShareRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "12px",
  },
  priceGroup: {
    display: "flex",
    alignItems: "baseline",
    gap: "8px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#ffffff",
  },
  oldPrice: {
    fontSize: "12px",
    color: "#6b7280",
    textDecoration: "line-through",
  },
  shareBtn: {
    background: "none",
    border: "none",
    color: "#9ca3af",
    cursor: "pointer",
    padding: "4px",
  },
  amazonBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "10px 16px",
    borderRadius: "10px",
    fontWeight: "700",
    fontSize: "13px",
    textDecoration: "none",
    transition: "all 0.2s ease",
  },

  // Card Back Elements
  backTopRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  },
  backLabel: {
    fontSize: "10px",
    fontWeight: "800",
    color: "#9ca3af",
    letterSpacing: "1px",
  },
  backCloseBtn: {
    background: "none",
    border: "none",
    color: "#ffffff",
    fontSize: "16px",
    cursor: "pointer",
  },
  backTitle: {
    fontSize: "14px",
    fontWeight: "700",
    color: "#ffffff",
    margin: "0 0 8px 0",
  },
  backSummary: {
    fontSize: "12px",
    color: "#9ca3af",
    lineHeight: "1.4",
    margin: "0 0 12px 0",
  },
  backPointsWrap: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  backPoint: {
    display: "flex",
    alignItems: "flex-start",
    gap: "6px",
    fontSize: "11px",
    color: "#d1d5db",
  },
  backPointIcon: {
    color: "#4ade80",
  },
  backConPoint: {
    display: "flex",
    alignItems: "flex-start",
    gap: "6px",
    fontSize: "11px",
    color: "#f87171",
  },
  backConIcon: {
    color: "#f87171",
  },
  scoreBlock: {
    marginTop: "auto",
    paddingTop: "12px",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  },
  scoreHeader: {
    fontSize: "11px",
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
  },
  scoreRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "4px",
  },
  scoreLabel: {
    fontSize: "10px",
    color: "#6b7280",
    width: "60px",
  },
  scoreBarTrack: {
    flexGrow: 1,
    height: "4px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: "2px",
    overflow: "hidden",
  },
  scoreBarFill: {
    height: "100%",
    borderRadius: "2px",
  },
  scoreNumber: {
    fontSize: "10px",
    fontWeight: "700",
    color: "#9ca3af",
    width: "20px",
    textAlign: "right",
  },

  // Footer
  footer: {
    marginTop: "60px",
    paddingTop: "24px",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerLogo: {
    fontSize: "16px",
    fontWeight: "800",
    color: "#ffffff",
  },
  footerLinks: {
    display: "flex",
    gap: "16px",
  },
  footerLinkBtn: {
    color: "#9ca3af",
    textDecoration: "none",
    fontSize: "12px",
  },
  footerCopy: {
    fontSize: "12px",
    color: "#4b5563",
    width: "100%",
  },
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                fontSize: "18px",
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