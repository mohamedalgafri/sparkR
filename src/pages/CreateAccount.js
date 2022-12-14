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
          <Link to="/signIn">???? ???????? ??????????</Link>
          <Link to="/signIn" className="btnlog">
            <p>?????????? ????????</p>
            <i className="bx bx-arrow-back"></i>
          </Link>
        </div>
      </nav>

      <section className="bodycre container">
        <div className="rightbodycre" data-aos="fade-up">
          <div className="rightcontact righfog">
            <h2>?????????? ????????</h2>
            <form action="" onSubmit={clickhandlerregister}>
              <div className="inputcontact">
                <input type="text" placeholder="??????????" ref={nameRef} />
                <input
                  type="text"
                  placeholder="?????????? ?????????? ????"
                  ref={surNameRef}
                />
              </div>
              <input
                type="email"
                placeholder="???????????? ????????????????????"
                ref={emailRef}
              />
              <input
                type="password"
                placeholder="???????? ????????????"
                ref={passwordRef}
              />
             
              <input
                type="password"
                placeholder="?????????? ???????? ????????????"
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
                  ???????? ?????????????? ???????????????? ????????????????
                </label>
              </div>

              <div>
              <button type="submit" className="btnall">
                  <p>??????</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </button>
              </div>
            </form>
          </div>

          <div className="leftnavb lemob">
            <a href="signIn.html">???? ???????? ??????????</a>
            <a href="signIn.html" className="btnlog">
              <p>?????????? ????????</p>
              <i className="bx bx-arrow-back"></i>
            </a>
          </div>
        </div>
        <div className="leftbodycre" data-aos="fade-up">
          <h2>
            ???????????? ???? ???? ?????????? <span>??????????</span>{" "}
          </h2>
          <p>?????????????? ?? ???????? ?????? ?????????????? ?????????????? </p>

          <img src={Group_1465} alt="" data-aos="zoom-in" />
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
