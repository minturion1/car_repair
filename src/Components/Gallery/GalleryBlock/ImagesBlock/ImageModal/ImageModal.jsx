import { useEffect, useState } from "react";
import s from './ImageModal.module.css';
import { baseURL } from "../../../../../api/servicesApi";

export default function ImageModal(props) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(false);
  }, [props.openedImage?.id]);
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
      <div className={s.imageWrapper}>
      {!loaded && (
        <div className={s.loaderWrapper}>
          <div className={s.loader}></div>
        </div>
      )}

      {props.openedImage && (
        <img
          src={`${baseURL}${props.openedImage.image.url}`}
          onLoad={() => setLoaded(true)}
          className={`${s.openedImage} ${loaded ? s.loaded : ""}`}
        />
      )}
    </div>
      <button onClick={()=>{props.nextImage()}} className={s.nextBtn}>›</button>
    </div>
  );
}
