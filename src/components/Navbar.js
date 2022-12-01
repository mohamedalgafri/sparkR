import React, { useEffect, useState } from 'react'
import btnnav from '../images/btnnav.png'
import Layer12 from '../images/Layer_1-2.svg'
import bgmob from '../images/bgmob.png'
import popmobnav from '../images/popmobnav.png'
import lovely from '../images/lovely.svg'
import vuesaxuser from '../images/vuesax-outline-user.svg'
import outlinenormal from '../images/vuesax-outline-search-normal.svg'
import {NavLink , useParams} from 'react-router-dom'



const Navbar = () => {

  let [route , setRoute ] = useState();

  let params =useParams();

  useEffect(() => {
    return () => {
      setRoute(window.location.pathname)
    };
  }, [route])


  console.log(route)
  console.log(params.pathname)

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
              <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} aria-current="page" to="/"
               end >الرئيسية</NavLink
              >
            <div className="popnav" ></div>
             
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} to="/about">من نحن</NavLink>
              {(isActive)=>isActive ? (<div className="popnav" ></div>) :  ""}

            </li>
            <li className="nav-item navdrob">
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
            <li className="nav-item">
              <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} to="mediaCenter" >المركز الاعلامي</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`}  to="connectUs" >تواصل معنا</NavLink>
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
                <a href="signIn.html"><p>تسجيل دخول</p></a>
                <hr />
                <a href="createAccount.html"><p>انشاء حساب</p></a>
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



    </>

  )
}

export default Navbar