
import Nav from '../../Nav/Nav';
import s from './Header.module.css';

function Header() {
  return (
    <div className={s.container}>
        <Nav></Nav>
        <div className={s.text}>
            <div className={s.welcome}>
                <span>Our Gallery</span>
            </div>
            <div className={s.title}>
                Welcome to <span>AutoWorks</span>
            </div>
            <div className={s.par}>
                Have a look at a glimpse of our activities
            </div>
        </div>
    </div>
  );
}

export default Header;
