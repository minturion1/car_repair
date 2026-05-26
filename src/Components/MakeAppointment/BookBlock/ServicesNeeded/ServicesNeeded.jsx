import { useQuery } from '@tanstack/react-query';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getServiceNames } from '../../../../api/servicesApi';
import s from './ServicesNeeded.module.css';

function ServicesNeeded(props) {
   const {
      data: services = [],
      isLoading,
      isError,
      error,
    } = useQuery({
      queryKey: ["services", "appointment"],
      queryFn: getServiceNames,
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