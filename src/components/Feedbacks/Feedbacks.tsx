import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import { feedbacksData } from "./FeedbacksData";
import TopSection from "../common/TopSection/TopSection";
import Feedback from "./Feedback";
import styles from "./Feedbacks.module.css";
import { useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Button from "../common/Button/Button";

export default function Feedbacks() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className={`${styles.feedbackSection} container`}>
      <TopSection>What Our Client’s Say</TopSection>
      <div className={styles.navContainer}>
        <Button
          className={`${styles.navBtn} ${styles.navBtnPrev} `}
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <MdArrowBack />
        </Button>
        <Swiper
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop
          autoplay={{ delay: 5000 }}
          className={styles.swiper}
        >
          {feedbacksData.map((item, index) => (
            <SwiperSlide key={index}>
              <Feedback
                name={item.name}
                date={item.date}
                srcImg={item.srcImg}
                text={item.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          className={`${styles.navBtn} ${styles.navBtnNext}`}
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <MdArrowForward />
        </Button>
      </div>
    </section>
  );
}
