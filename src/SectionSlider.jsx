import DealCard from "./DealCard";
import { styles } from "./Styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function SectionSlider({ section }) {
  const totalItems = section.items.length;

  return (
    <section
      style={{
        ...styles.sectionWrap,
        width: "100%",
        overflow: "hidden",
      }}
      id={section.key}
    >
      <div
        style={{
          ...styles.sectionHeaderRow,
          alignItems: "center",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <p style={{ ...styles.sectionEyebrow, color: section.accent }}>
            {section.title}
          </p>
          <h2
            style={{
              ...styles.sectionTitle,
              fontSize: "clamp(20px, 5vw, 28px)",
              lineHeight: "1.15",
            }}
          >
            {section.subtitle}
          </h2>
        </div>

        <a href={`#${section.key}`} style={styles.sectionAnchor}>
          Explore
        </a>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        loop={totalItems > 1}
        watchOverflow={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          640: {
            slidesPerView: Math.min(totalItems, 2),
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: Math.min(totalItems, 3),
            spaceBetween: 18,
          },
        }}
        style={{
          width: "100%",
          paddingBottom: "34px",
          overflow: "hidden",
        }}
      >
        {section.items.map((deal, i) => (
          <SwiperSlide
            key={deal.id}
            style={{
              height: "auto",
              display: "flex",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                minWidth: 0,
              }}
            >
              <DealCard deal={deal} index={i} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}