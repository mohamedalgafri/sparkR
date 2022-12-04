import React from "react";

import Rectangle331 from "../images/Rectangle 331.png";
import sadown2 from "../images/sadown2.png";
import imgblowcard from "../images/imgblowcard.svg";
import Group1500 from "../images/Group 1500.svg";
import { Link } from "react-router-dom";


const Images = () => {

  return (
    <div>
      <section className="container bodymedia">
        <div className="allcardmedia ">
          <Link className="cardNews " to="/mediaCenter/images/imagesDetels">
            <img className="cardn1" src={Rectangle331} alt="" />
            <img className="shadown" src={sadown2} alt="" />
            <img className="imgblowcard" src={imgblowcard} alt="" />
            <div className="numimg">
              <img src={Group1500} alt="" />
              <p>13</p>
            </div>

            <p>السيرك كفن يطرح قضايا مجتمعيّة السيرك للجميع</p>
          </Link>

          <Link className="cardNews " to="/mediaCenter/images/imagesDetels">
            <img className="cardn1" src={Rectangle331} alt="" />
            <img className="shadown" src={sadown2} alt="" />
            <img className="imgblowcard" src={imgblowcard} alt="" />
            <div className="numimg">
              <img src={Group1500} alt="" />
              <p>13</p>
            </div>

            <p>السيرك كفن يطرح قضايا مجتمعيّة السيرك للجميع</p>
          </Link>

          <Link className="cardNews " to="/mediaCenter/images/imagesDetels">
            <img className="cardn1" src={Rectangle331} alt="" />
            <img className="shadown" src={sadown2} alt="" />
            <img className="imgblowcard" src={imgblowcard} alt="" />
            <div className="numimg">
              <img src={Group1500} alt="" />
              <p>13</p>
            </div>

            <p>السيرك كفن يطرح قضايا مجتمعيّة السيرك للجميع</p>
          </Link>
        </div>

        <div className="navmedia">
          <nav aria-label="Page navigation  ">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <i className="bx bx-chevron-right"></i>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <i className="bx bx-chevron-left"></i>
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
