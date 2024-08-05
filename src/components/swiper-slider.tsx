"use client";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/scrollbar";
import { Image } from "@nextui-org/react";
import SwiperCore from "swiper";
import { useState } from "react";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaAngleRightSolid } from "react-icons/lia";
// Import only required modules
SwiperCore.use([Navigation, Pagination, A11y]);

// import required modules
import { Autoplay } from "swiper/modules";

const SliderSwiper = ({
  images,
  slidesPerView,
  isLoop,
  className,
  spaceBetween,
  imageStyles,
  showNavigation, // Prop to determine if navigation buttons should be shown
  autoplay,
}) => {
  const [swiper, setSwiper] = useState(null);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };
  return (
    <div className={`relative swiper-slider ${className}`}>
      {showNavigation && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-8  bg-white shadow-md flex items-center justify-center z-10"
          >
            <LiaAngleLeftSolid />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-8 h-8  bg-white shadow-md flex items-center justify-center z-10"
          >
            <LiaAngleRightSolid />
          </button>
        </>
      )}
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={false} // Disable default navigation to use custom buttons
        loop={isLoop || false}
        className="mySwiper"
        // centeredSlides={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={setSwiper}
        onSlideChange={() => console.log("slide change")}
        autoplay={autoplay}
        speed={7000}
        modules={[Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className={`${imageStyles}`}
              src={image.link}
              alt={`Slide ${index + 1}`}
              style={{
                borderRadius: slidesPerView > 2 ? "11px" : "",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSwiper;