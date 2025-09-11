import s from './BookBlock.module.css';
import BookForm from './BookForm/BookForm';

function BookBlock() {
    return (
        <div className={s.container}>
            <div className={s.title}>Appointment</div>
            <BookForm />
            
        </div>
    )
}

export default BookBlock;