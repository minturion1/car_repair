import { useQuery } from '@tanstack/react-query';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from 'react-router-dom';
import { getServices } from '../../../api/servicesApi';
import s from './ServicesList.module.css';

function ServicesList() {
  const {
    data: services = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["services", "all"],
    queryFn: getServices,
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
          height={250}
          width="100%"
        />
        <Skeleton
          style={{ marginBottom: "20px", borderRadius: "20px" }}
          baseColor="#2b2b2b"
          highlightColor="#fff"
          height={250}
          width="100%"
        />
        <Skeleton
          style={{ marginBottom: "20px", borderRadius: "20px" }}
          baseColor="#2b2b2b"
          highlightColor="#fff"
          height={250}
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
        <div className={s.list}>
            {services.map((service) => {
            return(
                <NavLink key={service.id} to={`/services/${service.documentId}`} className={s.card}>
                  <img alt={service.id} src={`${service.icon.url}`} className={s.icon}></img>
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
