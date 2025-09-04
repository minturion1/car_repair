import services from './ServicesListData';
import s from './ServicesList.module.css';
import { NavLink } from 'react-router-dom';

function ServicesList() {
  return (
    <div className={s.container}>
        <div className={s.list}>
            {services.map((service) => {
            return(
                <NavLink to={`/services/${service.id}`} className={s.card}>
                  <img src={service.img} className={s.icon}></img>
                  <div className={s.title}>{service.title}</div>
                  <div className={s.par}>{service.par}</div>
                  <div className={s.overlay}>
                    <div className={s.overlayTitle}>{service.title}</div>
                    <div href="#" className={s.overlayLink}>Learn More <i class="fa-solid fa-arrow-up-right-from-square"></i></div>
                  </div>
              </NavLink>
            )
            })}
            
        
        </div>
    </div>
  );
}

export default ServicesList;
