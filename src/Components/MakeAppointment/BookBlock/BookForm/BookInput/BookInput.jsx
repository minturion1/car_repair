import s from './BookInput.module.css';

function BookInput(props) {
    return (
         <div className={s.container}>
            <label htmlFor={props.name} className={s.label}>{props.title} {props.required && <span className={s.required}>*</span>}</label>
            <input value={props.value} onChange={(e)=>props.onFormChange(props.name, e.target.value)} id={props.name} name={props.name} type={props.type? props.type : "text"} className={`${s.input} ${props.error ? s.inputError : ""}`} />
            {props.error && <div className={s.error}>{props.error}</div>}
        </div>
    )
}

export default BookInput;