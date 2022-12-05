import React, { useEffect, useState } from "react";

import minidil from "../images/minidil.png";
import minidil22 from "../images/minidil22.png";
import popimgg from "../images/popimgg.png";
import imgpopheddddd from "../images/imgpopheddddd.png";
import Rectangle_673 from "../images/Rectangle 673.png";
import shapmob1 from "../images/shapmob1.png";
import shapmob2 from "../images/shapmob2.png";
import sabemob from "../images/sabemob.png";
import grossgasteiger from "../images/pexels-eberhard-grossgasteiger-1287145.jpg";
import aviv from "../images/pexels-aviv-perets-3274903.jpg";
import Navbar from "../components/Navbar";
import minidil23 from "../images/minidil-2.png";
import Rectangle_33 from "../images/Rectangle 33.png";
import Rectangle_32 from "../images/Rectangle 32.png";
import Rectangle_331 from "../images/Rectangle 331.png";
import cardn1 from "../images/cardn1.png";
import cardn2 from "../images/cardn2.png";
import shadown from "../images/shadown.png";
import shaddo from "../images/shaddo.png";
import sadown2 from "../images/sadown2.png";
import ProgramsSwiper from "../components/swiper/ProgramsSwiper";
import vuesax_broken from "../images/vuesax-broken-data.svg";
import vuesax_programming from "../images/vuesax-broken-programming-arrows.svg";
import vuesax_monitor from "../images/vuesax-broken-monitor-recorder.svg";
import vuesax_outline from "../images/vuesax-outline-man.svg";
import Group_540 from "../images/Group 540.svg";
import shb1 from "../images/shb1.svg";
import shb2 from "../images/shb2.svg";
import shb3 from "../images/shb3.svg";
import shb4 from "../images/shb4.svg";
import shb5 from "../images/shb5.svg";
import shb6 from "../images/shb6.svg";
import Rectangle21 from "../images/Rectangle 21.png";
import Group3331 from "../images/Group 3331.png";
import Mask_Group_68 from "../images/Mask Group 68.png";
import minidil_2 from "../images/minidil-2.png";
import Rectangle20 from "../images/Rectangle 20.png";
import Rectangle22 from "../images/Rectangle 22.png";
import arrow_left from "../images/vuesax-linear-arrow-left.svg";
import Our_programsSwiper from "../components/swiper/Our_programsSwiper";
import SparknuMobSwiper from "../components/swiper/SparknuMobSwiper";
import NewsMobSwiper from "../components/swiper/NewsMobSwiper";

import { Link } from "react-router-dom";
import { PacmanLoader} from "react-spinners";





const Home = () => {


  // let [dataall, setdataall] = useState(null);
  // let [filtered, setFilered] = useState(null);
  let [num, setnum] = useState(0);

  useEffect(() => {
    require("../js/sliderHeder");
  }, []);



  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(()=>{
  //     setLoading(false)
  //   },4000)
  // }, [])



  return (

    //   <div className="loading">
    //   <PacmanLoader

    //   color={"#E9460A"}
    //   loading={loading}
    //   size={20}
    //   aria-label="Loading Spinner"
    //   data-testid="loader"
    // />
    //   </div>

        <>
        <header className="header" >
          <div className="imgheader " >
            <img className="shapeheder2" src={minidil} alt="" />
            <img className="shapeheder" src={minidil22} alt="" />
            <img className="popimgg" src={popimgg} alt="" />
            <img className="imgpopheddddd" src={imgpopheddddd} alt=""  />
  
            <div className="imggh" >
              <img className="shapeheder2 ImgSlider" src={Rectangle_673} alt="" />
            </div>
          </div>
  
          <div className="imgmob">
            <img className="shapmob1" src={shapmob1} alt=""  />
            <img className="shapmob2" src={shapmob2} alt="" />
  
            <div className="imgghmob">
              <img className="shapmob" src={sabemob} alt="" />
              <img className="ImgSlider" src={grossgasteiger} alt="" />
            </div>
          </div>
  
          <div className="textheader" >
            <div className="alltextslied " data-aos="fade-up">
              <div className="slider" id="slider">
                <div className="textslied " data-img={Rectangle_673}>
                  <div className="titletexthed" >
                    <p>مسارات11 ووطن</p>
                    <div className="linetit"></div>
                  </div>
  
                  <h1 >المسارات أنشطة مهمة</h1>
                  <p>
                    لما لها من دور في تعميق وتقوية ارتباط الشباب بالأرض. نهدف من
                    قيام الشباب بمسارات في أماكن متعددة في غز ة، إلى تسليط الضوء
                    على
                  </p>
                </div>
                <div className="textslied" data-img={aviv}>
                  <div className="titletexthed">
                    <p> آخر الاخبار</p>
                    <div className="linetit"></div>
                  </div>
  
                  <h1>اتفاقية تعاون</h1>
                  <p>
                    اتفاقية تعاون بين "القطان" و"تكنوبارك-فلسطين" لإقامة مخيم
                    تدريبي في الذكاء الاصطناعي ونظام "ستيم" لدمج التعليم بالحياة
                  </p>
                </div>
                <div className="textslied active" data-img={grossgasteiger}>
                  <div className="titletexthed">
                    <p>مسارات33 ووطن</p>
                    <div className="linetit"></div>
                  </div>
  
                  <h1>المسارات أنشطة مهمة</h1>
                  <p>
                    لما لها من دور في تعميق وتقوية ارتباط الشباب بالأرض. نهدف من
                    قيام الشباب بمسارات في أماكن متعددة في غز ة، إلى تسليط الضوء
                    على
                  </p>
                </div>
              </div>
  
              <div className="arrowSlidHed">
                <div className="rightarrow arrowNaxt">
                  <i className="bx bx-right-arrow-alt"></i>
                </div>
                <div className="leftarrow arrowPrve">
                  <i className="bx bx-left-arrow-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <section className="aboutus container bottom" data-aos="fade-up">
          <div className="rightsideabout bottom ">
            <div className="titletexthed abouttit">
              <p>من نحن</p>
              <div className="linetit"></div>
            </div>
            <h1>نبذة عن سبارك</h1>
            <p>
              هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم
              وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت
              في يناير 2019. <br />
              تعزز Spark الإبداع والابتكار خلال تدخلاتها لتوليد القيم الأساسية في
              مجتمعنا، ليكون مجتمعًا مزدهرًا وناجحًا يستطيع فيه جميع الأشخاص
              الوصول إلى الأدوات المناسبة لإطلاق أفكار جديدة وخلق فرص عمل مبتكرة؛
              تؤمن سبارك بالدور الحيوي للإبداع والابتكار كجزء أساسي في أي حلول
              مقدمة للشباب والمراهقين الفلسطينيين وأولئك الذين يبحثون عن فرصة
              لتطوير أنفسهم
            </p>
  
            <Link to="/about">
              <div className="btnall">
                <p>عرض المزيد</p>
                <div className="arrowbtn">
                  <i className="bx bx-left-arrow-alt movearr"></i>
                </div>
              </div>
            </Link>
          </div>
  
          <div className="leftsideabout bottom " data-aos="zoom-in-up" data-aos-duration="1000">
            <div className="imgleftus">
              <div className="imgtopus">
                <img className="imgpp1" src={Rectangle21} alt="" />
                <img className="imgpp2" src={Group3331} alt="" />
              </div>
              <div className="imgtopus">
                <img className="imgpp3" src={Rectangle20} alt="" />
                <img className="imgpp4" src={Rectangle22} alt="" />
              </div>
            </div>
          </div>
        </section>
  
        <section className="Our_programs bottom" data-aos="fade-up" >
          <div className="rigth_programs bottom" >
            <div className="imgpp">
              <img src={minidil23} alt="" />
            </div>
  
            <h1>برامجنا</h1>
          </div>
  
          <div className="left_programs bottom">
            {/* <!-- Swiper --> */}
            <ProgramsSwiper />
          </div>
        </section>
  
        <section className="newNews  bottom" data-aos="fade-up">
          <div className="allCardNews container">
            <div className="topCardNews">
              <div className="rightSideCard">
                <div className="cardNews cardNew1">
                  <img className="cardn1" src={Rectangle_32} alt="" />
                  <img className="shadown" src={shadown} alt="" />
                  <p>اتفاقية تعاون بين القطان و تكنوبارك فلسطين </p>
                </div>
                <div className="cardNews cardNew2">
                  <img className="cardn1" src={Rectangle_32} alt="" />
                  <img className="shadown" src={sadown2} alt="" />
                  <p>السيرك كفن يطرح قضايا مجتمعيّة السيرك للجميع</p>
                </div>
              </div>
              <div className="leftSideCard">
                <div className="titletexthed abouttit">
                  <p>المركز الاعلامي</p>
                  <div className="linetit"></div>
                </div>
  
                {num == 0 ? (
                  <h1>آخر أخبارنا</h1>
                ) : "" || num == 1 ? (
                  <h1>آخر الفعاليات</h1>
                ) : "" || num == 2 ? (
                  <h1>آخر الصور</h1>
                ) : "" || num == 3 ? (
                  <h1>آخر الفديوهات</h1>
                ) : (
                  ""
                )}
  
                <div className="allTepNews">
                  <div className="textNews">
                    <div class={`textnew ${num == 0 ? "active" : ""} `}>
                      {num == 0 ? <img src={arrow_left} alt="" /> : ""}
                      <a onClick={() => setnum(0)}>
                        <p className=" ">الاخبار</p>
                      </a>
                    </div>
                    <div class={`textnew ${num == 1 ? "active" : ""} `}>
                      {num == 1 ? <img src={arrow_left} alt="" /> : ""}
                      <a onClick={() => setnum(1)}>
                        <p className="">الفعاليات</p>
                      </a>
                    </div>
                    <div class={`textnew ${num == 2 ? "active" : ""} `}>
                      {num == 2 ? <img src={arrow_left} alt="" /> : ""}
                      <a onClick={() => setnum(2)}>
                        <p className="">الصور</p>
                      </a>
                    </div>
                    <div class={`textnew ${num == 3 ? "active" : ""} `}>
                      {num == 3 ? <img src={arrow_left} alt="" /> : ""}
                      <a onClick={() => setnum(3)}>
                        {" "}
                        <p className="">الفيديوهات</p>
                      </a>
                    </div>
                  </div>
  
                  <div className="btnNews">
                    <Link
                      href={
                        num == 0
                          ? "/mediaCenter"
                          : "" || num == 1
                          ? "/mediaCenter/events"
                          : "" || num == 2
                          ? "/mediaCenter/images"
                          : "" || num == 3
                          ? "/mediaCenter/videos"
                          : ""
                      }
                    >
                      <div className="btnall ">
                        <p>عرض المزيد</p>
                        <div className="arrowbtn">
                          <i className="bx bx-left-arrow-alt movearr"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="downCardNews">
              <div className="cardNews cardNew3">
                <img className="cardn1" src={Rectangle_32} alt="" />
                <img className="shadown" src={shadown} alt="" />
                <p>
                  تصميم المواقف الدرامية وتعزيز القيم في عباءة الخبير نقلة نوعية{" "}
                </p>
              </div>
              <div className="cardNews cardNew4">
                <img className="cardn1" src={Rectangle_32} alt="" />
                <img className="shadown" src={shaddo} alt="" />
                <p>
                  القطان تنظم يوماً دراسياً حول ممارسات العمل الصفي في ختام الدورة
                  الأولى من برنامج التكون المهني للمعلمين
                </p>
              </div>
              <div className="cardNews cardNew5">
                <img className="cardn1" src={Rectangle_32} alt="" />
                <img className="shadown" src={sadown2} alt="" />
                <p>
                  تصميم المواقف الدرامية وتعزيز القيم في عباءة الخبير نقلة نوعية{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <!-- <div className="imgleftt">
          <img src="images/Group 10.png" alt="">
        </div> --> */}
        </section>
  
        <section className="newNewsMob bottom" data-aos="fade-up">
          <div className="leftSideCard">
            <div className="titletexthed abouttit">
              <p>المركز الاعلامي</p>
              <div className="linetit"></div>
            </div>
  
            <h1>آخر أخبارنا</h1>
  
            <div className="allTepNews">
              <div className="textNews">
                <div className="textnew">
                  <p className="active" onClick={(e) => e.setnum(0)}>
                    الاخبار
                  </p>
                </div>
                <div className="textnew" onClick={(e) => e.setnum(1)}>
                  <p className="">الفعاليات</p>
                </div>
                <div className="textnew" onClick={(e) => e.setnum(2)}>
                  <p className="">الصور</p>
                </div>
                <div className="textnew" onClick={(e) => e.target.setnum(2)}>
                  <p className="">الفيديوهات</p>
                </div>
              </div>
              <Link href="/mediaCenter">
                <div className="btnNews">
                  <div className="btnall">
                    <p>عرض المزيد</p>
                    <div className="arrowbtn">
                      <i className="bx bx-left-arrow-alt movearr"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
  
          {/* <!-- Swiper --> */}
          <NewsMobSwiper />
        </section>
  
        <section className="sparknum " data-aos="fade-up">
          <div className="allnums container bottom">
            <div className="cardnums cardnums1 ">
              <div className="titnumCard">
                <h1>30</h1>
                <h4>مشروع</h4>
                <img src={vuesax_broken} alt="" />
              </div>
              <p>تم التنفيذ تحت إشراف Spark Digital Hub</p>
  
              <img src={shb1} alt="" />
            </div>
  
            <div className="cardnums cardnums2">
              <div className="titnumCard">
                <h1>25</h1>
                <h4>شراكة</h4>
                <img src={vuesax_programming} alt="" />
              </div>
              <p>شراكات مع مختلف الجامعات والمنظمات والقطاع الخاص</p>
              <img src={shb2} alt="" />
            </div>
  
            <div className="cardnums cardnums3">
              <div className="titnumCard">
                <h1>30</h1>
                <h4>برنامج</h4>
                <img src={vuesax_monitor} alt="" />
              </div>
              <p>تم التنفيذ تحت إشراف Spark Digital Hub</p>
              <img src={shb3} alt="" />
            </div>
          </div>
          <div className="allnums container bottom">
            <div className="cardnums cardnums4">
              <div className="titnumCard">
                <h1>100</h1>
                <h4>الشباب</h4>
                <img src={vuesax_outline} alt="" />
              </div>
              <p>استفادوا نوادي سبارك المختلفة</p>
  
              <img src={shb4} alt="" />
            </div>
  
            <div className="cardnums cardnums5">
              <div className="titnumCard">
                <h1>750</h1>
                <h4>شاب وصبية</h4>
                <img src={Group_540} alt="" />
              </div>
              <p>استفادوا من خدمات ومشاريع Spark Makerspace</p>
              <img src={shb5} alt="" />
            </div>
  
            <div className="cardnums cardnums6">
              <div className="titnumCard">
                <h1>300</h1>
                <h4>شاب وصبية</h4>
                <img src={Group_540} alt="" />
              </div>
              <p>تتدربوا على موضوعات محو الأمية الرقمية</p>
              <img src={shb6} alt="" />
            </div>
          </div>
  
          <div className="imgleftcardnum bottom">
            <img src={Mask_Group_68} alt="" />
            <h1>
              سبارك <br />
              بالارقام
            </h1>
          </div>
        </section>
  
        {/* <!-- //////////////////////////////sparknumMobile////////////////////////// --> */}
        <section className="sparknuMob" data-aos="fade-up">
          {/* <!-- Swiper --> */}
          <SparknuMobSwiper />
        </section>
  
        <section className="Our_programs parrtn" data-aos="fade-up">
          <div className="rigth_programs bottom">
            <div className="imgpp">
              <img src={minidil_2} alt="" />
            </div>
  
            <h1>الشركاء</h1>
          </div>
  
          {/* <!-- Swiper --> */}
          <Our_programsSwiper />
        </section>
      </>





  );
};

export default Home;
