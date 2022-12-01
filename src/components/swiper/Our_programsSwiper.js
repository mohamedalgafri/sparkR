// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Component_62_1  from '../../images/Component 62 – 1.png'



export default function Our_programsSwiper  () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      breakpoints= {{
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1504: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
      <img  src={Component_62_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Component_62_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Component_62_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Component_62_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Component_62_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
      <img  src={Component_62_1} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};