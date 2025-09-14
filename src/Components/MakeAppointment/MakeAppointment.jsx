import s from './MakeAppointment.module.css';
import Header from './Header/Header';
import BookBlock from './BookBlock/BookBlock';
import Footer from '../Footer/Footer';
import ContactsBlock from '../ContactsBlock/ContactsBlock';

function MakeAppointment() {
    return (
        <div className={s.container}>
            <Header />
            <BookBlock />
            {/* <ContactsBlock /> */}
            <Footer />
        </div>
    );
}

export default MakeAppointment;