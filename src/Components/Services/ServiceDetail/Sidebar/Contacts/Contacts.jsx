

import s from './Contacts.module.css';

function Contacts(props) {
    return (
        <div className={s.container}>
            <div className={s.column_list}>
                <div className={s.column_item}><i class="fa-solid fa-location-dot"></i> 1271 Gladstone Rd, Nassau, Bahamas</div>
                <div className={s.column_item}><i class="fa-solid fa-phone"></i> +1 234-789-0876</div>
                <div className={s.column_item}><i class="fa-solid fa-envelope"></i> hello@autoworks.com</div>
                <div className={s.column_item}><i class="fa-solid fa-globe"></i>www.autoworks.com</div>
            </div>
        </div>
    );
}

export default Contacts;