import React from "react";

import bgred1 from "../images/bgred1.svg";
import bgmobred from "../images/bgmobred.png";
import Polygon_3 from "../images/Polygon 3.svg";
import Basketball_camp from "../images/Basketball_camp.svg";
import minidil3 from "../images/minidil-3.svg";
import Rectangle236 from "../images/Rectangle 236.png";
import Rectangle21 from "../images/Rectangle 21.png";
import Rectangle143 from "../images/Rectangle 143.svg";
import Rectangle20 from "../images/Rectangle 20.png";
import Rectangle22 from "../images/Rectangle 22.png";
import Group1466 from "../images/Group 1466.svg";

import LeadersSwiper from "../components/swiper/LeadersSwiper";
import VoiceSwiper from "../components/swiper/VoiceSwiper";

const Leaders = () => {
  return (
    <>
      <header>
        <div className="imghederc">
          <img className="imgheader" src={bgred1} alt="" />
          <img className="imgheadermob  imgclimate" src={bgmobred} alt="" />
        </div>

        <div className="allcontantheder">
          <div className="contantheder container right" data-aos="fade-up"
              data-aos-anchor-placement="top-bottom">
            <div className="rightsideheder rred ">
              <div className="linkhed coored">
                <a href="/"> الرئيسية / </a>
                <p>البرامج / </p>
                <p className="coloryl "> &nbsp; برنامج القيادات والمواطنة </p>
              </div>

              <h1>برنامج القيادات الشابة والمواطنة الإيجابية</h1>
              <p className="textcontanthed">
                تركز رؤية برنامج القيادات الشابة والمواطنة الإيجابية حول " شباب
                ويافعين قادة ومواطنون فاعلون ومسؤولون قادرون على إدراك الواقع
                الذي يعيشون فيه على المستوى المحلي والعالمي وإحداث التغيير من
                أجل تحقيق تنمية مستدامة في مجتمعاتهم.
              </p>
              <div className="btnall">
                <p> شاهد فيديو</p>
                <div className="arrowbtn">
                  <img src={Polygon_3} alt="" />
                  {/* <!-- <i className="bx bx-left-arrow-alt movearr"></i> --> */}
                </div>
              </div>
            </div>
            <div className="leftsideheder left" data-aos="zoom-in-up"
              data-aos-duration="800">
              <img src={Basketball_camp} alt="" />
            </div>
          </div>
        </div>
      </header>

      <section className="hedtittes " data-aos="fade-up">
        <dev className="hedtittestimg container">
          <div className="rightsidehead right">
            <div className="titletexthed  abouttit">
              <p>برنامج القيادات والمواطنة </p>
              <div className="linetit linetitblow"></div>
            </div>
            <h1 className="redtext"> مبادرات شبابية</h1>

            <div className="texthedtittestimg">
              <p>
                مبادرات ابداعية شبابية تتبني افكار شبابية عصرية لمواجهة التحديات
                التي تمثل معيقات تحد من فعالية دور الشباب وتعزيز مشاركته المدنية
                في احداث التغيير الايجابي والتنمية المنشودة داخل المجتمع
                الفلسطيني على مختلف الاصعدة السياسية والاقتصادية والاجتماعية
                <br />
                <br />
                يتوصل الشباب والشابات إلى حلول من خلال مبادرات تفيد المجتمع
                بأكمله. يقوم أصحاب المبادرات المجتمعية بتنفيذ مبادراتهم تحت
                إشراف لجنة مراقبة وتقييم
              </p>
            </div>
          </div>

          <div className="leftsidehead left">
            <img src={Rectangle236} alt="" />
          </div>
        </dev>
      </section>

      <section className="sledersectionred container bottom swiperleader" data-aos="fade-up">
        <h1 className="redtext">مبادرات شـبابـية</h1>

        {/* <!-- Swiper --> */}
        <LeadersSwiper />
      </section>

      <section className="hedtittes" data-aos="fade-up">
        <dev className="hedtittestimg hedtittestimgrev container">
          <div className="rightsidehead left">
            <div className="titletexthed  abouttit">
              <p>برنامج القيادات والمواطنة </p>
              <div className="linetit linetitblow"></div>
            </div>
            <h1 className="redtext"> مبادرات شبابية</h1>

            <div className="texthedtittestimg">
              <p>
                مبادرات ابداعية شبابية تتبني افكار شبابية عصرية لمواجهة التحديات
                التي تمثل معيقات تحد من فعالية دور الشباب وتعزيز مشاركته المدنية
                في احداث التغيير الايجابي والتنمية المنشودة داخل المجتمع
                الفلسطيني على مختلف الاصعدة السياسية والاقتصادية والاجتماعية
                <br />
                <br />
                يتوصل الشباب والشابات إلى حلول من خلال مبادرات تفيد المجتمع
                بأكمله. يقوم أصحاب المبادرات المجتمعية بتنفيذ مبادراتهم تحت
                إشراف لجنة مراقبة وتقييم
              </p>
            </div>
          </div>

          <div className="leftsidehead right">
            <img src={Rectangle236} alt="" />
          </div>
        </dev>
      </section>

      <section className="sledersectionred container bottom swiperleader" data-aos="fade-up">
        <h1 className="redtext">مبادرات شـبابـية</h1>

        {/* <!-- Swiper --> */}
        <LeadersSwiper />
      </section>

      <section className="competitions competitionsred container bottom" data-aos="fade-up">
        <div className="rightsideCompetitions">
          {/* <!-- <img className="shappp" src="images/shappp.svg" alt=""> --> */}
          <img className="shappp" src={minidil3} alt="" />
          <div className="leftsideabout">
            <div className="imgleftus">
              <div className="imgtopus">
                <img className="imgpp1" src={Rectangle21} alt="" />
                <img className="imgpp2" src={Rectangle143} alt="" />
              </div>
              <div className="imgtopus">
                <img className="imgpp3" src={Rectangle20} alt="" />
                <img className="imgpp4" src={Rectangle22} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="leftsideCompetitions">
          <div className="titletexthed abouttit">
            <p> برنامج القيادات والمواطنة</p>
            <div className="linetit"></div>
          </div>
          <h1> مسارات ووطن </h1>

          <p>
            المسارات أنشطة مهمة لما لها من دور في تعميق وتقوية ارتباط الشباب
            بالأرض. نهدف من قيام الشباب بمسارات في أماكن متعددة في غز ة، إلى
            تسليط الضوء على عشرات المواقع البيئية والتاريخية، والأثرية، والدينية
            في غزة. وترسيخ المكان الفلسطيني في عقل، وقلب الشباب، إضافة إلى تعزيز
            روح الصداقة والأخوة والتفاعل مع آخرين من أصحاب الاهتمامات المشتركة،
            مما يغني خبرات الشباب في هذا المجال
          </p>
        </div>
      </section>

      <section className="voices container voiceswiper" data-aos="fade-up">
        <div className="titletexthed abouttit top ">
          <p> برنامج القيادات والمواطنة</p>
          <div className="linetit"></div>
        </div>
        <h1 className="top">أصوات الشباب</h1>

        <p className="top">
          سبارك عبارة عن ومضات صغيرة من الإيجابية. حفز الآخرين من خلال مشاركة ما
          فعلته أو رأيته أو سمعته أو قرأته. أو ببساطة عبر عن فكرة جميلةشارك
          الشباب في جميع أنحاء العالم وساهم في تشكيل عالم أكثر شمولاً وسلمًا
          واستدامة
        </p>

        <VoiceSwiper />
      </section>

      <section className="ShareVotes" data-aos="fade-up">
        <div className="ShareVote container">
          <div className="rightShareVote right">
            <img src={Group1466} alt="" />
          </div>

          <div className="leftShareVote left">
            <div className="titletexthed abouttit">
              <p> برنامج القيادات والمواطنة</p>
              <div className="linetit"></div>
            </div>
            <h1>شاركنا بصوتك </h1>

            <form className="formShareVote">
              <input type="text" placeholder="الاسم" />
              <input type="email" placeholder="البريد الالكتروني" />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="اكتب صوتك"
              ></textarea>

              <div className="btnNews">
                <button className="btnall">
                  <p>ارسال صوتك</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Leaders;
