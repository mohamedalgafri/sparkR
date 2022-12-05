import React, { useContext } from "react";
import { useRef, useState } from "react";
import gfh from "../images/gfh.png";
import popp from "../images/popp.svg";
import logo from "../images/logo.svg";
import Path_7395 from "../images/Path 7395.svg";
import { Link , useNavigate } from "react-router-dom";
import { ContextLogin } from "../context/ContextLogin";

const SignIn = () => {

  let isLoginContext = useContext(ContextLogin);

  let emailLoginRef = useRef();
  let passwordLoginRef = useRef();

  let navigate = useNavigate();

  let formSubmitHandler = (event) => {
    event.preventDefault();
    if (checkData()) {
      localStorage.setItem("logged_in", true);
      isLoginContext.setLoggedIn(true);
      navigate("/" , {replace:true});
    }
  };

  let checkData = () => {
    if (
      emailLoginRef.current.value != "" &&
      passwordLoginRef.current.value != ""
    ) {
      return true;
    }
  };

  return (
    <div>
      <div className="imgbb bomo">
        <img src={gfh} alt="" />
      </div>

      <img className="popp" src={popp} alt="" />

      <nav className="navhead container">
        <a href="/">
          {" "}
          <img src={logo} alt="" />
        </a>

        <div className="leftnavb">
          <Link to="/signIn/createAccount">لست عضواً؟</Link>
          <Link to="/signIn/createAccount" className="btnlog">
            <p>انشاء حساب</p>
            <i className="bx bx-arrow-back"></i>
          </Link>
        </div>
      </nav>

      <section className="bodycre container " data-aos="fade-up">
        <div className="rightbodycre rrsigh">
          <div className="rightcontact righfog ">
            <h2>تسجيل الدخول</h2>
            <form action="" onSubmit={formSubmitHandler}>
              <input
                type="email"
                placeholder="البريد الالكتروني"
                ref={emailLoginRef}
              />
              <input
                type="password"
                placeholder="كلمة المرور"
                ref={passwordLoginRef}
              />

              <a className="floggg" href="">
                هل نسيت كلمة المرور؟
              </a>

              <div href="indexprof.html">
                <button type="submit" className="btnall">
                  <p>تسجيل دخول</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <img src={Path_7395} alt="" />

          <div className="leftnavb lemob">
            <a href="createAccount.html">لست عضواً؟</a>
            <a href="createAccount.html" className="btnlog">
              <p>انشاء حساب</p>
              <i className="bx bx-arrow-back"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
