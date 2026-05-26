import Book from '../../Book/Book';
import Footer from '../../Footer/Footer';
import Nav from '../../Nav/Nav';
import s from './ServiceDetail.module.css';
import ServiceDetailContent from './ServiceDetailContent';
import Sidebar from './Sidebar/Sidebar';

function ServiceDetail() {
    
    return (
        <div className={s.container}>
            <div className={s.navigation}>
                <Nav />
            </div>
            <div className={s.way}>Home / Services / Details</div>
            <div className={s.main}>
                <ServiceDetailContent />
                <Sidebar />
            </div>
            
            <Book />
            <Footer />
        </div>
    );
}

export default ServiceDetail;