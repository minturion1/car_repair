import Nav from '../../Nav/Nav';
import s from './Header.module.css';

function Header() {
  return (
    <div className={s.container}>
        <Nav></Nav>
        <div className={s.text}>
            <div className={s.welcome}>
                <span>Welcome to auto works</span>
            </div>
            <div className={s.title}>
                Your <span>Trusted</span> Auto Repair Service Provider
            </div>
            <div className={s.par}>
                We offer reliable and efficiant services to ensure your vehicle is always in top condition. 
                Let us take care of your car, so you can focus on what matters most.
            </div>
        </div>
    </div>
  );
}

export default Header;
