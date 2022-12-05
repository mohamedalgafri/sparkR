// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Rectangle354 from "../../images/Rectangle 354.png";



export default function SwiperImgNews () {
  return (
    
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      breakpoints= {{

      }}
    >
      <SwiperSlide>
      <img  src={Rectangle354} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Rectangle354} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Rectangle354} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Rectangle354} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Rectangle354} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Rectangle354} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};