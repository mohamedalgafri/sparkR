import React from "react";
import { useRef, useState } from "react";
import gfh from "../images/gfh.png";
import popp from "../images/popp.svg";
import logo from "../images/logo.svg";
import Path_7395 from "../images/Path 7395.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  let emailLoginRef = useRef();
  let passwordLoginRef = useRef();

  let formSubmitHandler = (event) => {
    event.preventDefault();
    if (checkData()) {
      localStorage.setItem("logged_in", true);

      // router.push("/");
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
      <div class="imgbb bomo">
        <img src={gfh} alt="" />
      </div>

      <img class="popp" src={popp} alt="" />

      <nav class="navhead container">
        <a href="/">
          {" "}
          <img src={logo} alt="" />
        </a>

        <div class="leftnavb">
          <Link to="/signIn/createAccount">لست عضواً؟</Link>
          <Link to="/signIn/createAccount" class="btnlog">
            <p>انشاء حساب</p>
            <i class="bx bx-arrow-back"></i>
          </Link>
        </div>
      </nav>

      <section class="bodycre container ">
        <div class="rightbodycre rrsigh">
          <div class="rightcontact righfog ">
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

              <a class="floggg" href="">
                هل نسيت كلمة المرور؟
              </a>

              <div href="indexprof.html">
                <button type="submit" class="btnall">
                  <p>تسجيل دخول</p>
                  <div class="arrowbtn">
                    <i class="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <img src={Path_7395} alt="" />

          <div class="leftnavb lemob">
            <a href="createAccount.html">لست عضواً؟</a>
            <a href="createAccount.html" class="btnlog">
              <p>انشاء حساب</p>
              <i class="bx bx-arrow-back"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
