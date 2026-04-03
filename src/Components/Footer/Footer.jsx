
import s from './Footer.module.css';

function Footer() {
  return (
    <div className={s.container}>
        <div className={s.main}>
            <div className={s.left}>
                <div className={s.title}>
                    AutoWorks
                </div>
                <div className={s.par}>
                    We are commited to providing honest and transperent 
                    service, and we always explain any repairs  or services 
                    needed before we start work on your vehicle
                </div>
                <div className={s.opening}>
                    <div className={s.opening_title}>
                        Opening Hours
                    </div>
                    <div className={s.opening_par}>
                        Mon-Fri : 08.00 - 20.00
                    </div>
                    <div className={s.opening_par}>
                        Sat-Sun : 10.00 - 16.00
                    </div>
                </div>
            </div>
            <div className={s.columns}>
                <div className={s.column}>
                    <div className={s.column_title}>
                        Reach to Us
                    </div>
                    <div className={s.column_list}>
                        <div className={s.column_item}><i className="fa-solid fa-location-dot"></i> 1271 Gladstone Rd, Nassau, Bahamas</div>
                        <div className={s.column_item}><i className="fa-solid fa-phone"></i> +1 234-789-0876</div>
                        <div className={s.column_item}><i className="fa-solid fa-envelope"></i> hello@autoworks.com</div>
                        <div className={s.column_item}><i className="fa-solid fa-globe"></i>www.autoworks.com</div>
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.column_title}>
                        Quick Links
                    </div>
                    <div className={s.column_list}>
                        <a href='#' className={`${s.column_item} ${s.link}`}>About Us</a>
                        <a href='#' className={`${s.column_item} ${s.link}`}>Services</a>
                        <a href='#' className={`${s.column_item} ${s.link}`}>Pricing Plans</a>
                        <a href='#' className={`${s.column_item} ${s.link}`}>Appointment</a>
                    </div>
                </div>
                <div className={s.column}>
                    <div className={s.column_title}>
                        Connect with Us
                    </div>
                    <div className={s.column_list}>
                        <a href='#' className={`${s.column_item} ${s.link}`}><i className="fa-brands fa-square-youtube"></i> Youtube</a>
                        <a href='#' className={`${s.column_item} ${s.link}`}><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
                        <a href='#' className={`${s.column_item} ${s.link}`}><i className="fa-brands fa-square-twitter"></i> Twitter</a>
                        <a href='#' className={`${s.column_item} ${s.link}`}><i className="fa-brands fa-square-instagram"></i>Instagram</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={s.bottom}>Copyright © 2025 AutoWorks. All right reserved.</div>
    </div>
  );
}

export default Footer;
