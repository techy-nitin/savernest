import { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionSlider from "./SectionSlider";
import { productSections } from "./Products";
import { FONTS, WEBSITE_NAME, WEBSITE_TAGLINE } from "./Site";
import { styles } from "./Styles";

export default function HomePage() {
  const footerLinks = [
    { key: "shortlist", label: "About Us" },
    { key: "privacy", label: "Privacy Policy" },
    { key: "affiliate", label: "Affiliate Disclosure" },
  ];
useEffect(() => {
  if (window.innerWidth <= 768) {
    requestAnimationFrame(() => {
      const firstSection = document.querySelector("#all-sections");
      if (firstSection) {
        window.scrollTo({
          top: firstSection.offsetTop,
          behavior: "auto"
        });
      }
    });
  }
}, []);
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS;
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        background: #030712;
        overflow-x: hidden;
      }

      .heroGrid {
        position: relative;
        z-index: 1;
      }

      .heroActions a {
        box-sizing: border-box;
      }

      .swiper {
        width: 100%;
        overflow: hidden !important;
      }

      .swiper-wrapper {
        align-items: stretch;
      }

      .swiper-slide {
        height: auto !important;
      }

      .swiper-button-prev,
      .swiper-button-next {
        display: none !important;
      }

      @media (max-width: 1024px) {
        .heroGrid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
          align-items: stretch !important;
        }

        .heroLeft {
          align-items: flex-start !important;
        }

        .heroRight {
          justify-content: stretch !important;
        }

        .heroCardColumn {
          max-width: 100% !important;
        }
      }

      @media (max-width: 768px) {
        .navMobileWrap {
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          justify-content: flex-start !important;
          gap: 6px !important;
          width: 100% !important;
          padding: 8px 0 !important;
        }

        .navMobileTop {
          width: 100%;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
        }

        .navMobileBottom {
          width: 100%;
          display: flex !important;
          flex-direction: column !important;
          align-items: flex-start !important;
          gap: 6px !important;
        }

        .logoSubMobile {
          font-size: 11px !important;
          line-height: 1.35 !important;
        }

        .telegramNavBtn {
          font-size: 10px !important;
          padding: 6px 10px !important;
          white-space: nowrap !important;
        }

        .heroSection {
          padding: 20px 14px !important;
          border-radius: 22px !important;
        }

        .heroTitleMobile {
          font-size: clamp(38px, 11vw, 56px) !important;
          line-height: 0.98 !important;
        }

        .heroTextMobile {
          font-size: 14px !important;
          line-height: 1.65 !important;
          max-width: 100% !important;
        }

        .heroActions {
          flex-direction: column !important;
          width: 100% !important;
          gap: 12px !important;
        }

        .heroActions a {
          width: 100% !important;
          justify-content: center !important;
          padding: 14px 16px !important;
        }

        .telegramHeroBtn {
          width: 100% !important;
          text-align: center !important;
          justify-content: center !important;
          box-sizing: border-box !important;
        }

        .trustRowMobile {
          gap: 8px !important;
        }

        .trustRowMobile span {
          font-size: 11px !important;
          padding: 7px 10px !important;
        }

        .featuredBannerMobile {
          padding: 18px 16px !important;
          border-radius: 20px !important;
        }

        .featuredTitleMobile {
          font-size: 26px !important;
          line-height: 1.12 !important;
        }

        .footerMobile {
          flex-direction: column !important;
          align-items: flex-start !important;
        }

        .footerLinksMobile {
          gap: 10px !important;
        }
      }

      @media (max-width: 480px) {
        .logoSubMobile {
          font-size: 10px !important;
        }

        .telegramNavBtn {
          font-size: 9px !important;
          padding: 6px 9px !important;
        }

        .heroSection {
          padding: 18px 12px !important;
        }

        .heroPillMobile {
          font-size: 10px !important;
          padding: 7px 12px !important;
        }

        .heroFeatureCardMobile {
          padding: 18px !important;
          border-radius: 22px !important;
        }

        .heroFeatureTitleMobile {
          font-size: 28px !important;
          line-height: 1.05 !important;
        }

        .heroStatsGridMobile {
          grid-template-columns: 1fr !important;
        }

        .featuredLinkMobile {
          width: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);
 
    return () => {
      try {
        document.head.removeChild(link);
        document.head.removeChild(style);
      } catch (e) {}
    };
  }, []);

  return (
    <div style={styles.page}>
      <nav style={styles.nav}>
        <div style={styles.navInner}>
          <div
            className="navMobileWrap"
            style={{
              width: "100%",
            }}
          >
            <div
              className="navMobileTop"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                gap: "12px",
              }}
            >
              <span style={styles.logo}>
                <span style={{ color: "#4ade80" }}>⚡</span> {WEBSITE_NAME}
              </span>

              <a
                href="https://t.me/Crazyxyzdeal"
                target="_blank"
                rel="noopener noreferrer"
                className="telegramNavBtn"
                style={{
                  ...styles.updatePill,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                ● LIVE DEALS ON TELEGRAM
              </a>
            </div>

            <div
              className="navMobileBottom"
              style={{
                width: "100%",
              }}
            >
              <span
                className="logoSubMobile"
                style={{
                  ...styles.logoSub,
                }}
              >
                {WEBSITE_TAGLINE}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div style={styles.container}>
        <section
          className="heroSection"
          style={{
            ...styles.heroSection,
            padding: "32px 40px",
            minHeight: "auto",
          }}
        >
          <div style={styles.heroGlowOne}></div>
          <div style={styles.heroGlowTwo}></div>

          <div className="heroGrid" style={styles.heroGrid}>
            <div className="heroLeft" style={styles.heroLeft}>
              <div className="heroPillMobile" style={styles.heroPill}>
                CURATED TECH • VALUE PICKS • NO RANDOM JUNK
              </div>

              <h1
                className="heroTitleMobile"
                style={{
                  ...styles.heroTitle,
                  marginBottom: "14px",
                }}
              >
                Buy Better Tech.
                <br />
                <span style={styles.heroAccent}>Skip the Garbage.</span>
              </h1>

              <p
                className="heroTextMobile"
                style={{
                  ...styles.heroText,
                  maxWidth: "560px",
                }}
              >
                We compare multiple models in each category and shortlist only
                the few still worth buying at today’s prices.
              </p>

              <div className="heroActions" style={styles.heroActions}>
                <a href="#featured" style={styles.primaryHeroBtn}>
                  Explore Top Picks
                </a>

                <a href="#all-sections" style={styles.secondaryHeroBtn}>
                  Browse Categories
                </a>
              </div>

              <a
                className="telegramHeroBtn"
                href="https://t.me/Crazyxyzdeal"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "14px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#22c55e",
                  color: "#02130a",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Join Telegram for Live Deal Alerts →
              </a>

              <div className="trustRowMobile" style={styles.trustRow}>
                <span style={styles.trustItem}>✓ Compared alternatives</span>
                <span style={styles.trustItem}>✓ Honest skip advice</span>
                <span style={styles.trustItem}>✓ Price-aware picks</span>
              </div>
            </div>

            <div className="heroRight" style={styles.heroRight}>
              <div className="heroCardColumn" style={styles.heroCardColumn}>
                <div
                  className="heroFeatureCardMobile"
                  style={styles.heroFeatureCardMain}
                >
                  <span style={styles.heroFeatureBadge}>TODAY’S BEST VALUE</span>

                  <h3
                    className="heroFeatureTitleMobile"
                    style={styles.heroFeatureTitle}
                  >
                    Best budget tech picks worth buying right now
                  </h3>

                  <p style={styles.heroFeatureText}>
                    Start with stronger picks instead of wasting time.
                  </p>

                  <div
                    className="heroStatsGridMobile"
                    style={styles.heroStatsGrid}
                  >
                    <div style={styles.heroStatCard}>
                      <span style={styles.heroStatNumber}>Compared</span>
                      <span style={styles.heroStatLabel}>20+ models checked</span>
                    </div>

                    <div style={styles.heroStatCard}>
                      <span style={styles.heroStatNumber}>Weekly</span>
                      <span style={styles.heroStatLabel}>fresh updates</span>
                    </div>

                    <div style={styles.heroStatCardWide}>
                      <span style={styles.heroStatNumber}>Value-first</span>
                      <span style={styles.heroStatLabel}>
                        no sponsored ranking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="featured"
          className="featuredBannerMobile"
          style={styles.featuredBanner}
        >
          <div>
            <p style={styles.featuredLabel}>START HERE</p>
            <h2 className="featuredTitleMobile" style={styles.featuredTitle}>
              Only the strongest value tech picks right now
            </h2>
            <p style={styles.featuredText}>
              Each section compares multiple options and keeps only the best
              performers.
            </p>
          </div>

          <a
            className="featuredLinkMobile"
            href="#all-sections"
            style={styles.featuredLink}
          >
            View all sections →
          </a>
        </section>

        <div id="all-sections">
          {productSections.map((section) => (
            <SectionSlider key={section.key} section={section} />
          ))}
        </div>

        <footer className="footerMobile" style={styles.footer}>
  <span style={styles.footerLogo}>⚡ {WEBSITE_NAME}</span>

  <div className="footerLinksMobile" style={styles.footerLinks}>
    {footerLinks.map((item) => (
      <Link
        key={item.key}
        to={`/info#${item.key}`}
        style={styles.footerLinkBtn}
      >
        {item.label}
      </Link>
    ))}

    <a
      href="https://t.me/Crazyxyzdeal"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.footerLinkBtn,
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      Join Telegram
    </a>
  </div>

  <span style={styles.footerCopy}>© 2026 {WEBSITE_NAME}</span>

  <span style={{ ...styles.footerCopy, fontSize: "12px", opacity: 0.7 }}>
    As an Amazon Associate I earn from qualifying purchases.
  </span>
</footer>
      </div>
    </div>
  );
}