
import s from './Testimonials.module.css';
import client1 from './images/client1.png';
import client2 from './images/client2.png';
import client3 from './images/client3.png';


function Testimonials() {
  return (
    <div className={s.container}>
        <div className={s.top}>
            <div className={s.text}>
                
                <div className={s.pretitle}>
                    Testimonials
                </div>
                <div className={s.title}>
                    What Our Clients Say
                </div>
            </div>
        </div>
            <div className={s.review}>
                “I have been taking my car to AutoWorks for years and have
                always had a great experience. The staff is knowledgeable
                and friendly, and they always take the time to explain the
                repairs needed. I highly recommend them for anyone looking
                for reliable auto repair services."
            </div>
            <div className={s.stars}>
                <i className={s.star} class="fa-solid fa-star"></i>
                <i className={s.star} class="fa-solid fa-star"></i>
                <i className={s.star} class="fa-solid fa-star"></i>
                <i className={s.star} class="fa-solid fa-star"></i>
                <i className={s.star} class="fa-solid fa-star"></i>
            </div>
        <div className={s.clients}>
            <div className={`${s.client} ${s.active}`}>
                <div className={s.client_info}>
                    <img src={client1} className={s.client_photo}></img>
                    <div className={s.client_text}>
                        <div className={s.client_name}>Sarah Tumiwa</div>
                        <div className={s.client_par}>California, USA</div>
                    </div>
                </div>
            </div>
            <div className={s.client}>
                <div className={s.client_info}>
                    <img src={client2} className={s.client_photo}></img>
                    <div className={s.client_text}>
                        <div className={s.client_name}>John Dolton</div>
                        <div className={s.client_par}>New York, USA</div>
                    </div>
                </div>
            </div>
            <div className={s.client}>
                <div className={s.client_info}>
                    <img src={client3} className={s.client_photo}></img>
                    <div className={s.client_text}>
                        <div className={s.client_name}>Angela Jolie</div>
                        <div className={s.client_par}>Chicago, USA</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default Testimonials;
