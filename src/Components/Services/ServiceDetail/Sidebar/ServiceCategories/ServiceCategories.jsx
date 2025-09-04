

import s from './ServiceCategories.module.css';

function ServiceCategories(props) {
    return (
        <div className={s.container}>
            <div className={s.title}>Service Categories</div>
            <div className={s.list}>
                {props.services.map(service=> {
                    return <div className={s.item}>{service.title}</div>
                })}
                
            </div>
        </div>
    );
}

export default ServiceCategories;