// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import svgexport_7 from '../../images/svgexport-7.svg'
import svgexport_6 from '../../images/svgexport-6 (23).svg'
import {Link} from "react-router-dom";

export default function ProgramsSwiper  () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints= {{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      <SwiperSlide>
              <div className="cardprog cardprog1">
                <div className="titlecardprog">
                  <img  src={svgexport_7} alt="" />
                 <h4>البيئة والمناخ</h4>
                </div>
                <p>
                  تركز رؤية برنامج القيادات الشابة والمواطنة الإيجابية حول "
                  شباب ويافعين قادة ومواطنون فاعلون ومسؤولون قادرون
                </p>

                <Link href="/programs/climate" className="btnall">
                  <p>عرض المزيد</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </Link>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardprog cardprog2">
                <div className="titlecardprog">
                  <img  src={svgexport_6} alt="" />
                  <h4>القيادات والمواطنة</h4>
                </div>
                <p>
                  برنامج تفاعلي يركز على الدمج بين العلوم والتكنولوجيا والعمل مع
                  الناس، لتشكيل العالم الأفضل من خلال الجمع بين
                </p>

                <Link href='/programs/leaders' className="btnall">
                  <p>عرض المزيد</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </Link>
              </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardprog cardprog3">
                <div className="titlecardprog">
                  <img  src={svgexport_7} alt="" />
                  <h4>التحول الرقمي</h4>
                </div>
                <p>
                  يدعم برنامج البيئة , المناخ الإجراءات التي تمكّن الشباب من
                  ترجمة برامج تغير المناخ إلى سياسات فعالة لها تأثير قابل
                </p>

                <Link href="/programs/digital" className="btnall">
                  <p>عرض المزيد</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </Link>
              </div>
      </SwiperSlide>
    </Swiper>
  );
};