import image from './images/toyota.jpg'
import s from './WhyChooseUs.module.css';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function WhyChooseUs() {
  return (
    <div className={s.container}>
        <div className={s.top}>
            <div className={s.text}>
                
                
                <div className={s.title}>
                    Why Choose Us?
                </div>
                <div className={s.posttitle}>
                    We're here for wharever you want
                </div>
            </div>
             
        </div>
        <div className={s.main}>
            <img src={image} alt="carimage" className={s.image} />
            <div className={s.right}>
                <div className={s.card}>
                    <img src={icon1} className={s.card_icon}></img>
                    <div className={s.card_text}>
                        <div className={s.card_title}>Competitive pricing</div>
                        <div className={s.card_par}>
                            We understand that auto repair can be expensive, 
                            which is why we offer competitive pricing for all 
                            of our services. We strive to provide affordable 
                            solutions without sacrificing quality.
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <img src={icon2} className={s.card_icon}></img>
                    <div className={s.card_text}>
                        <div className={s.card_title}>Fast and efficient service</div>
                        <div className={s.card_par}>
                            We know that your time is valuable, which is why we work 
                            quickly and efficiently to get your car back on the road 
                            as soon as possible. Our team is dedicated to completing 
                            your repairs in a timely manner without compromising quality.
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <img src={icon3} className={s.card_icon}></img>
                    <div className={s.card_text}>
                        <div className={s.card_title}>Experienced and certified technicians</div>
                        <div className={s.card_par}>
                            Our team of technicians is highly trained and experienced in 
                            all aspects of auto repair. We only hire certified 
                            professionals who have a proven track record of delivering 
                            high-quality work.
                        </div>
                    </div>
                </div>
                <div className={s.card}>
                    <img src={icon4} className={s.card_icon}></img>
                    <div className={s.card_text}>
                        <div className={s.card_title}>Use of high-quality part and equipment</div>
                        <div className={s.card_par}>
                            We only use the highest quality parts and equipment for all 
                            of our repairs. We believe that using top-of-the-line components 
                            helps to ensure the longevity and reliability of your vehicle.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WhyChooseUs;
