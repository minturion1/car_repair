
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import s from './ServiceDetail.module.css';
import services from '../ServicesList/ServicesListData';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Nav from '../../Nav/Nav';

function ServiceDetail() {
    const { id } = useParams();
    const service = services.find((s) => s.id === Number(id));

     if (!service) {
            return <h2>Service id={id} has not found</h2>; 
        }
    return (
        <div className={s.container}>
            <div className={s.navigation}>
                <Nav />
            </div>
            <div className={s.way}>Home / Services / Details</div>
            <div className={s.main}>
                <div className={s.mainContent}>

                    <Header service={service}/>
                </div>
                <Sidebar services={services} />
            </div>
            
            <Footer />
        </div>
    );
}

export default ServiceDetail;