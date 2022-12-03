import React, { useEffect, useState } from 'react'
import btnnav from '../images/btnnav.png'
import Layer12 from '../images/Layer_1-2.svg'
import bgmob from '../images/bgmob.png'
import popmobnav from '../images/popmobnav.png'
import lovely from '../images/lovely.svg'
import vuesaxuser from '../images/vuesax-outline-user.svg'
import outlinenormal from '../images/vuesax-outline-search-normal.svg'
import {NavLink ,Link} from 'react-router-dom'
import search from "../images/vuesax-outline-search-normal.svg";


const Navbar = () => {

  let [route , setRoute ] = useState();

  // let params =useParams();
  useEffect(() => {
    setRoute(window.location.pathname)
    console.log(route)
}, [route])



  
  useEffect(() => {
    require('../js/navdown')
    require('../js/searchside')
    require('../js/navmob')
  }, [])

  let hundlerclickNav = () => {
    setRoute(window.location.pathname)
    console.log(route)
  }






  // console.log(window.location.pathname)

  return (

    <>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="navtopmob">
          <button className="btnnav">
            <img src={btnnav} alt="" />
          </button>

          <a className="navbar-brand logomob" href="index.html">
            <img src={Layer12} alt="" />
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-2 gap-4 mb-lg-0">
            <li className="nav-item">
              <a href='/' className={`nav-link ${route == "/" ? "active" : ""}`}>الرئيسية</a>
              {/* <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} aria-current="page" to="/"
               end >الرئيسية</NavLink
              > */}
           {route == "/" ? (<div className="popnav" ></div>) : ""}
             
            </li>
            <li className="nav-item" onClick={hundlerclickNav}>
              <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} to="/about">من نحن</NavLink>
              {(isActive)=>isActive ? (<div className="popnav" ></div>) :  ""}
              {route == "/about" ? (<div className="popnav" ></div>) : ""}
            </li>
            <li className="nav-item navdrob" onClick={hundlerclickNav}>
              <a className="nav-link" id="navdrob"  >البرامج</a>

              <div class="allpopnavpro">
                  <div class="popnavpro">
                    <div class="rightsidepopn">
                      <ul class="programsnav">
                        <li>
                        <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} to="/climate">البيئة والمناخ</NavLink>
                        </li>
                        <hr />
                        <li class=" menuactive ">
                        <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} to="/leaders">
                            {" "}
                            القيادة والمواطنة
                          </NavLink>
                        </li>
                        <hr />
                        <li class=" menuactive ">
                        <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} to="/digital"> التحول الرقمي</NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </li>
            <li className="nav-item" onClick={hundlerclickNav}>
              <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} to="/mediaCenter" >المركز الاعلامي</NavLink>
              {route == "/mediaCenter" ? (<div className="popnav" ></div>) : ""}
            </li>
            <li className="nav-item" onClick={hundlerclickNav}>
              <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`}  to="/connectUs" >تواصل معنا</NavLink>
              {route == "/connectUs" ? (<div className="popnav" ></div>) : ""}
            </li>
          </ul>

          <div className="searchside">
            <div className="btnsearch">
              <img
                id="searchside"
                src={outlinenormal}
                alt=""
              />

              <div className="serchpop">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="ما الذي تريد البحث عنه"
                />
                <hr />
                <div className="btnserchpop">
                  <button id="closepopser">إلغاء</button>
                  <button>بحث</button>
                </div>
              </div>
            </div>
            <div className="btnsearch">
              <a href="profile.html">
                <img id="btnuser" src={vuesaxuser} alt="" />
              </a>

              <div className="poplo">
                <Link to="/signIn"><p>تسجيل دخول</p></Link>
                <hr />
                <Link to="/signIn/createAccount"><p>انشاء حساب</p></Link>
              </div>
            </div>
            <button className="btnt">
              <p>تبرع</p>
              <img src={lovely} alt="" />
            </button>
          </div>
        </div>
      </div>
    </nav>


    <navbar class="navbarMobile ">
        <img class="bgmob" src={bgmob} alt="" />
        <img class="popmobnav" src={popmobnav} alt="" />

        <div class="bodyNavbarMobile">
          <i class="bx bx-x closebtn"></i>

          <div class="serchinputnavin">
            <input type="text" placeholder="ما الذي تبحث عنه" />
            <div class="imgsearf">
              <img src={search} alt="" />
            </div>
          </div>

          <ul class="navlink">
            <li className='linkmob' >
              <a href="/">
             
                الرئيسية
              </a>
            </li>
            <li className="linkmob">
              <Link to="/about">

                من نحن
              </Link>{" "}
            </li>
            <li class= "drobbavmob" >
              <a>
                البرامج</a>
              <ul>
                <li >
                  <Link to="/climate">البيئة والمناخ</Link>
                </li>
                <li>
            
                  <Link to="/leaders">القيادات والمواطنة</Link>
                </li>
                <li>
           
                  <Link to="/digital"> التحول الرقمي</Link>
                </li>
              </ul>
            </li>
            <li className='linkmob'>
              <Link to="/mediaCenter">
                المركز الاعلامي
              </Link>{" "}
            </li>
            <li >
              <Link  to="/connectus">تواصل معنا</Link>{" "}
            </li>
            <li>
              <Link to="/signIn"> تسجيل دخول</Link>{" "}
            </li>
            <li>
              <Link to="/createAccount"> إنشاء حساب</Link>{" "}
            </li>

            <div class="btntnavmob">
              <button>تـــبرع</button>
            </div>
          </ul>
        </div>
      </navbar>



    </>

  )
}

export default Navbar