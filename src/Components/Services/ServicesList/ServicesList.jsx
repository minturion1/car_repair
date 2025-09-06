import services from './ServicesListData';
import s from './ServicesList.module.css';
import { NavLink } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/v1/services/")
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className={s.skeleton}><Skeleton style={{ marginBottom: "20px", borderRadius: "20px" }} baseColor="#2b2b2b" highlightColor="#fff" count={3} height={400} width="100%" /></div>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;
  return (
    <div className={s.container}>
        <div className={s.list}>
            {services.map((service) => {
            return(
                <NavLink key={service.id} to={`/services/${service.id}`} className={s.card}>
                  <img alt={service.id} src={service.icon} className={s.icon}></img>
                  <div className={s.title}>{service.name}</div>
                  <div className={s.par}>{service.description}</div>
                  <div className={s.overlay}>
                    <div className={s.overlayTitle}>{service.name}</div>
                    <div href="#" className={s.overlayLink}>Learn More <i className="fa-solid fa-arrow-up-right-from-square"></i></div>
                  </div>
              </NavLink>
            )
            })}
            
        
        </div>
    </div>
  );
}

export default ServicesList;
