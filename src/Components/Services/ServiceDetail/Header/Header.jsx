import { useState } from 'react';
import s from './Header.module.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { baseURL } from '../../../../api/servicesApi';

function Header(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={s.container}>
        
        
        <div className={s.title}>
            {props.service.name}
        </div>
        {!imageLoaded && <Skeleton style={{ marginBottom: "20px", marginTop: "50px", borderRadius: "20px" }} baseColor="#2b2b2b" highlightColor="#fff" height={600} width="100%" />}
        <img key={props.service.id} onLoad={() => setImageLoaded(true)} style={{ display: imageLoaded ? "block" : "none" }} src={`${baseURL}${props.service.image.url}`} alt={props.service.title} className={s.image} />
        <div className={s.par}>
            {props.service.par}{props.service.par}
        </div>
    </div>
  );
}

export default Header;
