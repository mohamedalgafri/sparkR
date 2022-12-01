// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Ellipse  from '../../images/Ellipse 115.png'



export default function CommentsSwiper  ()  {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={ 10}
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
            slidesPerView: 2,
            spaceBetween: 50,
          },
      }}
    >
      <SwiperSlide>
      <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>

            <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>

            <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>

            <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>

            <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>

            <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>

            <div className="cardcomments">
                <div className="titlecardimg">
                    <div className="imgcard">
                        <img  src={Ellipse} alt=""/>
                        <div className="namecardcom">
                            <p className="namecard">عبدلله الاستاذ</p>
                            <p className="timimgcard">منذ 10 دقائق</p>
                        </div>
                    </div>
                    <div className="likecomment">
                        <p>2</p>
                        <i class='bx bx-like' ></i>
                    </div>
                </div>
    
                <div className="bodycardcomments">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019</p>
                </div>
            </div>
      </SwiperSlide>
    </Swiper>
  );
};