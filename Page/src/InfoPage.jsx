import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WEBSITE_NAME } from "./Site";
import { styles } from "./Styles";

export default function InfoPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div style={styles.infoPageWrap}>
      <div style={styles.infoBgGlowOne}></div>
      <div style={styles.infoBgGlowTwo}></div>

      <div style={styles.infoPageInner}>
        <header style={styles.infoTopBar}>
          <Link to="/" style={styles.backBtn}>
            <span style={{ marginRight: "8px" }}>←</span> Back to Shop
          </Link>

          <div style={styles.infoMiniLinks}>
            {[
              { key: "shortlist", label: "Shortlist" },
              { key: "privacy", label: "Privacy" },
              { key: "affiliate", label: "Affiliate" },
              { key: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                style={styles.infoMiniLink}
              >
                {item.label}
              </a>
            ))}
          </div>
        </header>

        <section style={styles.infoHeroCard}>
          <div style={styles.infoHeroEyebrow}>TRUST & TRANSPARENCY</div>
          <h1 style={styles.infoHeroTitle}>
            Everything you should know <br />
            <span style={styles.infoHeroAccent}>about {WEBSITE_NAME}</span>
          </h1>
          <p style={styles.infoHeroText}>
            We keep this platform simple: shortlist better products, stay honest
            about affiliate links, and help buyers make smarter decisions with
            less noise.
          </p>
        </section>

        <div style={styles.infoSectionsWrap}>
          <section id="shortlist" style={styles.infoSectionCard}>
            <div style={styles.infoSectionBadge}>01</div>
            <div style={styles.infoCardContent}>
              <h2 style={styles.infoSectionTitle}>How We Shortlist Products</h2>
              <div style={styles.infoContent}>
                <p>
                  <strong>{WEBSITE_NAME}</strong> manually compares multiple
                  products in each category and shortlists only the strongest
                  value-for-money options.
                </p>
                <p>Our selection is based on:</p>
                <ul style={{ paddingLeft: "20px", margin: "10px 0", color: "#cbd5e1" }}>
                  <li>real performance compared to price</li>
                  <li>reliability and buyer feedback</li>
                  <li>battery life, display, and daily usability</li>
                  <li>long-term value, not just headline specs</li>
                  <li>current market pricing in India</li>
                </ul>
                <p>
                  We do not rank products based on sponsorships. A product is
                  included only if it looks like a strong buying decision for
                  the target budget.
                </p>
              </div>
            </div>
          </section>

          <section id="privacy" style={styles.infoSectionCard}>
            <div style={styles.infoSectionBadge}>02</div>
            <div style={styles.infoCardContent}>
              <h2 style={styles.infoSectionTitle}>Privacy Policy</h2>
              <div style={styles.infoContent}>
                <p>
                  Your privacy matters. We do not sell personal data and we do
                  not collect unnecessary personal information from visitors.
                </p>
                <p>
                  Basic analytics, if used, are only intended to understand page
                  performance and improve the website experience.
                </p>
                <p>
                  Some links on this website may take you to third-party
                  platforms such as Amazon. Those websites operate under their
                  own privacy policies and data practices.
                </p>
              </div>
            </div>
          </section>

          <section id="affiliate" style={styles.infoSectionCard}>
            <div style={styles.infoSectionBadge}>03</div>
            <div style={styles.infoCardContent}>
              <h2 style={styles.infoSectionTitle}>Affiliate Disclosure</h2>
              <div style={styles.infoContent}>
                <p>
                  <strong>{WEBSITE_NAME}</strong> participates in affiliate
                  programs. This means we may earn a small commission when you
                  purchase through links on this site.
                </p>
                <p style={styles.highlightText}>
                  This comes at <strong>no extra cost to you</strong> and helps
                  support the work required to research, compare, and update
                  product recommendations.
                </p>
                <p>
                  Affiliate partnerships do not decide our rankings. We aim to
                  recommend products that appear to offer strong value, not just
                  products with links attached.
                </p>
              </div>
            </div>
          </section>

          <section id="contact" style={styles.infoSectionCard}>
            <div style={styles.infoSectionBadge}>04</div>
            <div style={styles.infoCardContent}>
              <h2 style={styles.infoSectionTitle}>Contact</h2>
              <div style={styles.infoContent}>
                <p>
                  If you have product suggestions, correction requests, or want
                  to report outdated information, you can reach out here:
                </p>
               <p style={styles.highlightText}>
  Email: <strong>nitin19095@gmail.com</strong>
</p>

<p>
  Join our Telegram channel for quick deal alerts and price drops:
</p>

<p style={styles.highlightText}>
  Telegram: <strong>https://t.me/Crazyxyzdeal</strong>
</p>
                <p>
                  Feedback helps improve shortlist quality and keep
                  recommendations more useful for everyone.
                </p>
              </div>
            </div>
          </section>

          <section id="updates" style={styles.infoSectionCard}>
            <div style={styles.infoSectionBadge}>05</div>
            <div style={styles.infoCardContent}>
              <h2 style={styles.infoSectionTitle}>Update Policy</h2>
              <div style={styles.infoContent}>
                <p>Product recommendations are reviewed regularly and adjusted when:</p>
                <ul style={{ paddingLeft: "20px", margin: "10px 0", color: "#cbd5e1" }}>
                  <li>better alternatives appear</li>
                  <li>prices change significantly</li>
                  <li>older models stop making sense</li>
                  <li>reliability concerns become visible</li>
                </ul>
                <p>
                  The goal is to keep the shortlist useful, current, and focused
                  on strong value rather than outdated picks.
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer style={styles.infoFooter}>
          <p>© 2026 {WEBSITE_NAME} · Trust, transparency, and smarter buying</p>
        </footer>
      </div>
    </div>
  );
}