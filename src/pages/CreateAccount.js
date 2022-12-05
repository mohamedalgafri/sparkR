import React from "react";
import gfh from "../images/gfh.png";
import popp from "../images/popp.svg";
import logo from "../images/logo.svg";
import Group_1465 from "../images/Group 1465.svg";
import { Link } from "react-router-dom";

const CreateAccount = () => {
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

        <div className="leftnavb" >
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
            <form action="">
              <div className="inputcontact">
                <input type="text" placeholder="الاسم" />
                <input type="text" placeholder="اللقب الخاص بك" />
              </div>
              <input type="email" placeholder="البريد الالكتروني" />
              <input type="password" placeholder="كلمة المرور" />

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" for="flexCheckDefault">
                  أقبل اتفاقية الخصوصية والعضوية
                </label>
              </div>

              <a href="profile.html">
                <div className="btnall">
                  <p>سجل</p>
                  <div className="arrowbtn">
                    <i className="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </div>
              </a>
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
