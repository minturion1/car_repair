
import Nav from '../../Nav/Nav';
import s from './Header.module.css';

function Header() {
  return (
    <div className={s.container}>
        <Nav></Nav>
        <div className={s.text}>
            <div className={s.welcome}>
                <span>Get in Touch</span>
            </div>
            <div className={s.title}>
                We’d love to hear from you!
            </div>
            <div className={s.par}>
                Whether you have a question, need support, or just want to say hello, fill out the form and we’ll get back to you shortly.
            </div>
        </div>
    </div>
  );
}

export default Header;
