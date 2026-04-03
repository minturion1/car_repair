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
import { useQuery } from '@tanstack/react-query';
import { getServiceById } from '../../../api/servicesApi';
import Skeleton from 'react-loading-skeleton';
import ServiceDetailContent from './ServiceDetailContent';

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