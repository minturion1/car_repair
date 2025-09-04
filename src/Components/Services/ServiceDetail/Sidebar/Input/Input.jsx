import s from './Input.module.css';
function Input() {
    return  (
        <div className={s.container}>
            <input className={s.input} type="text" placeholder="Search"/>
            <i className={`${s.icon} fa-solid fa-magnifying-glass`}></i>
        </div>
    )
}

export default Input;