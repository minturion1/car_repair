import s from './Input.module.css';
function Input(props) {
    return  (
        <div className={s.container}>
            <input onChange={(e)=>props.onSearchChange(e.target.value)} className={s.input} value={props.searchValue} type="text" placeholder="Search"/>
            <i className={`${s.icon} fa-solid fa-magnifying-glass`}></i>
        </div>
    )
}

export default Input;