import ContactsBlock from '../ContactsBlock/ContactsBlock';
import Footer from '../Footer/Footer';
import BookBlock from './BookBlock/BookBlock';
import Header from './Header/Header';
import s from './MakeAppointment.module.css';

function MakeAppointment() {
    return (
        <div className={s.container}>
            <Header />
            <BookBlock />
            <ContactsBlock />
            <Footer />
        </div>
    );
}

export default MakeAppointment;