import s from './ContactUs.module.css';
import Header from './Header/Header';
import MainBlock from './MainBlock/MainBlock';
function ContactUs() {
    return (
        <div className={s.container}>
            <Header />
            <MainBlock />
        </div>
    );
}

export default ContactUs;