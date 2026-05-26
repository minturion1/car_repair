
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from 'react-router-dom';
import { getServices } from "../../../api/servicesApi";
import s from './Services.module.css';


function Services() {
    const {
    data: services = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["services", 3],
    queryFn: ()=> (getServices(3)),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
    console.log(services)
    if (isLoading) {
    return (
      <div className={s.skeleton}>
        <Skeleton
          style={{ marginBottom: "20px", borderRadius: "20px" }}
          baseColor="#2b2b2b"
          highlightColor="#fff"
          height={400}
          width="100%"
        />
      </div>
    );
  }

  if (isError) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }

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
            {services.map(service=> {
                return(
                <NavLink key={service.id} to={`/services/${service.documentId}`} style={{ backgroundImage: service.image?.url
                      ? `url(${service.image.url})`
                      : "none"
                  }} className={`${s.service} ${s.engine}`}>
                    <div className={s.service_name}>
                        {service.name}’
                    </div>
                </NavLink> 
                )
            })}
        </div>
    </div>
  );
}

export default Services;
