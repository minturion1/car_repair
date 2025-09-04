
import Nav from '../../Nav/Nav';
import s from './Header.module.css';

function Header() {
  return (
    <div className={s.container}>
        <Nav></Nav>
        <div className={s.text}>
            <div className={s.welcome}>
                <span>What we can offer</span>
            </div>
            <div className={s.title}>
                AutoWorks <span>Services</span>
            </div>
            <div className={s.par}>
                A range of service area that we provide
            </div>
        </div>
    </div>
  );
}

export default Header;
