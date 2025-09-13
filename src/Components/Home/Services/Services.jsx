
import { NavLink } from 'react-router-dom';
import s from './Services.module.css';
import {useState, useEffect} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
    if (loading) return <div className={s.skeleton}><Skeleton style={{ marginBottom: "20px", borderRadius: "20px" }} baseColor="#2b2b2b" highlightColor="#fff" height={400} width="100%" /></div>;
    if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div className={s.container}>
        <div className={s.top}>
            <div className={s.text}>
                
                <div className={s.pretitle}>
                    What we offer
                </div>
                <div className={s.title}>
                    Our Services
                </div>
            </div>
             
            <NavLink to="/services" className={s.view_more}><span>View more</span></NavLink>
        </div>
        
        <div className={s.list}>
            {services.slice(0,4).map(service=> {
                return(
                <NavLink to={`/services/${service.id}`} style={{ backgroundImage: `url(${service.image})` }} className={`${s.service} ${s.engine}`}>
                    <div className={s.service_name}>
                        {service.name}
                    </div>
                </NavLink> 
                )
            })}
        </div>
    </div>
  );
}

export default Services;
