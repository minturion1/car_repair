
import s from './Book.module.css';

function Book() {
  return (
    <div className={s.container}>
            <div className={s.title}>
                Ready to schedule an <span>appointment?</span>
            </div>
        <a href="#" className={s.button}>Make an appointment</a>
        
    </div>
  );
}

export default Book;
