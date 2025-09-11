
import Nav from '../../Nav/Nav';
import s from './Header.module.css';

function Header() {
  return (
    <div className={s.container}>
        <Nav></Nav>
        <div className={s.text}>
            <div className={s.welcome}>
                <span>Book online</span>
            </div>
            <div className={s.title}>
                Make an <span>Appointment</span>
            </div>
            <div className={s.par}>
                Schedule your next appointment with us using our easy-to-use online appointment form.
            </div>
        </div>
    </div>
  );
}

export default Header;
