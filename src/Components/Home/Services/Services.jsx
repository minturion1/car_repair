
import { NavLink } from 'react-router-dom';
import s from './Services.module.css';

function Services() {
  return (
    <div className={s.container}>
        <div className={s.top}>
            <div className={s.text}>
                
                <div className={s.pretitle}>
                    What we offer
                </div>
                <div className={s.title}>
                    Our Services
                </div>
            </div>
             
            <NavLink to="/services" className={s.view_more}><span>View more</span></NavLink>
        </div>
        
        <div className={s.list}>
            <div className={`${s.service} ${s.engine}`}>
                <div className={s.service_name}>
                    Engine Repair
                </div>
            </div>
            <div className={`${s.service} ${s.brake}`}>
                <div className={s.service_name}>
                    Brake Repair
                </div>
            </div>
            <div className={`${s.service} ${s.transmission}`}>
                <div className={s.service_name}>
                    Transmission Repair
                </div>
            </div>
            <div className={`${s.service} ${s.suspension}`}>
                <div className={s.service_name}>
                    Suspension Repair
                </div>
            </div>
        </div>
    </div>
  );
}

export default Services;
