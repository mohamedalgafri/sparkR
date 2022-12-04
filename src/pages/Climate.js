import React from 'react'

import imgbgclime from "../images/imgbgclime.svg"
import bgmob2 from "../images/bgmob2.png"
import Polygon from "../images/Polygon 3.svg"
import imgheaderf from "../images/imgheaderf.svg"
import minidil_1 from "../images/minidil-1.svg"
import Rectangle_21 from "../images/Rectangle 21.png"
import Rectangle_143 from "../images/Rectangle 143.svg"
import Rectangle_20 from "../images/Rectangle 20.png"
import Rectangle_22 from "../images/Rectangle 22.png"
import shappp from "../images/shappp.svg"
import rightimgpro from "../images/rightimgpro.svg"
import leftimgpro from "../images/leftimgpro.svg"
import ClimateSwiper from "../components/swiper/ClimateSwiper"
import share from "../images/share.svg"
import Rectangle25 from "../images/Rectangle 25.svg"
import Rectangle151 from "../images/Rectangle 151.svg"
import Rectangle152 from "../images/Rectangle 152.svg"
import Rectangle155 from "../images/Rectangle 155.svg"
import Rectangle154 from "../images/Rectangle 154.svg"
import Rectangle153 from "../images/Rectangle 153.svg"
import Ellipse_54 from "../images/Ellipse 54.svg"
import tex from "../images/tex.svg"
import tex2 from "../images/tex2.svg"

const Climate = () => {
  return (
    <>
    <header>
<div className="imghederc">
    <img    className="imgheader" src={imgbgclime} alt=""/>
    <img    className="imgheadermob imgclimate" src={bgmob2} alt=""/>
</div>

<div className="allcontantheder bottom ">
    <div className="contantheder container">
        <div className="rightsideheder " >
            <div className="linkhed">
                <a  href="/">  الرئيسية / </a>
                <p>البرامج / </p>
                <p className="coloryl"> &nbsp; البيئة والمناخ </p>
            </div>

            <h1>البيئة والمناخ</h1>
            <p className="textcontanthed" >يدعم برنامج البيئة , المناخ الإجراءات التي تمكّن الشباب من ترجمة برامج تغير المناخ إلى سياسات فعالة لها تأثير قابل للقياس على رفاه الشباب ، ,وبما يضمن  تجنيب الأجيال المقبلة آثار تغير المناخ القاسية</p>
            <div className="btnall">
                <p> شاهد فيديو</p>
                <div className="arrowbtn">
                  <img    src={Polygon} alt=""/>
                  {/* <!-- <i className="bx bx-left-arrow-alt movearr"></i> --> */}
                </div>
            </div>

        </div>
        <div className="leftsideheder ">
            <img    src={imgheaderf} alt=""/>
        </div>
    </div>
</div>


</header>


<section className="projectsSection">


<div className="allprojectsSection container">
    <div className="titletexthed abouttit">
        <p>البيئة والمناخ</p>
        <div className="linetit"></div>
      </div>
      <h1> المشاريع</h1>

</div>

<div className="imgprojectsSection container ">

    <img    className="rightimgpro" src={rightimgpro} alt=""/>
    <img    className="leftimgpro" src={leftimgpro} alt=""/>

    <div className="allcardpro bottom ">

    <ClimateSwiper/>

    </div>


</div>

</section>


<section className="competitions container bottom">
<div className="rightsideCompetitions">

  {/* <img    className="shappp" src={shappp} alt=""/> */}
  <img    className="shappp" src={minidil_1} alt=""/>
    <div className="leftsideabout">

        <div className="imgleftus">
          <div className="imgtopus">
            <img    className="imgpp1" src={Rectangle_21} alt="" />
            <img    className="imgpp2" src={Rectangle_143} alt="" />
          </div>
          <div className="imgtopus">
            <img    className="imgpp3" src={Rectangle_20} alt="" />
            <img    className="imgpp4" src={Rectangle_22} alt="" />
          </div>
        </div>
      </div>

</div>
<div className="leftsideCompetitions">
    <div className="titletexthed abouttit">
        <p> البيئة والمناخ</p>
        <div className="linetit"></div>
      </div>
      <h1> مسابقة تحدى المناخ</h1>


      <p>
        مسابقة سنوية  تشجع إشراك الشباب في جهود العمل من أجل المناخ ، بدعم من خبراء في تكنولوجيا المناخ وريادة الأعمال، باستكشاف أدوات التفكير التصميمي المبتكرة لإيجاد حلول للتخفيف من آثار تغير المناخ وللتكيف المناخي في قطاعات ومجالات تقنية مقترحة. يساعد البرنامج المشاركين على تفعيل مهاراتهم الريادية، وفي النهاية إنشاء حلول وأفكار عمل تستجيب لتهديدات تغير المناخ في المنطقة
      </p>
</div>
</section>


<section className="explorerSection container bottom">
<div className="titleexplorer">
        <div className="righttitleexplorer">
            <div className="titletexthed abouttit">
                <p> البيئة والمناخ</p>
                <div className="linetit"></div>
              </div>
              <h1> انا مستكشف للطبيعة</h1>


        </div>
        <div className="lefttitleexplorer">
            <div className="btnall">
                <p> شارك صور</p>
                <div className="arrowbtn">
                  <img    src={share} alt="" className=""/>
                </div>
            </div>
        </div>
</div>

<div className="bodyexplorer">
    <div className="rightbodyexplorer">
        <p>
            يمكن لكل ملاحظة أن تساهم في علم التنوع البيولوجي،  شاركنا ملاحظاتك ،  التقط صور  من بيئتك ،  وانشرها عبر  معرضك العلمي الشخصي  لتساعدنا على التعرف على النباتات والحيوانات من حولك. تواصل مع مجتمع الشغوفين بالطبيعة والذين يمكنهم مساعدتك في معرفة المزيد! علاوة على ذلك، من خلال تسجيل ومشاركة ملاحظاتك ، ستنشئ بيانات ذات جودة بحثية للعلماء الذين يعملون لفهم الطبيعة وحمايتها بشكل أفضل.
            كل ما عليك فعله هو الملاحظة وارسال صورة مرفقة بمعلومات كنت قد اكتشفتها  وترغب في مشاركتها مع مجتمع الشغوفين بالطبيعة . 

        </p>

    </div>
    <div className="leftbodyexplorer">

        <div className="allcardbodyexplorer">
            <div className="cardbodyexplorer">
                <img    src={Rectangle25} alt=""/>
            </div>
            <div className="cardbodyexplorer hiddenmob">
                <img    src={Rectangle151} alt=""/>
            </div>
            <div className="cardbodyexplorer ">
                <img    src={Rectangle152} alt=""/>
            </div>

        </div>
        <div className="allcardbodyexplorer">
            <div className="cardbodyexplorer ">
                <img    src={Rectangle155} alt=""/>
            </div>
            <div className="cardbodyexplorer hiddenmob">
                <img    src={Rectangle154} alt=""/>
            </div>
            <div className="cardbodyexplorer ">
                <img    src={Rectangle153} alt=""/>
            </div>

        </div>



    </div>

</div>

<div>

</div>
</section>

<section className="titletextspark top ">
<img    className="imgsht" src={Ellipse_54} alt=""/>
<div className="alltitletextspark  container">
    <div className="righttextspark">
        <h1>كلام في <br/> <div className="linetext"></div>
           <span> البيئة والمناخ </span></h1>
    </div>
    <div className="lefttextspark">
      <img    src={tex} alt=""/>
        <p>منصة حرة  تدعم نشر موضوعات ومقالات  حول البيئة والتغير المناخي، والقضايا ذات العلاقة، وتشجع على المشاركة وتبادل الآراء</p>
        <img    src={tex2} alt=""/>
      </div>

</div>

</section>


</>
  )
}

export default Climate
