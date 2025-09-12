import s from './ServicesNeeded.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ServicesNeeded(props) {
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
      if (loading) return <div className={s.skeleton}><Skeleton style={{ marginBottom: "20px", borderRadius: "20px" }} baseColor="#2b2b2b" highlightColor="#fff" count={3} height={400} width="100%" /></div>;
      if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;
    return (
        <div className={s.container}>
            <div className={s.label}>Select Services Needed</div>
            <div className={s.services}>
                {services.map(service=> {
                return(
                    <div onClick={()=>props.onServiceClick(service.id, service.name)} className={props.formData.services.find(s=>s.id===service.id) ? `${s.item} ${s.active}` : `${s.item}`}>{service.name}</div>
                )
            })}
            <div onClick={()=>props.onServiceClick("others", "Others")} className={props.formData.services.find(s=>s.id==="others") ? `${s.item} ${s.active}` : `${s.item}`}>Others</div>
            </div>
            
        </div>
    )
}

export default ServicesNeeded;