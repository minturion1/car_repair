
import { NavLink } from 'react-router-dom';
import s from './Book.module.css';

function Book() {
  return (
    <div className={s.container}>
            <div className={s.title}>
                Ready to schedule an <span>appointment?</span>
            </div>
        <NavLink to="/make-an-appointment" className={s.button}>Make an appointment</NavLink>
        
    </div>
  );
}

export default Book;
