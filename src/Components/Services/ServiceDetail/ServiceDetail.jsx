import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import s from './ServiceDetail.module.css';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Nav from '../../Nav/Nav';
import Features from './Features/Features';
import Book from '../../Book/Book';
import FAQ from '../../FAQ/FAQ';

function ServiceDetail() {
    const [services, setServices] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get("https://car-repair-backend-79o5.onrender.com/api/v1/services/")
        .then((response) => {
            setServices(response.data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error);
            setLoading(false);
        });
    }, []);
    if (loading) return ;
    
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
                    <Features features={service.features} />
                    <FAQ />
                    
                </div>
                <Sidebar services={services} />
            </div>
            
            <Book />
            <Footer />
        </div>
    );
}

export default ServiceDetail;