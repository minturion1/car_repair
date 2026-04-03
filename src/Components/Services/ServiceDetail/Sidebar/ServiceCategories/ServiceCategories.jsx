

import { NavLink } from 'react-router-dom';
import s from './ServiceCategories.module.css';

function ServiceCategories(props) {
    return (
        <div className={s.container}>
            <div className={s.title}>Service Categories</div>
            <div className={s.list}>
                {props.services && props.services.length > 0 ? (
                    props.services.map(service => (
                        <NavLink onClick={()=>props.resetSearch()} to={`/services/${service.documentId}`} key={service.id} className={({ isActive }) =>
                            isActive ? `${s.item} ${s.active}` : s.item
                            }>
                            {service.name}
                        </NavLink>
                    ))
                ) : (
                    <div className={s.empty}>There are no such services</div>
                )}
                
            </div>
        </div>
    );
}

export default ServiceCategories;