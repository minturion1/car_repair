import { useEffect } from "react";
import s from './ImageModal.module.css';
import { baseURL } from "../../../../../api/servicesApi";

export default function ImageModal(props) {
  // debugger;
  console.log(props.openedImage);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className={s.openedContainer}>
      <div className={s.cross} onClick={props.onClose}>×</div>
      <button onClick={()=>{props.previousImage()}} className={s.prevBtn}>‹</button>
      <img
        className={s.openedImage}
        src={`${baseURL}${props.openedImage.image.url}`}
        alt={props.openedImage.service.name}
      />
      <button onClick={()=>{props.nextImage()}} className={s.nextBtn}>›</button>
    </div>
  );
}
