
import image from '../images/image.png'
import s from './Header.module.css';

function Header(props) {
  return (
    <div className={s.container}>
        
        
        <div className={s.title}>
            {props.service.title}
        </div>
        <img src={image} alt={props.service.title} className={s.image} />
        <div className={s.par}>
            {props.service.par}
        </div>
    </div>
  );
}

export default Header;
