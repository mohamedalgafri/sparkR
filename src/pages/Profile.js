import React from "react";

import bgggg from "../images/bgggg.png"
import bgaboutmob from "../images/bgaboutmob.png"
import Group2822 from "../images/Group 2822.png"

const Profile = () => {

  

  return (
    <>
      <header>
        <div class="imghederc imghedercabout" data-aos="fade-up">
          <img class="imgheader imgnews imgprofile" src={bgggg} alt="" />
          <img class="imgheadermob imgprof" src={bgaboutmob} alt="" />
        </div>

        <div class="allcontantheder allcontanthederabout">
          <div class="contanthede container">
            <div class="titletextabout" data-aos="fade-up">
              <h1 class="mb-4">الملف الشخصي </h1>
            </div>

            <div class="tappabout" data-aos="fade-up">
              <div class="aboutlink">
                <a href="index.html">الرئسية</a>
                <div class="arrowbtn hedarr">
                  <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
                <a>الملف الشخصي</a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="bodyprof container">
        <div class="rightprof" data-aos="fade-up">
          <img src={Group2822} alt="" />
          <h4>عبدالله الاستاذ</h4>
          <p>اللقب الخاص</p>

          <div class="btnsprof">
            <a
              href=""
              class="btnprof"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              تعديل بيانات الحساب
            </a>
            <a
              href=""
              class="btnprof btnprof2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              تحديث كلمة المرور
            </a>
          </div>
        </div>
        <div class="liftprof" data-aos="fade-up">
          <h1>البيانات الشخصية</h1>
          <form action="">
            <input type="text" placeholder="اسم المستخدم" />
            <input type="email" placeholder="البريد الالكتروني " />
            <div class="inputproff">
              <input type="tel" placeholder="هاتف" />
              <input type="number" placeholder="العمر" />
            </div>
            <input type="text" placeholder="العنوان" />
          </form>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        class="modal modalprof fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="liftprof llmodel">
                <h3>تعديل البيانات الشخصية</h3>
                <form action="">
                  <input type="text" placeholder="اسم المستخدم" />
                  <input type="email" placeholder="البريد الالكتروني " />
                  <div class="inputproff">
                    <input type="tel" placeholder="هاتف" />
                    <input type="number" placeholder="العمر" />
                  </div>
                  <input type="text" placeholder="العنوان" />
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
                    حفظ التفيرات
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        class="modal modalprof fade "
        id="exampleModal2"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="liftprof llmodel">
                <h3>تحديث كلمة المرور</h3>
                <form action="">
                  <input type="text" placeholder="كلمة المرور الحالية" />
                  <input type="text" placeholder="كلمة المرور الجديدة " />
                  <input type="text" placeholder="إعادة كلمة المرور الجديدة " />
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
                    حفظ التفيرات
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

export default Profile;
