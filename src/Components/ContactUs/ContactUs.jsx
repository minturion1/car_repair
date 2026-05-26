import Footer from '../Footer/Footer';
import s from './ContactUs.module.css';
import Header from './Header/Header';
import MainBlock from './MainBlock/MainBlock';
import Map from './Map/Map';
function ContactUs() {
    return (
        <div className={s.container}>
            <Header />
            <MainBlock />
            <Map />
            <Footer />
        </div>
    );
}

export default ContactUs;