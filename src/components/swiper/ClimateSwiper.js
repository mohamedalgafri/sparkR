// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import logocardp3  from '../../images/logocardp3.svg'
import logocardpr1  from '../../images/logocardpr1.svg'
import sadocardp3  from '../../images/sadocardp3.svg'

import logocardp2  from '../../images/logocardp2.svg'
import imgshadowcard  from '../../images/imgshadowcard.svg'



export default function LeadersSwiper () {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints= {{
        700: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
      }}
    >

<SwiperSlide>
      <div className="cardproo ">
                    <img  className="logocardpr" src={logocardpr1} alt=""/>
                    <img  className="imgshadowcard" src={imgshadowcard} alt=""/>
                    <div className="titlecardproo">
                        <h4 > GO Green </h4>
                        <p >جو جرين</p>
                    </div>
    
                    <p>برنامج  لاستقطاب المواهب والقادة الشباب من مختلف المجالات، وتوفير المعارف والفرصة أمامهم للانطلاق في مجال الحلول النظيفة </p>
    
                    <div className="alltextcardt">
                        <div className="textcardt">
                            <div className="trueantext">
                                <i class='bx bx-check' ></i>
                                <p>الطاقة النظيفة والمتجددة</p>
                            </div>
                            <div className="trueantext">
                                <i class='bx bx-check' ></i>
                                <p>  المياه والصرف الصحي</p>
                            </div>
                        </div>
        
                        <div className="textcardt">
                            <div className="trueantext">
                                <i class='bx bx-check' ></i>
                                <p> تقليل الانبعاثات</p>
                            </div>
                            <div className="trueantext">
                                <i class='bx bx-check' ></i>
                                <p>  الزراعة</p>
                            </div>
                        </div>
                    </div>
    
                    <p>ويشتمل البرنامج على باقة متنوعة من ورش العمل التدريبية والجلسات التعليمية المبتكرة والزيارات الميدانية. وتركز ورش العمل على مختلف مجالات الحلول الخضراء/ الذكية / النظيفة، وتسلط الضوء على استخدام التقنيات الإحلالية، وتعميق معلوماتهم حول ريادة الأعمال.</p>
                </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="cardproo cardmedpro ">
                    <img  className="logocardpr" src={logocardp3} alt=""/>
                    <img  className="imgshadowcard" src={sadocardp3} alt=""/>
                    <div className="titlecardproo">
                        <h4 >Sustainable Cities </h4>
                        <p > مدن مستدامة</p>
                    </div>
    
                    <p>يهدف البرنامج إلى تعزيز المسؤولية الاجتماعية وقيادة الشباب لتحقيق أهداف التنمية المستدامة (SDGs) ينقسم البرنامج إلى مرحلتين
                    </p>
    
                    <div className="trueantext">
                        <i class='bx bx-check' ></i>
                        <p>   المرحلة الأولى: لقاءات تفاعلية تهدف إلى تزويد المشاركين بالمعرفة المفهومية للمدن الذكية</p>
                    </div>
                    <div className="trueantext">
                        <i class='bx bx-check' ></i>
                        <p>المرحلة الثانية: مصممة لتكون ورش عمل لبناء القدرات حيث يعمل الطلاب في فرق للتوصل إلى حلول مبتكرة لتحديات المدينة الذكية</p>
                    </div>


      </div>

      </SwiperSlide>

      <SwiperSlide>
      <div className="cardproo ">
                    <img  className="logocardpr" src={logocardp2} alt=""/>
                    <img  className="imgshadowcard" src={imgshadowcard} alt=""/>
                    <div className="titlecardproo">
                        <h4 > Climate Justice Ambassadors  </h4>
                        <p > سفراء العدالة المناخية</p>
                    </div>
                    <p>
                        ننشر رؤيتنا للعدالة المناخية والمواطنة العالمية لمدارسنا وعائلاتنا وأصدقائنا من خلال تقديم العروض وتشجيع المبادرات الشبابية. مهمتنا الأساسية هي تسخير قوة الثقافة والفنون والابتكار الاجتماعي من أجل العمل المناخي، وحيث يمكن للرسم والتصميم والتصوير الفوتوغرافي، والموسيقى، والعروض الفنية أن تروي قصصًا تتخطى الحواجز الثقافية، وإيجاد التعاطف مع المجتمعات المحلية التي تواجه مخاطر متزايدة ناجمة عن الاضطرابات البيئة وتغير المناخ
                    </p>
                </div>
      </SwiperSlide>

    </Swiper>
  );
};