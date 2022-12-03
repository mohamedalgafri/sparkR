import React from "react";
import gfh from "../images/gfh.png";
import popp from "../images/popp.svg";
import logo from "../images/logo.svg";
import Group_1465 from "../images/Group 1465.svg";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div>
      <div class="imgbb ">
        <img src={gfh} alt="" />
      </div>

      <nav class="navhead container">
        <Link to="/">
          {" "}
          <img src={logo} alt="" />
        </Link>

        <div class="leftnavb">
          <Link to="/signIn">هل لديك حساب؟</Link>
          <Link to="/signIn" class="btnlog">
            <p>تسجيل دخول</p>
            <i class="bx bx-arrow-back"></i>
          </Link>
        </div>
      </nav>

      <section class="bodycre container">
        <div class="rightbodycre">
          <div class="rightcontact righfog">
            <h2>إنشاء حساب</h2>
            <form action="">
              <div class="inputcontact">
                <input type="text" placeholder="الاسم" />
                <input type="text" placeholder="اللقب الخاص بك" />
              </div>
              <input type="email" placeholder="البريد الالكتروني" />
              <input type="password" placeholder="كلمة المرور" />

              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  أقبل اتفاقية الخصوصية والعضوية
                </label>
              </div>

              <a href="profile.html">
                <div class="btnall">
                  <p>سجل</p>
                  <div class="arrowbtn">
                    <i class="bx bx-left-arrow-alt movearr"></i>
                  </div>
                </div>
              </a>
            </form>
          </div>

          <div class="leftnavb lemob">
            <a href="signIn.html">هل لديك حساب؟</a>
            <a href="signIn.html" class="btnlog">
              <p>تسجيل دخول</p>
              <i class="bx bx-arrow-back"></i>
            </a>
          </div>
        </div>
        <div class="leftbodycre">
          <h2>
            مرحباَ بك في مجتمع <span>سبارك</span>{" "}
          </h2>
          <p>للتسجيل ، يرجى ملء النموذج الموجود </p>

          <img src={Group_1465} alt="" />
        </div>
      </section>
    </div>
  );
};

export default CreateAccount;
