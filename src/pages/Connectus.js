import React from 'react'

import imgnews from '../images/imgnews.png'
import bgaboutmob from '../images/bgaboutmob.png'
import g1 from '../images/g1.svg'
import g2 from '../images/g2.svg'
import g3 from '../images/g3.svg'
import g4 from '../images/g4.svg'

const Connectus = () => {
  return (
    <>
    <header>
<div class="imghederc imghedercabout">
    <img class="imgheader imgnews" src={imgnews} alt=""/>
    <img class="imgheadermob bgmobred" src={bgaboutmob} alt=""/>
</div>

<div class="allcontantheder allcontanthederabout bottom">
    <div class="contanthede container">
        <div class="titletextabout top">
            <h1>تواصل معنا </h1>
            <p >كل ما هو حقيقي يجب تخيله في يوم من الأيام</p>
        </div>

        <div class="tappabout">
            <div class="aboutlink">
                <a href="index.html">الرئسية</a>
                <div class="arrowbtn hedarr">
                    <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
                  <a> تواصل معنا</a>

            </div>



        </div>

        <div class="bodyheadabout">


            <div class="swiper-slide slidimghead">
                <div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=&amp;height=&amp;hl=en&amp;q=سبارك غزة&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div><style></style></div>
              </div>

        </div>
      
    </div>
</div>


</header>


<section class="bodycont">
<dev class="bodycontact container">
<div class="rightcontact right">

  <h2>نموذج  التواصل</h2>
  <form action="">
      <div class="inputcontact">
          <input type="text" placeholder="الاسم"/>
          <input type="text" placeholder="اللقب الخاص بك"/>
      </div>

      <div class="inputcontact">
          <input type="email" placeholder="البريد الالكتروني"/>
          <input type="number" placeholder=" رقم الهاتف"/>
      </div>

      <textarea name="" id="" cols="30" rows="10" placeholder=" رسالتك ...."></textarea>

      <div class="btnall">
          <p>أرسل رسالة</p>
          <div class="arrowbtn">
            <i class="bx bx-left-arrow-alt movearr"></i>
          </div>
        </div>

  </form>

</div>
<div class="leftcontact left">
  
  <h1> <span>اتصل</span> بنا</h1>
  <p>يمكنك إرسال آرائك واقتراحاتك وأسئلتك إلينا  باستخدام المعلومات الواردة ادناه</p>

  <div class="itemleftcontact">
      <img src={g1} alt=""/>
      <div class="textleftcontact">
          <p>اتصل بنا</p>
          <h5>Palestine, Gaza Strip, Gaza City, Al Naser area</h5>
      </div>
  </div>

  <div class="itemleftcontact">
      <img src={g2} alt=""/>
      <div class="textleftcontact">
          <p>اكتب لنا</p>
          <h5>info@sparkgaza.org</h5>
      </div>
  </div>

  <div class="itemleftcontact">
      <img src={g3} alt=""/>
      <div class="textleftcontact">
          <p>اتصل بنا</p>
          <h5 dir="ltr" class="numcon">+972 599 601361  &nbsp; &nbsp; +972 8 28 41558 </h5>
      </div>
  </div>

  <div class="itemleftcontact">
      <img src={g4} alt=""/>
      <div class="textleftcontact">
          <p>ساعات العمل</p>
          <h5>10 صباحاً حتى 5 مسائاً</h5>
      </div>
  </div>

</div>
</dev>

</section>

</>
  )
}

export default Connectus
