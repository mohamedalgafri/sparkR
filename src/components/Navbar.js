import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import btnnav from "../images/btnnav.png";
import Layer12 from "../images/Layer_1-2.svg";
import bgmob from "../images/bgmob.png";
import popmobnav from "../images/popmobnav.png";
import lovely from "../images/lovely.svg";
import lovelyblow from "../images/lovelyblow.svg";
import vuesaxuser from "../images/vuesax-outline-user.svg";
import outlinenormal from "../images/vuesax-outline-search-normal.svg";
import { NavLink, Link, useLocation } from "react-router-dom";
import search from "../images/vuesax-outline-search-normal.svg";
import Ellipse22 from "../images/Ellipse 143.svg";
import Group333i from "../images/Group 333i.png";
import { ContextLogin } from "../context/ContextLogin";

const Navbar = () => {
  let isLoginContext = useContext(ContextLogin);

  const [isActive, setActive] = useState(false);
  let locationn = useLocation();

  useEffect(() => {
    require("../js/navdown");
    require("../js/searchside");
    require("../js/navmob");
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          locationn.pathname == "/digital" ? "digital" : ""
        }`}
      >
        <div className="container">
          <div className="navtopmob">
            <button className="btnnav">
              <img src={btnnav} alt="" />
            </button>

            <a className="navbar-brand logomob" href="/">
              <img src={Layer12} alt="" />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 gap-4 mb-lg-0">
              <li className="nav-item">
                <a
                  href="/"
                  className={`nav-link ${
                    locationn.pathname == "/" ? "active" : ""
                  }`}
                >
                  الرئيسية
                </a>
                {/* <NavLink className={`nav-link ${(isActive)=>isActive ? "active" : ""}`} aria-current="page" to="/"
               end >الرئيسية</NavLink
              > */}
                {locationn.pathname == "/" ? (
                  <div className="popnav"></div>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(isActive) =>
                    isActive ? "active" : ""}`}
                  to="/about"
                >
                  من نحن
                </NavLink>
                {(isActive) => (isActive ? <div className="popnav"></div> : "")}
                {locationn.pathname == "/about" ? (
                  <div className="popnav"></div>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item navdrob">
                <a
                  className={`nav-link ${
                    locationn.pathname == "/climate" ||
                    locationn.pathname == "/leaders" ||
                    locationn.pathname == "/digital"
                      ? "active"
                      : ""
                  }`}
                  id="navdrob"
                >
                  البرامج
                </a>
                {locationn.pathname == "/climate" ||
                locationn.pathname == "/leaders" ||
                locationn.pathname == "/digital" ? (
                  <div className="popnav"></div>
                ) : (
                  ""
                )}
                <div className="allpopnavpro">
                  <div className="popnavpro">
                    <div className="rightsidepopn">
                      <ul className="programsnav">
                        <li>
                          <NavLink
                            className={`nav-link ${(isActive) =>
                              isActive ? "active" : ""}`}
                            to="/climate"
                          >
                            البيئة والمناخ
                          </NavLink>
                        </li>
                        <hr />
                        <li className=" menuactive ">
                          <NavLink
                            className={`nav-link ${(isActive) =>
                              isActive ? "active" : ""}`}
                            to="/leaders"
                          >
                            القيادة والمواطنة
                          </NavLink>
                        </li>
                        <hr />
                        <li className=" menuactive ">
                          <NavLink
                            className={`nav-link ${(isActive) =>
                              isActive ? "active" : ""}`}
                            to="/digital"
                          >
                            التحول الرقمي
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(isActive) =>
                    isActive ? "active" : ""}`}
                  to="/mediaCenter"
                >
                  المركز الاعلامي
                </NavLink>
                {locationn.pathname.includes("/mediaCenter") ? (
                  <div className="popnav"></div>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                <NavLink
                  className={`nav-link ${(isActive) =>
                    isActive ? "active" : ""}`}
                  to="/connectUs"
                >
                  تواصل معنا
                </NavLink>
                {locationn.pathname == "/connectUs" ? (
                  <div className="popnav"></div>
                ) : (
                  ""
                )}
              </li>
            </ul>

            <div className="searchside">
              <div className="btnsearch">
                <img id="searchside" src={outlinenormal} alt="" />

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

              {console.log(isLoginContext.isLoggedIn)}

              { isLoginContext.isLoggedIn !== true ? (
                <div class="btnsearch">
                  <Link href="profile">
                    <img id="btnuser" src={vuesaxuser} alt="" />
                  </Link>

                  <div class="poplo">
                    <Link to="/signIn">
                      <p>تسجيل دخول</p>
                    </Link>
                    <hr />
                    <Link to="/signIn/createAccount">
                      <p> انشاء حساب</p>
                    </Link>
                  </div>
                </div>
              ) : (
                <div class="btnsearch btnprofimg">
                  <img id="btnuser" src={Ellipse22} alt="" />

                  <div class="poplo">
                    <Link to="/profile">
                      <p> الصفحة الشخصية</p>
                    </Link>
                    <hr />
                    <Link
                      to="/signIn"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModallogin"
                    >
                      <p> تسجيل الخروج</p>
                    </Link>
                  </div>
                </div>
              )}

              <button className="btnt">
                <p>تبرع</p>
                {locationn.pathname == "/digital" ? (
                  <img src={lovelyblow} alt="" />
                ) : (
                  <img src={lovely} alt="" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <navbar className="navbarMobile ">
        <img className="bgmob" src={bgmob} alt="" />
        <img className="popmobnav" src={popmobnav} alt="" />

        <div className="bodyNavbarMobile">
          <i className="bx bx-x closebtn"></i>

          <div className="serchinputnavin">
            <input type="text" placeholder="ما الذي تبحث عنه" />
            <div className="imgsearf">
              <img src={search} alt="" />
            </div>
          </div>

          <ul className="navlink">
            <li className="linkmob">
              <a href="/">الرئيسية</a>
            </li>
            <li className="linkmob">
              <Link to="/about">من نحن</Link>{" "}
            </li>
            <li className="drobbavmob">
              <a>البرامج</a>
              <ul>
                <li>
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
            <li className="linkmob">
              <Link to="/mediaCenter">المركز الاعلامي</Link>{" "}
            </li>
            <li>
              <Link to="/connectus">تواصل معنا</Link>{" "}
            </li>
            <li>
              <Link to="/signIn"> تسجيل دخول</Link>{" "}
            </li>
            <li>
              <Link to="/createAccount"> إنشاء حساب</Link>{" "}
            </li>

            <div className="btntnavmob">
              <button>تـــبرع</button>
            </div>
          </ul>
        </div>
      </navbar>

      {/* <!-- Modal --> */}
      <div
        class="modal modelprof fade"
        id="exampleModallogin"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <img src={Group333i} alt="" />

              <div class="contantmodel">
                <h4> هل تريد حقاً تسجيل الخروج ?</h4>
                <div class="btnmodelprof">
                  <a href="" data-bs-dismiss="modal">
                    لا اريد
                  </a>
                  <a
                    href="/signIn"
                    onClick={() => {
                      localStorage.setItem("logged_in", false);
                      // localStorage.removeItem("token");
                      isLoginContext.setLoggedIn(false);
                    }}
                  >
                    نعم , اريد
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
