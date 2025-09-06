import { useEffect } from "react";
import s from './ImageModal.module.css';

export default function ImageModal(props) {
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
        src={props.openedImage.image}
        alt={props.openedImage.id}
      />
      <button onClick={()=>{props.nextImage()}} className={s.nextBtn}>›</button>
    </div>
  );
}
