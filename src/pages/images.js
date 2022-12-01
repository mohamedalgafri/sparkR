import React from "react";

import Rectangle331 from "../images/Rectangle 331.png";
import sadown2 from "../images/sadown2.png";
import imgblowcard from "../images/imgblowcard.svg";
import Group1500 from "../images/Group 1500.svg";

const Images = () => {
  return (
    <div>
      <section class="container bodymedia">
        <div class="allcardmedia ">
          <a class="cardNews " href="imagesDetels">
            <img class="cardn1" src={Rectangle331} alt="" />
            <img class="shadown" src={sadown2} alt="" />
            <img class="imgblowcard" src={imgblowcard} alt="" />
            <div class="numimg">
              <img src={Group1500} alt="" />
              <p>13</p>
            </div>

            <p>السيرك كفن يطرح قضايا مجتمعيّة السيرك للجميع</p>
          </a>

          <a class="cardNews " href="mediaCenter4.html">
            <img class="cardn1" src={Rectangle331} alt="" />
            <img class="shadown" src={sadown2} alt="" />
            <img class="imgblowcard" src={imgblowcard} alt="" />
            <div class="numimg">
              <img src={Group1500} alt="" />
              <p>13</p>
            </div>

            <p>السيرك كفن يطرح قضايا مجتمعيّة السيرك للجميع</p>
          </a>

          <a class="cardNews " href="mediaCenter4.html">
            <img class="cardn1" src={Rectangle331} alt="" />
            <img class="shadown" src={sadown2} alt="" />
            <img class="imgblowcard" src={imgblowcard} alt="" />
            <div class="numimg">
              <img src={Group1500} alt="" />
              <p>13</p>
            </div>

            <p>السيرك كفن يطرح قضايا مجتمعيّة السيرك للجميع</p>
          </a>
        </div>

        <div class="navmedia">
          <nav aria-label="Page navigation  ">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <i class="bx bx-chevron-right"></i>
                </a>
              </li>
              <li class="page-item active">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <i class="bx bx-chevron-left"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
};

export default Images;
