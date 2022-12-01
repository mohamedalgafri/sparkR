// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Component_62_1  from '../../images/Component 62 – 1.png'



export default function VoiceSwiper () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints= {{
        650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          990: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
      }}
    >
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardvoice">
        <div className="titlecardvoice">
            <p>عبدالله الاستاذ</p>
            <p>25/12/2023</p>
        </div>
        <hr/>
        <div className="bodycardvoise">
            <p>هيا نفعل ما بوسعنا <br/>
                لا تفكر في ما يعتقده الآخرون عنك <br/>
                 من فضلك فقط حافظ على تركيزك على أهدافك</p>
        </div>

        <div className="shaersotial">
            <p>شارك</p>
            <a href=""><i class='bx bxl-twitter'></i></a>
           <a href=""><i class='bx bxl-linkedin'></i></a> 
           <a href=""><i class='bx bxl-facebook'></i></a> 
           <a href=""><i class='bx bxl-whatsapp'></i></a> 
        </div>
    </div>
      </SwiperSlide>
    </Swiper>
  );
};