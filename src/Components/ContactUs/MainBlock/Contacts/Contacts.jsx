import s from './Contacts.module.css';

export default function Contacts() {
    return (
        <div className={s.container}>
            <div className={s.title}>Contact Info</div>
            <div className={s.list}>
                <div className={s.item}>
                    <i className={`${s.icon} fa-solid fa-location-dot`}></i>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Location</div>
                        <div className={s.item_par}>1271 Gladstone Rd, Nassau. Bahamas</div>
                    </div>
                </div>
                <hr className={s.hr1} />
                <div className={s.item}>
                    <i className={`${s.icon} fa-solid fa-phone`}></i>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Phone</div>
                        <div className={s.item_par}>+1 234-789-0876</div>
                    </div>
                </div>
                <hr className={s.hr2} />
                <div className={s.item}>
                    <i className={`${s.icon} fa-solid fa-envelope`}></i>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Email</div>
                        <div className={s.item_par}>hello@autoworks.com</div>
                    </div>
                </div>
                <hr className={s.hr1} />
                <div className={s.item}>
                    <i className={`${s.icon} fa-solid fa-globe`}></i>
                    <div className={s.item_text}>
                        <div className={s.item_title}>Website</div>
                        <div className={s.item_par}>www.autoworks.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
