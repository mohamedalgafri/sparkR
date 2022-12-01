// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Rectangle33 from "../../images/Rectangle 33.png";
import shadown from "../../images/shadown.png";







export default function NewsMobSwiper ()  {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        650: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
    >
      <SwiperSlide>
        <div className="cardNews ">
          <img  className="cardn1" src={Rectangle33} alt="" />
          <img  className="shadown" src={shadown} alt="" />
          <p>اتفاقية تعاون بين القطان و تكنوبارك فلسطين</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cardNews ">
          <img  className="cardn1" src={Rectangle33} alt="" />
          <img  className="shadown" src={shadown} alt="" />
          <p>اتفاقية تعاون بين القطان و تكنوبارك فلسطين</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cardNews ">
          <img  className="cardn1" src={Rectangle33} alt="" />
          <img  className="shadown" src={shadown} alt="" />
          <p>اتفاقية تعاون بين القطان و تكنوبارك فلسطين</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cardNews ">
          <img  className="cardn1" src={Rectangle33} alt="" />
          <img  className="shadown" src={shadown} alt="" />
          <p>اتفاقية تعاون بين القطان و تكنوبارك فلسطين</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cardNews ">
          <img  className="cardn1" src={Rectangle33} alt="" />
          <img  className="shadown" src={shadown} alt="" />
          <p>اتفاقية تعاون بين القطان و تكنوبارك فلسطين</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="cardNews ">
          <img  className="cardn1" src={Rectangle33} alt="" />
          <img  className="shadown" src={shadown} alt="" />
          <p>اتفاقية تعاون بين القطان و تكنوبارك فلسطين</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
