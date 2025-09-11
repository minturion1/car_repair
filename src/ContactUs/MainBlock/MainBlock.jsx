import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';
import s from './MainBlock.module.css';

export default function MainBlock() {
    return(
        <div className={s.container}>
            <ContactForm />
            <Contacts />
        </div>
    )
}