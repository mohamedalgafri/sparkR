import React from 'react'

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
        <div class="imghederc">
          <img  class="imgheader" src={bgred1} alt="" />
          <img  class="imgheadermob  imgclimate" src={bgmobred} alt="" />
        </div>

        <div class="allcontantheder">
          <div class="contantheder container right">
            <div class="rightsideheder rred ">
              <div class="linkhed coored">
                <a href="/"> الرئيسية / </a>
                <p>البرامج / </p>
                <p class="coloryl "> &nbsp; برنامج القيادات والمواطنة </p>
              </div>

              <h1>برنامج القيادات الشابة والمواطنة الإيجابية</h1>
              <p class="textcontanthed">
                تركز رؤية برنامج القيادات الشابة والمواطنة الإيجابية حول " شباب
                ويافعين قادة ومواطنون فاعلون ومسؤولون قادرون على إدراك الواقع
                الذي يعيشون فيه على المستوى المحلي والعالمي وإحداث التغيير من
                أجل تحقيق تنمية مستدامة في مجتمعاتهم.
              </p>
              <div class="btnall">
                <p> شاهد فيديو</p>
                <div class="arrowbtn">
                  <img  src={Polygon_3} alt="" />
                  {/* <!-- <i class="bx bx-left-arrow-alt movearr"></i> --> */}
                </div>
              </div>
            </div>
            <div class="leftsideheder left">
              <img  src={Basketball_camp} alt="" />
            </div>
          </div>
        </div>
      </header>

      <section class="hedtittes ">
        <dev class="hedtittestimg container">
          <div class="rightsidehead right">
            <div class="titletexthed  abouttit">
              <p>برنامج القيادات والمواطنة </p>
              <div class="linetit linetitblow"></div>
            </div>
            <h1 class="redtext"> مبادرات شبابية</h1>

            <div class="texthedtittestimg">
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

          <div class="leftsidehead left">
            <img  src={Rectangle236} alt="" />
          </div>
        </dev>
      </section>

      <section class="sledersectionred container bottom swiperleader">
        <h1 class="redtext">مبادرات شـبابـية</h1>

        {/* <!-- Swiper --> */}
        <LeadersSwiper/>
      </section>


      <section class="hedtittes">
      <dev class="hedtittestimg hedtittestimgrev container">
        <div class="rightsidehead left">
          <div class="titletexthed  abouttit">
              <p>برنامج القيادات والمواطنة </p>
              <div class="linetit linetitblow"></div>
            </div>
            <h1 class="redtext"> مبادرات شبابية</h1>

            <div class="texthedtittestimg">
              <p>
                  مبادرات ابداعية شبابية تتبني افكار شبابية عصرية لمواجهة التحديات التي تمثل معيقات تحد من فعالية دور الشباب وتعزيز مشاركته المدنية في احداث التغيير الايجابي والتنمية المنشودة داخل المجتمع الفلسطيني على مختلف الاصعدة السياسية والاقتصادية 
                  والاجتماعية
                  <br/>
                  <br/>
                  
                  يتوصل الشباب والشابات إلى حلول من خلال مبادرات تفيد المجتمع بأكمله. يقوم أصحاب المبادرات المجتمعية بتنفيذ مبادراتهم تحت إشراف لجنة مراقبة وتقييم
              </p>
            </div>


      </div>


        <div class="leftsidehead right">
          <img  src={Rectangle236} alt=""/>
      </div>
      </dev>
    </section>

    <section class="sledersectionred container bottom swiperleader">
        <h1 class="redtext">مبادرات شـبابـية</h1>

        {/* <!-- Swiper --> */}
        <LeadersSwiper/>
      </section>



    <section class="competitions competitionsred container bottom">
        <div class="rightsideCompetitions">
     
          {/* <!-- <img class="shappp" src="images/shappp.svg" alt=""> --> */}
          <img  class="shappp" src={minidil3} alt=""/>
            <div class="leftsideabout">

                <div class="imgleftus">
                  <div class="imgtopus">
                    <img  class="imgpp1" src={Rectangle21} alt="" />
                    <img  class="imgpp2" src={Rectangle143} alt="" />
                  </div>
                  <div class="imgtopus">
                    <img  class="imgpp3" src={Rectangle20} alt="" />
                    <img  class="imgpp4" src={Rectangle22} alt="" />
                  </div>
                </div>
              </div>

        </div>
        <div class="leftsideCompetitions">
            <div class="titletexthed abouttit">
                <p> برنامج القيادات والمواطنة</p>
                <div class="linetit"></div>
              </div>
              <h1> مسارات ووطن </h1>


              <p>
                المسارات أنشطة مهمة لما لها من دور في تعميق وتقوية ارتباط الشباب بالأرض. نهدف من قيام الشباب بمسارات في أماكن متعددة في غز ة، إلى تسليط الضوء على عشرات المواقع البيئية والتاريخية، والأثرية، والدينية في غزة.  وترسيخ المكان الفلسطيني في عقل، وقلب الشباب، إضافة إلى تعزيز روح الصداقة والأخوة والتفاعل مع آخرين من أصحاب الاهتمامات المشتركة، مما يغني خبرات الشباب في هذا المجال
              </p>
        </div>
    </section>

    <section class="voices container voiceswiper">

<div class="titletexthed abouttit top ">
    <p> برنامج القيادات والمواطنة</p>
    <div class="linetit"></div>
  </div>
  <h1 class="top">أصوات الشباب</h1>

  <p class="top">سبارك عبارة عن ومضات صغيرة من الإيجابية. حفز الآخرين من خلال مشاركة ما فعلته أو رأيته أو سمعته أو قرأته. أو ببساطة عبر عن فكرة جميلةشارك الشباب في جميع أنحاء العالم وساهم في تشكيل عالم أكثر شمولاً وسلمًا واستدامة
  </p>


    <VoiceSwiper/>


</section>


<section class="ShareVotes">
     <div class="ShareVote container">

        <div class="rightShareVote right">
            <img  src={Group1466} alt=""/>
        </div>

        <div class="leftShareVote left">

            <div class="titletexthed abouttit">
                <p> برنامج القيادات والمواطنة</p>
                <div class="linetit"></div>
              </div>
              <h1>شاركنا بصوتك </h1>

              <form class="formShareVote">

                <input type="text" placeholder="الاسم"/>
                <input type="email" placeholder="البريد الالكتروني"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="اكتب صوتك"></textarea>
                
                <div class="btnNews">
                  <button class="btnall">
                    <p>ارسال صوتك</p>
                    <div class="arrowbtn">
                      <i class="bx bx-left-arrow-alt movearr"></i>
                    </div>
                  </button>
                </div>

              </form>

        </div>

    </div>
    </section>


    </>
  )
}

export default Leaders
