import React from "react";

import imgnews from "../images/imgnews.png";
import bgaboutmob from "../images/bgaboutmob.png";
import Rectangle354 from "../images/Rectangle 354.png";
import CommentsSwiper from "../components/swiper/CommentsSwiper";
import LeadersSwiper from "../components/swiper/LeadersSwiper";
import Group3333 from "../images/Group 3333.svg";
import { Link } from "react-router-dom";

const Initiatives = () => {
  let comments = true;

  return (
    <>
      <header>
        <div class="imghederc imghedercabout">
          <img class="imgheader imgnews" src={imgnews} alt="" />
          <img class="imgheadermob bgmobred" src={bgaboutmob} alt="" />
        </div>

        <div class="allcontantheder allcontanthederabout">
          <div class="contanthede container">
            <div class="titletextabout">
              <h1>المبادرات </h1>
              <p>كل ما هو حقيقي يجب تخيله في يوم من الأيام</p>
            </div>

            <div class="tappabout">
              <div class="aboutlink">
                <a href="/">الرئسية</a>
                <div class="arrowbtn hedarr">
                  <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
                <Link to="/leaders">
                  {" "}
                  برنامج القيادات والمواطنة{" "}
                </Link>
                <div class="arrowbtn hedarr">
                  <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
                <a>المبادرات</a>
              </div>
            </div>

            <div class="bodyheadabout bodyheadaboutiii">
              <div class="rightbodyheadaboutiii">
                <p>المبادرات</p>
                <h1>يلا يا شباب</h1>
                <p class="textbodyrighti">
                  {" "}
                  مبادرات ابداعية شبابية تتبني افكار شبابية عصرية لمواجهة
                  التحديات التي تمثل معيقات تحد من فعالية دور الشباب وتعزيز
                  مشاركته المدنية في احداث التغيير الايجابي والتنمية هي منظمة
                  تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم
                  وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018
                  وسجلت في يناير 2019
                </p>
              </div>

              <div class="leftbodyheadaboutiii">
                <img src={Rectangle354} alt="" />

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
        </div>
      </header>

      <section class="bodyabout container">
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
        <section class="comments container">
          <div class="titcomments">
            <p>التعليقات (1)</p>

            <div class="btnall commentsbtn" data-bs-toggle="modal"
              data-bs-target="#exampleModalCommit">
              <p>إضافة تعليق</p>
              <div class="arrowbtn">
                <i class="bx bx-plus"></i>
              </div>
            </div>
          </div>

          {/* <!-- Swiper --> */}
          <CommentsSwiper />
        </section>
      ) : (
        <section class="comments container">
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
              <p>
                رأيك مهم جدا بالنسبة لنا. نريد أن نقدم لك باستمرار أفضل أنشطة
                ومبادرات
              </p>

              <Link href="/signIn" class="btnall btnallwi btnallblue ">
                <p>تسجيل دخول</p>
                <div class="arrowbtn">
                  <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      <section class="sledersectionred container swiperleader">
        <h1 class="redtext">مبادرات أخرى</h1>

        {/* <!-- Swiper --> */}

        <LeadersSwiper />
      </section>




                      {/* <!-- Modal --> */}
      <div
        class="modal modalprof fade "
        id="exampleModalCommit"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="liftprof llmodel">
              <h3>أضف تعليق</h3>
                <form action="">
                <textarea rows="10" cols="50"  className="textareaCommit" placeholder="اضف تعليقك"> </textarea>
                </form>

                <div class="btnsmoell">
                  <button
                    type="button"
                    class="btnprof btnmodel btnmodel2"
                    data-bs-dismiss="modal"
                  >
                    إلغاء
                  </button>
                  <button type="button" class="btnprof btnmodel ">
                  ارسال
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






    </>
  );
};

export default Initiatives;
