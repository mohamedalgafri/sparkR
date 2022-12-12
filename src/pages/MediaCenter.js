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
        <div className="imghederc imghedercabout" >
          <img  className="imgheader imgnews imghedmedi" src={bgmeda} alt="" />
          <img  className="imgheadermob bgmobred imghedmedimob" src={bgaboutmob} alt="" />
        </div>

        <div className="allcontantheder allcontanthederabout" >
          <div className="contanthede container">
            <div className="titletextabout" data-aos="fade-up">
              <h1>المركز الاعلامي </h1>
              <p>كل ما هو حقيقي يجب تخيله في يوم من الأيام</p>
            </div>

            <div className="tappabout" data-aos="fade-up">
              <div className="aboutlink">
                <Link to="/">الرئسية</Link>
                <div className="arrowbtn hedarr">
                  <i className="bx bx-left-arrow-alt movearr"></i>
                </div>
                <a> المعرض</a>
              </div>
            </div>

            <div className="bodyheadabout" data-aos="fade-up">
              <p>
                يمكنك متابعة الصور ومقاطع الفيديو لجميع الأنشطة الطلابية على
                صفحتنا
              </p>

              <div className="serachInput" >
                <img  src={vuesax} alt="" />
                <input type="text" placeholder="عن ماذا تريد البحث؟" />
              </div>

              <div className="alltaphed">
                <div className="taphedfle">
                  <NavLink to="/mediaCenter" className={`taphed ${(isActive)=> isActive ? "active" : ""}` } end >
                    <p>الاخبار</p>
                    <div className="poptaphed"></div>
                  </NavLink>

                  <NavLink to="/mediaCenter/events" className={`taphed ${(isActive)=> isActive ? "active" : ""}`}>
                    <p>الفعاليات</p>
                    <div className="poptaphed"></div>
                  </NavLink>
                </div>

                <div className="taphedfle">
                  <NavLink to="/mediaCenter/images" className={`taphed ${(isActive)=> isActive ? "active" : ""}`}>
                    <p>الصور</p>
                    <div className="poptaphed"></div>
                  </NavLink>

                  <NavLink to="/mediaCenter/videos" className={`taphed ${(isActive)=> isActive ? "active" : ""}`}>
                    <p>الفيديوهات</p>
                    <div className="poptaphed"></div>
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
