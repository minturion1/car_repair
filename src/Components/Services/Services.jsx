import Header from './Header/Header';
import ServicesList from './ServicesList/ServicesList';
import s from './Services.module.css';
import Book from '../Book/Book';
import Footer from '../Footer/Footer';

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