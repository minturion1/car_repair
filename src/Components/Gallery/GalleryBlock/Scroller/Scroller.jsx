import React, { useRef } from "react";
import s from './Scroller.module.css';
import services from '../../../Services/ServicesList/ServicesListData'
import { useQuery } from "@tanstack/react-query";
import { getServiceNames } from "../../../../api/servicesApi";
import Skeleton from "react-loading-skeleton";


export default function Scroller(props) {

  
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 220;
      carouselRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

  const {
    data: services = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["services", "all"],
    queryFn: getServiceNames,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
    if (isLoading) {
    return (
      <div className={s.skeleton}>
        <Skeleton
          style={{ marginBottom: "20px", borderRadius: "20px" }}
          baseColor="#2b2b2b"
          highlightColor="#fff"
          height={100}
          width="100%"
        />
      </div>
    );
  }

  if (isError) {
    return <p style={{ color: "red" }}>Error: {error.message}</p>;
  }

  return (
    <div className={s.carouselWrapper}>
      <button className={`${s.arrow} ${s.left}`} onClick={() => scroll("left")}>
        <i class="fa-solid fa-arrow-left"></i>
      </button>

      <div className={s.serviceCarousel} ref={carouselRef}>
        <div onClick={() => props.setServiceId("all")} className={props.serviceId==='all' ? `${s.active} ${s.serviceCard}` : `${s.serviceCard}`}>
            All
          </div>
        {services.map((service, index) => (
          <div onClick={()=> {props.setServiceId(service.documentId)}} className={props.serviceId===service.documentId ? `${s.active} ${s.serviceCard}` : `${s.serviceCard}`} key={index}>
            {service.name}
          </div>
        ))}
      </div>

      <button className={`${s.arrow} ${s.right}`} onClick={() => scroll("right")}>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
