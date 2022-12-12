import React, { useContext, useRef, useState } from "react";
import gfh from "../images/gfh.png";
import popp from "../images/popp.svg";
import logo from "../images/logo.svg";
import Group_1465 from "../images/Group 1465.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { ContextLogin } from "../context/ContextLogin";

const CreateAccount = () => {

 

  const nameRef = useRef();
  const surNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRefRef = useRef();
  const checkRef = useRef();
  let Navigate = useNavigate();

  let isLoginContext = useContext(ContextLogin);


  let clickhandlerregister = (event) => {
    event.preventDefault();
    if (checkData()) {
      register();
    }
  };

  let checkData = () => {
    if (
      nameRef.current.value != "" &&
      surNameRef.current.value != "" &&
      emailRef.current.value != "" &&
      passwordRef.current.value != "" &&
      passwordConfirmationRefRef.current.value != "" &&
      checkRef.current.checked
    ) {
      if(passwordRef.current.value == passwordConfirmationRefRef.current.value){
        return true;
      }
      alert("Password does not match")
      return false;
    }
    alert("Enter your username and e-mail")
    return false;
  };

  let register = () => {
    axios
      .post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkZAaUEDciuOvgsrrmCmC3GVAn2RQ1gA8",{
        email:emailRef.current.value,
        password:passwordRef.current.value,
        returnSecureToken:true,
      })
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.idToken)
        localStorage.setItem("logged_in", true);
        isLoginContext.setLoggedIn(true);
        Navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error)
      });
  };

  return (
    <div>
      <div className="imgbb ">
        <img src={gfh} alt="" />
      </div>

      <nav className="navhead container">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>

        <div className="leftnavb">
          <Link to="/signIn">هل لديك حساب؟</Link>
          <Link to="/signIn" className="btnlog">
            <p>تسجيل دخول</p>
            <i className="bx bx-arrow-back"></i>
          </Link>
        </div>
      </nav>

      <section className="bodycre container">
        <div className="rightbodycre" data-aos="fade-up">
          <div className="rightcontact righfog">
            <h2>إنشاء حساب</h2>
            <form action="" onSubmit={clickhandlerregister}>
              <div className="inputcontact">
                <input type="text" placeholder="الاسم" ref={nameRef} />
                <input
                  type="text"
                  placeholder="اللقب الخاص بك"
                  ref={surNameRef}
                />
              </div>
              <input
                type="email"
                placeholder="البريد الالكتروني"
                ref={emailRef}
              />
              <input
                type="password"
                placeholder="كلمة المرور"
                ref={passwordRef}
              />
             
              <input
                type="password"
                placeholder="تأكيد كلمة المرور"
                ref={passwordConfirmationRefRef}
              />

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  ref={checkRef}
                />
                <label className="form-check-label" for="flexCheckDefault">
                  أقبل اتفاقية الخصوصية والعضوية
                </label>
              </div>

              <div>
              <button type="submit" className="btnall">
                  <p>سجل</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="leftnavb lemob">
            <a href="signIn.html">هل لديك حساب؟</a>
            <a href="signIn.html" className="btnlog">
              <p>تسجيل دخول</p>
              <i className="bx bx-arrow-back"></i>
            </a>
          </div>
        </div>
        <div className="leftbodycre" data-aos="fade-up">
          <h2>
            مرحباَ بك في مجتمع <span>سبارك</span>{" "}
          </h2>
          <p>للتسجيل ، يرجى ملء النموذج الموجود </p>

          <img src={Group_1465} alt="" data-aos="zoom-in" />
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
