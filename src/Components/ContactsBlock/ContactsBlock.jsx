import { NavLink } from 'react-router-dom';
import s from './ContactsBlock.module.css';

function ContactsBlock() {
    return (
        <div className={s.container}>
            <div className={s.title}>
                Do you have <span>special offers</span> or <span>questions</span> for us?
            </div>
            <NavLink to="/contact-us" className={s.button}>Contact Us</NavLink>
        </div>
    )
}

export default ContactsBlock;