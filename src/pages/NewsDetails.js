import React from 'react'

import Group3333 from "../images/Group 3333.svg";
import imgnews from "../images/imgnews.png";
import bgaboutmob from "../images/bgaboutmob.png";
import Rectangle354 from "../images/Rectangle 354.png";
import CommentsSwiper from "../components/swiper/CommentsSwiper";
import SwiperImgNews from "../components/swiper/SwiperImgNews";
import LeadersSwiper from "../components/swiper/LeadersSwiper";
import { Link } from 'react-router-dom';

const NewsDetails = () => {

    let comments = true;

  return (
    <>
      <header>
        <div class="imghederc imghedercabout">
          <img class="imgheader imgnews" src={imgnews} alt="" />
          <img class="imgheadermob bgmobred bgimgnews" src={bgaboutmob} alt="" />
        </div>

        <div class="allcontantheder allcontanthederabout top">
          <div class="contanthede container">
            <div class="titletextabout top" data-aos="fade-down">
              <h1>الاخـــبار </h1>
              <p>كل ما هو حقيقي يجب تخيله في يوم من الأيام</p>
            </div>

            <div class="tappabout ">
              <div class="aboutlink">
                <a href="/">الرئسية</a>
                <div class="arrowbtn hedarr">
                  <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
                <Link to="/mediaCenter" > المركز الاعلامي</Link>
                <div class="arrowbtn hedarr">
                  <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
                <a>الاخبار</a>
              </div>
            </div>

            <div class="bodyheadabout" data-aos="fade-up">
              {/* <!-- Swiper --> */}
                <SwiperImgNews/>

              <div class="shaersotialicon">
                <p>شارك</p>
                <a href="">
                  <div class="iconsotail">
                    <i class="bx bxl-facebook"></i>
                  </div>
                </a>

                <a href="">
                  <div class="iconsotail">
                    <i class="bx bxl-twitter"></i>
                  </div>
                </a>

                <a href="">
                  <div class="iconsotail">
                    <i class="bx bxl-instagram"></i>
                  </div>
                </a>

                <a href="">
                  <div class="iconsotail">
                    <i class="bx bxl-linkedin"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="bodyabout container bottom" data-aos="fade-up">
        <div class="allcardaboutt">
          <p>
            هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم
            وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت
            في يناير 2019. تعزز Spark الإبداع والابتكار خلال تدخلاتها لتوليد
            القيم الأساسية في مجتمعنا، ليكون مجتمعًا مزدهرًا وناجحًا يستطيع فيه
            جميع الأشخاص الوصول إلى الأدوات المناسبة لإطلاق أفكار جديدة وخلق فرص
            عمل مبتكرة؛ تؤمن سبارك بالدور الحيوي للإبداع والابتكار كجزء أساسي في
            أي حلول مقدمة للشباب والمراهقين الفلسطينيين وأولئك الذين يبحثون عن
            فرصة لتطوير أنفسهم
            <br />
            <br />
          </p>

          <p>
            هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم
            وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت
            في يناير 2019. تعزز Spark الإبداع والابتكار خلال تدخلاتها لتوليد
            القيم الأساسية في مجتمعنا، ليكون مجتمعًا مزدهرًا وناجحًا يستطيع فيه
            جميع الأشخاص الوصول إلى الأدوات المناسبة لإطلاق أفكار جديدة وخلق فرص
            عمل مبتكرة؛ تؤمن سبارك بالدور الحيوي للإبداع والابتكار كجزء أساسي في
            أي حلول مقدمة للشباب والمراهقين الفلسطينيين وأولئك الذين يبحثون عن
            فرصة لتطوير أنفسهم
          </p>
          <br />

          <p>
            هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم
            وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت
            في يناير 2019. تعزز Spark الإبداع والابتكار خلال تدخلاتها لتوليد
            القيم الأساسية في مجتمعنا، ليكون مجتمعًا مزدهرًا وناجحًا يستطيع فيه
            جميع الأشخاص الوصول إلى الأدوات المناسبة لإطلاق أفكار جديدة وخلق فرص
            عمل مبتكرة؛ تؤمن سبارك بالدور الحيوي للإبداع والابتكار كجزء أساسي في
            أي حلول مقدمة للشباب والمراهقين الفلسطينيين وأولئك الذين يبحثون عن
            فرصة لتطوير أنفسهم
          </p>
        </div>
    </section>


    {comments ? (
                <section class="comments container" data-aos="fade-up">
                <div class="titcomments">
                    <p>التعليقات (1)</p>
                      
                    <div class="btnall commentsbtn">
                        <p>إضافة تعليق</p>
                        <div class="arrowbtn">
                            <i class='bx bx-plus' ></i>
                        </div>
                    </div>
                    
                </div>
    
                {/* <!-- Swiper --> */}
                <CommentsSwiper/>
            </section>
        ) :
        
        (
            <section class="comments container" data-aos="fade-up">
            <div class="titcomments">
              <p>التعليقات (0)</p>
            </div>
            <hr />
      
            {/* <!-- //////////////////////////////////////No Comments////////////////////////////////////////////// --> */}
      
            <div class="noComments">
              <div class="rightnoComments">
                <img src={Group3333} alt="" />
                <p>لا يوجد تعليقات حتى الان</p>
                <p class="bluetext">كن أول معلق</p>
              </div>
      
              <div class="leftnoComments">
      
                  <h3 class="bluetext">اترك تعليقا</h3>
                  <p>رأيك مهم جدا بالنسبة لنا. نريد أن نقدم لك باستمرار أفضل أنشطة ومبادرات</p>
      
                  <Link href='/signIn' class="btnall btnallwi btnallblue ">
                      <p>تسجيل دخول</p>
                      <div class="arrowbtn">
                        <i class="bx bx-left-arrow-alt movearr"></i>
                      </div>
                  </Link>
              </div>
      
            </div>
    
          </section>
        )}


<section class="sledersectionred container swiperleader" data-aos="fade-up">

<h1 class="redtext">مبادرات أخرى</h1>

            {/* <!-- Swiper --> */}

  <LeadersSwiper/>


</section>


    </>
  )
}

export default NewsDetails
