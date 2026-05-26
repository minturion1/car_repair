import Book from '../Book/Book';
import Footer from '../Footer/Footer';
import Header from './Header/Header';
import s from './Services.module.css';
import ServicesList from './ServicesList/ServicesList';

function Services() {
    return (
        <div className={s.container}>
            <Header />
            <ServicesList />
            <Book />
            <Footer />
        </div>
    );
}

export default Services;