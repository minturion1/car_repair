import { useState } from 'react';
import s from './Header.module.css';

function Header(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={s.container}>
        
        
        <div className={s.title}>
            {props.service.name}
        </div>
        {!imageLoaded && <p>Loading image...</p>}
        <img key={props.service.id} onLoad={() => setImageLoaded(true)} style={{ display: imageLoaded ? "block" : "none" }} src={props.service.image} alt={props.service.title} className={s.image} />
        <div className={s.par}>
            {props.service.par}{props.service.par}
        </div>
    </div>
  );
}

export default Header;
