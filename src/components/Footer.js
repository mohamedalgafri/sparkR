import React, { useEffect, useState } from 'react'

import send2 from '../images/send-2.svg';
import call from '../images/vuesax-linear-call.svg';
import global from '../images/vuesax-linear-global.svg';
import sms from '../images/vuesax-linear-sms.svg';
import home2 from '../images/home-2.svg';
import logofoo from '../images/logofoo.svg';
import {Link , useLocation} from 'react-router-dom'


const Footer = () => {

  let locationn = useLocation();


  return (
    <footer data-aos="fade-up" class={`footer bottom  ${ locationn.pathname == "/climate" ? "climate" : ""} || ${ locationn.pathname == "/digital" ? "digital" : ""}   `}>
    <div className="container">
      <div className="row allFooter">
        <div className="col-md-12 col-lg-4">
          <img className="logofooter" src={logofoo} alt="" />
          <p>
            هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم
            وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018
            وسجلت في يناير 2019. تعزز Spark الإبداع والابتكار خلال تدخلاتها
            لتوليد القيم الأساسية في مجتمعنا، ليكون مجتمعًا مزدهرًا وناجحًا
            يستطيع فيه جميع
          </p>

          <div className="btnall btnallfooter">
            <p>تبرع</p>
            <div className="arrowbtn">
              <i className="bx bx-left-arrow-alt movearr"></i>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 listfooter">
          <div className="row ">
            <div className="col-4 collist">
              <h5>روابط مهمة</h5>
              <ul>
                <Link to="/"><li>الرئيسية</li></Link>
                <Link to="/aboutus"> <li>من نحن</li></Link>
                <Link to="/mediaCenter"> <li>الاخبار</li></Link>
                <Link to="/leaders"><li>البرامج</li></Link>
              </ul>
            </div>

            <div className="col-4 collist">
              <h5>المركز الاعلامي</h5>
              <ul>
                <Link href="/mediaCenter"><li>الاخبار</li></Link>
                <Link href="/mediaCenter/events"> <li>الفعاليات</li></Link>
                <Link href="/mediaCenter/images"><li>الصور</li></Link>
                <Link href="/mediaCenter/videos"><li>الفيديوهات</li></Link>
              </ul>
            </div>

            <div className="col-4 collist">
              <h5>تابعنا على</h5>
              <ul>
                <a href=""><li>لينكد ان</li></a>
                <a href=""> <li>فيس بوك</li></a>
                <a href=""><li>تويتر</li></a>
                <a href=""><li>انستجرام</li></a>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-4 addresfooter">
          <div className="">
            <h5>عنواننا</h5>
            <ul>

                <li>
                  <img src={home2} alt="" />
                  <p>
                    فلسطين ، قطاع غزة <br />
                    مدينة غزة ، منطقة النصر
                  </p>
                </li>
        
                <li>
                  <img src={call} alt="" />
                  <p>+972 8 24 1558</p>
                </li>
       
     
                <li>
                  <img src={global} alt="" />
                  <p>www.sparkgaza.org</p>
                </li>
         

                <li>
                  <img src={sms} alt="" />
                  <p>info@sparkgaza.org</p>
                </li>
            
            </ul>
          </div>
        </div>
        
      </div>

      <div className="footerdown">
        <h6>اشترك مجاناً في نشراتنا الإخبارية على البريد الالكتروني</h6>
        <form className="inputemail"> 
          <input type="email" placeholder="الرجاء ادخال بريدك الالكتروني"/>
          <button className="button-88" role="button"><img src={send2} alt=""/></button>
        </form>
      </div>
      <div className="Copyrights">
        <p>جميع حقوق الطبع والنشر محفوظة 2023</p>
      </div>
      <div className="linewfooter"></div>
    </div>
  </footer>
  )
}

export default Footer
