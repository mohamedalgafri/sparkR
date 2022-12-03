import React from 'react'

import bgmeda from "../images/bgmeda.png";
import bgaboutmob from "../images/bgaboutmob.png";
import vuesax from "../images/vuesax-.svg";
import {NavLink, Outlet , Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MediaCenter = () => {
  return (
    <>
    <Navbar/>
      <header>
        <div class="imghederc imghedercabout">
          <img  class="imgheader imgnews imghedmedi" src={bgmeda} alt="" />
          <img  class="imgheadermob bgmobred imghedmedimob" src={bgaboutmob} alt="" />
        </div>

        <div class="allcontantheder allcontanthederabout">
          <div class="contanthede container">
            <div class="titletextabout">
              <h1>المركز الاعلامي </h1>
              <p>كل ما هو حقيقي يجب تخيله في يوم من الأيام</p>
            </div>

            <div class="tappabout">
              <div class="aboutlink">
                <Link to="/">الرئسية</Link>
                <div class="arrowbtn hedarr">
                  <i class="bx bx-left-arrow-alt movearr"></i>
                </div>
                <a> المعرض</a>
              </div>
            </div>

            <div class="bodyheadabout">
              <p>
                يمكنك متابعة الصور ومقاطع الفيديو لجميع الأنشطة الطلابية على
                صفحتنا
              </p>

              <div class="serachInput">
                <img  src={vuesax} alt="" />
                <input type="text" placeholder="عن ماذا تريد البحث؟" />
              </div>

              <div class="alltaphed">
                <div class="taphedfle">
                  <NavLink to="/mediaCenter" className={`taphed ${(isActive)=> isActive ? "active" : ""}` } end >
                    <p>الاخبار</p>
                    <div class="poptaphed"></div>
                  </NavLink>

                  <NavLink to="/mediaCenter/events" className={`taphed ${(isActive)=> isActive ? "active" : ""}`}>
                    <p>الفعاليات</p>
                    <div class="poptaphed"></div>
                  </NavLink>
                </div>

                <div class="taphedfle">
                  <NavLink to="/mediaCenter/images" className={`taphed ${(isActive)=> isActive ? "active" : ""}`}>
                    <p>الصور</p>
                    <div class="poptaphed"></div>
                  </NavLink>

                  <NavLink to="/mediaCenter/videos" className={`taphed ${(isActive)=> isActive ? "active" : ""}`}>
                    <p>الفيديوهات</p>
                    <div class="poptaphed"></div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Outlet/>

    <Footer/>


    </>
  )
}

export default MediaCenter
