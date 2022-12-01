import React from 'react'

import bgabout from '../images/bgabout.png'
import bgaboutmob from '../images/bgaboutmob.png'

import minidil from '../images/رؤيتنا minidil.svg'
import imggd from '../images/imggd.svg'
import imggf2 from '../images/imggf2.svg'
import imggf3 from '../images/imggf3.svg'
import imgrightoo from '../images/imgrightoo.svg'
import imhhgp from '../images/imhhgp.svg'



const About = () => {
  return (
    <div>
            <header>
        <div className="imghederc imghedercabout">
            <img className="imgheader" src={bgabout} alt=""/>
            <img className="imgheadermob bgmobred" src={bgaboutmob} alt=""/>
        </div>

        <div className="allcontantheder allcontanthederabout top">
            <div className="contanthede container">
                <div className="titletextabout">
                    <h1>عن سبارك</h1>
                    <p>كل ما هو حقيقي يجب تخيله في يوم من الأيام</p>
                </div>

                <div className="tappabout">

                    <div className="linetitleab"></div>

                    <div className="aboutlink">
                        <a href="index.html">الرئسية</a>
                        <div className="arrowbtn hedarr">
                            <i className="bx bx-left-arrow-alt movearr"></i>
                          </div>
                          <a>من نحن</a>
                    </div>

                    <div className="linetitleab"></div>

                </div>

                <div className="bodyheadabout top">
                    <p>هي منظمة تنموية فلسطينية غير حكومية مستقلة تعمل في مجالات التعليم وريادة الأعمال والتحول الرقمي والثقافة والتراث؛ تأسست في 2018 وسجلت في يناير 2019
                        تعزز Spark الإبداع والابتكار خلال تدخلاتها لتوليد القيم الأساسية في مجتمعنا، ليكون مجتمعًا مزدهرًا وناجحًا يستطيع فيه جميع الأشخاص الوصول إلى الأدوات المناسبة لإطلاق أفكار جديدة وخلق فرص عمل مبتكرة؛ تؤمن سبارك بالدور الحيوي للإبداع والابتكار كجزء أساسي في أي حلول مقدمة للشباب والمراهقين الفلسطينيين وأولئك الذين يبحثون عن فرصة لتطوير أنفسهم
                    </p>
                </div>
              
            </div>
        </div>

      
    </header>




    <section className="bodyabout container">

        <div className="allcardabout ">
            <div className="cardabout right">
                <div className="titlebabout">
                    <img src={minidil} alt=""/>
                    <h1>رؤيتنا </h1>
                </div>
                <p>نحو مجتمع فلسطيني مبدع يستخدم فيه كل شاب وشابة إبداعاتهم لتشكيل مستقبلهم بطريقة فعالة</p>
            </div>

            <div className="linecardabout"></div>

            <div className="cardabout left">
                <div className="titlebabout">
                    <img src={imggd} alt=""/>
                    <h1>مهمتنا </h1>
                </div>
               <p>سبارك هو مركز للابتكار يوفر للشباب والمراهقين الفلسطينيين بيئة تعليمية ملهمة ومبتكرة وتحفيزية من أجل تعزيز إبداعهم من أجل تعزيز وصولهم إلى فرص عمل لائقة من منظور رقمي</p>
            </div>
        </div>

        <div className="allcardabout ">
            <div className="cardabout right">
                <div className="titlebabout">
                    <img src={imggf2} alt=""/>
                    <h1>القيم </h1>
                </div>
               <p>تؤمن سبارك وتعزز القيم التالية في كل ما نقوم به: المساءلة والنزاهة والشفافية والمساواة والعدالة وسيادة القانون والإدماج وعدم الإضرار</p>
            </div>

            <div className="linecardabout"></div>

            <div className="cardabout left">
                <div className="titlebabout">
                    <img src={imggf3} alt=""/>
                    <h1>الفئات المستهدفة  </h1>
                </div>
              <p>الشباب والمراهقون ((بنين، بنات، نساء، رجال)) من ذوي الإعاقة / بدون إعاقة بعيدًا عن أي جانب من جوانب التمييز (العرق، اللون، الدين، الإعاقة، المنطقة الجغرافية وغيرها) في قطاع غزة، فلسطين</p>
            </div>
        </div>

  

    </section>



    <section className="objectives container " id="aboutUs">

        <div className="rightObjectives right">
            <div className="titlerightObjectives">
                <h1>الأهداف</h1>
                <p>تبذل سبارك جهودها لتحقيق أهدافها وهي</p>
            </div>

            <ul>
                <li>حشد وتعبئة قوة الشباب واليافعين في قطاع غزة وتزويدهم بتدخلات مبتكرة في مجالات (تعليمية، اقتصادية، اجتماعية، ثقافية) من شأنها تحسين ظروفهم المعيشية</li> 
                <li>زيادة حساسية أفراد المجتمع واستجابة صانعي القرار تجاه حقوق الشباب والمراهقين وقضاياهم وأولوياتهم </li>
                <li>تحسين جودة الخدمات المقدمة من قبل SPARK والحفاظ على مستوى متزايد من الرضا بين مختلف أصحاب المصلحة.</li>
            </ul>

        </div>
        <div className="leftObjectives left">
            <img src={imgrightoo} alt=""/>
        </div>

    </section>



    <section className="objectives objectivesrev container">

        <div className="rightObjectives left">
            <div className="titlerightObjectives">
                <h1>ما الذي يميزنا</h1>
                <p>تسعى سبارك لتكون المميزة الحضارية دائماً</p>
            </div>

            <ul>
                <li>أول فضاء صناع للشباب واليافعين في قطاع غزة</li>
                <li>خبرات شاملة بين الموظفين الذين عملوا في هذه المجالات 20 سنة</li>
                <li>حرية الوصول إلى جميع خدماتنا للشباب والمراهقين من جميع أنحاء قطاع غزة</li>
            </ul>

        </div>
        <div className="leftObjectives right">
            <img src={imhhgp} alt=""/>
        </div>

    </section>


    </div>
  )
}

export default About