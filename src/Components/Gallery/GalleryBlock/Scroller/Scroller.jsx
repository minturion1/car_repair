import React, { useRef } from "react";
import s from './Scroller.module.css';
import services from '../../../Services/ServicesList/ServicesListData'


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

  return (
    <div className={s.carouselWrapper}>
      <button className={`${s.arrow} ${s.left}`} onClick={() => scroll("left")}>
        <i class="fa-solid fa-arrow-left"></i>
      </button>

      <div className={s.serviceCarousel} ref={carouselRef}>
        <div onClick={() => props.onFilter("all")} className={!props.filteredServiceId ? `${s.active} ${s.serviceCard}` : `${s.serviceCard}`}>
            All
          </div>
        {services.map((service, index) => (
          <div onClick={()=> {props.onFilter(service.id)}} className={props.filteredServiceId===service.id ? `${s.active} ${s.serviceCard}` : `${s.serviceCard}`} key={index}>
            {service.title}
          </div>
        ))}
      </div>

      <button className={`${s.arrow} ${s.right}`} onClick={() => scroll("right")}>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}
