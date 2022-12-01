// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import shb1  from '../../images/shb1.svg'
import shb2  from '../../images/shb2.svg'
import shb3  from '../../images/shb3.svg'
import shb4  from '../../images/shb4.svg'
import shb5  from '../../images/shb5.svg'
import shb6  from '../../images/shb6.svg'
import databroc  from '../../images/vuesax-broken-data.svg'
import programmingarr  from '../../images/vuesax-broken-programming-arrows.svg'
import recorder  from '../../images/vuesax-broken-monitor-recorder.svg'
import brokendara  from '../../images/vuesax-broken-data.svg'
import outlineff  from '../../images/vuesax-outline-man.svg'
import Group540  from '../../images/Group 540.svg'
import Group541  from '../../images/Group 541.svg'


export default function SparknuMobSwiper () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints= {{
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
            <div className="cardnums cardnums1">
                <div className="titnumCard">
                  <h1>30</h1>
                  <h4>مشروع</h4>
                  <img  src={databroc} alt="" />
                </div>
                <p>تم التنفيذ تحت إشراف Spark Digital Hub</p>

                <img  src={shb1} alt="" />
            </div>


      </SwiperSlide>
      <SwiperSlide>
            <div className="cardnums cardnums2">
                <div className="titnumCard">
                  <h1>25</h1>
                  <h4>شراكة</h4>
                  <img
                    src={programmingarr}
                    alt=""
                  />
                </div>
                <p>شراكات مع مختلف الجامعات والمنظمات والقطاع الخاص</p>
                <img  src={shb2} alt="" />
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardnums cardnums3">
                <div className="titnumCard">
                  <h1>30</h1>
                  <h4>برنامج</h4>
                  <img  src={recorder} alt="" />
                </div>
                <p>تم التنفيذ تحت إشراف Spark Digital Hub</p>
                <img  src={shb3} alt="" />
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardnums cardnums1">
                <div className="titnumCard">
                  <h1>30</h1>
                  <h4>مشروع</h4>
                  <img  src={brokendara} alt="" />
                </div>
                <p>تم التنفيذ تحت إشراف Spark Digital Hub</p>

                <img  src={shb1} alt="" />
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardnums cardnums4">
                <div className="titnumCard">
                  <h1>100</h1>
                  <h4>الشباب</h4>
                  <img  src={outlineff} alt="" />
                </div>
                <p>استفادوا نوادي سبارك المختلفة</p>

                <img  src={shb4} alt="" />
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardnums cardnums5">
                <div className="titnumCard">
                  <h1>750</h1>
                  <h4>شاب وصبية</h4>
                  <img  src={Group540} alt="" />
                </div>
                <p>استفادوا من خدمات ومشاريع Spark Makerspace</p>
                <img  src={shb5} alt="" />
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardnums cardnums6">
                <div className="titnumCard">
                  <h1>300</h1>
                  <h4>شاب وصبية</h4>
                  <img  src={Group541} alt="" />
                </div>
                <p>تتدربوا على موضوعات محو الأمية الرقمية</p>
                <img  src={shb6} alt="" />
              </div>
      </SwiperSlide>
    </Swiper>
  );
};