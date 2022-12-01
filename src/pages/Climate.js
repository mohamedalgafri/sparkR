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
<div class="imghederc">
    <img    class="imgheader" src={imgbgclime} alt=""/>
    <img    class="imgheadermob imgclimate" src={bgmob2} alt=""/>
</div>

<div class="allcontantheder bottom ">
    <div class="contantheder container">
        <div class="rightsideheder " >
            <div class="linkhed">
                <a  href="/">  الرئيسية / </a>
                <p>البرامج / </p>
                <p class="coloryl"> &nbsp; البيئة والمناخ </p>
            </div>

            <h1>البيئة والمناخ</h1>
            <p class="textcontanthed" >يدعم برنامج البيئة , المناخ الإجراءات التي تمكّن الشباب من ترجمة برامج تغير المناخ إلى سياسات فعالة لها تأثير قابل للقياس على رفاه الشباب ، ,وبما يضمن  تجنيب الأجيال المقبلة آثار تغير المناخ القاسية</p>
            <div class="btnall">
                <p> شاهد فيديو</p>
                <div class="arrowbtn">
                  <img    src={Polygon} alt=""/>
                  {/* <!-- <i class="bx bx-left-arrow-alt movearr"></i> --> */}
                </div>
            </div>

        </div>
        <div class="leftsideheder ">
            <img    src={imgheaderf} alt=""/>
        </div>
    </div>
</div>


</header>


<section class="projectsSection">


<div class="allprojectsSection container">
    <div class="titletexthed abouttit">
        <p>البيئة والمناخ</p>
        <div class="linetit"></div>
      </div>
      <h1> المشاريع</h1>

</div>

<div class="imgprojectsSection container ">

    <img    class="rightimgpro" src={rightimgpro} alt=""/>
    <img    class="leftimgpro" src={leftimgpro} alt=""/>

    <div class="allcardpro bottom ">

    <ClimateSwiper/>

    </div>


</div>

</section>


<section class="competitions container bottom">
<div class="rightsideCompetitions">

  {/* <img    class="shappp" src={shappp} alt=""/> */}
  <img    class="shappp" src={minidil_1} alt=""/>
    <div class="leftsideabout">

        <div class="imgleftus">
          <div class="imgtopus">
            <img    class="imgpp1" src={Rectangle_21} alt="" />
            <img    class="imgpp2" src={Rectangle_143} alt="" />
          </div>
          <div class="imgtopus">
            <img    class="imgpp3" src={Rectangle_20} alt="" />
            <img    class="imgpp4" src={Rectangle_22} alt="" />
          </div>
        </div>
      </div>

</div>
<div class="leftsideCompetitions">
    <div class="titletexthed abouttit">
        <p> البيئة والمناخ</p>
        <div class="linetit"></div>
      </div>
      <h1> مسابقة تحدى المناخ</h1>


      <p>
        مسابقة سنوية  تشجع إشراك الشباب في جهود العمل من أجل المناخ ، بدعم من خبراء في تكنولوجيا المناخ وريادة الأعمال، باستكشاف أدوات التفكير التصميمي المبتكرة لإيجاد حلول للتخفيف من آثار تغير المناخ وللتكيف المناخي في قطاعات ومجالات تقنية مقترحة. يساعد البرنامج المشاركين على تفعيل مهاراتهم الريادية، وفي النهاية إنشاء حلول وأفكار عمل تستجيب لتهديدات تغير المناخ في المنطقة
      </p>
</div>
</section>


<section class="explorerSection container bottom">
<div class="titleexplorer">
        <div class="righttitleexplorer">
            <div class="titletexthed abouttit">
                <p> البيئة والمناخ</p>
                <div class="linetit"></div>
              </div>
              <h1> انا مستكشف للطبيعة</h1>


        </div>
        <div class="lefttitleexplorer">
            <div class="btnall">
                <p> شارك صور</p>
                <div class="arrowbtn">
                  <img    src={share} alt="" class=""/>
                </div>
            </div>
        </div>
</div>

<div class="bodyexplorer">
    <div class="rightbodyexplorer">
        <p>
            يمكن لكل ملاحظة أن تساهم في علم التنوع البيولوجي،  شاركنا ملاحظاتك ،  التقط صور  من بيئتك ،  وانشرها عبر  معرضك العلمي الشخصي  لتساعدنا على التعرف على النباتات والحيوانات من حولك. تواصل مع مجتمع الشغوفين بالطبيعة والذين يمكنهم مساعدتك في معرفة المزيد! علاوة على ذلك، من خلال تسجيل ومشاركة ملاحظاتك ، ستنشئ بيانات ذات جودة بحثية للعلماء الذين يعملون لفهم الطبيعة وحمايتها بشكل أفضل.
            كل ما عليك فعله هو الملاحظة وارسال صورة مرفقة بمعلومات كنت قد اكتشفتها  وترغب في مشاركتها مع مجتمع الشغوفين بالطبيعة . 

        </p>

    </div>
    <div class="leftbodyexplorer">

        <div class="allcardbodyexplorer">
            <div class="cardbodyexplorer">
                <img    src={Rectangle25} alt=""/>
            </div>
            <div class="cardbodyexplorer hiddenmob">
                <img    src={Rectangle151} alt=""/>
            </div>
            <div class="cardbodyexplorer ">
                <img    src={Rectangle152} alt=""/>
            </div>

        </div>
        <div class="allcardbodyexplorer">
            <div class="cardbodyexplorer ">
                <img    src={Rectangle155} alt=""/>
            </div>
            <div class="cardbodyexplorer hiddenmob">
                <img    src={Rectangle154} alt=""/>
            </div>
            <div class="cardbodyexplorer ">
                <img    src={Rectangle153} alt=""/>
            </div>

        </div>



    </div>

</div>

<div>

</div>
</section>

<section class="titletextspark top ">
<img    class="imgsht" src={Ellipse_54} alt=""/>
<div class="alltitletextspark  container">
    <div class="righttextspark">
        <h1>كلام في <br/> <div class="linetext"></div>
           <span> البيئة والمناخ </span></h1>
    </div>
    <div class="lefttextspark">
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
