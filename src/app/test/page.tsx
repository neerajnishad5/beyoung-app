"use client"; 
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
 import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Image } from '@nextui-org/react';

// Example data with image links
const images = [
  { link: 'https://beyoung.in/api/catalog/new-bb/mobile/banner/bhuvan-banner-desktop-view124357.jpg' },
  { link: 'https://beyoung.in/api/catalog/new-bb/desktop/banner/cargo-banner-desktop-view.jpg' }
];
 const Test = () => {
  return (
    <>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image className='w-full h-full' src={image.link} alt={`Slide ${index + 1}`}  />
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default Test;
