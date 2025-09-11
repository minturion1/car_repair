import s from './ContactForm.module.css';

export default function ContactForm() {
    return (
        <div className={s.container}>
            <div className={s.title}>Feedback</div>
            <div className={s.top_inputs}>
                <div className={s.input_container}>
                    <label className={s.label} htmlFor="your_name">Your Name</label>
                    <input className={s.input}  name="your_name" id="your_name" type="text" />
                </div>
                <div className={s.input_container}>
                    <label className={s.label}  htmlFor="phone_number">Phone Number</label>
                    <input className={s.input}  name="phone_number" id="phone_number" type="text" />
                </div>
            </div>
            <div className={s.area_container}>
                <label className={s.label}  htmlFor="text">Your message</label>
                <textarea className={`${s.input} ${s.area}`}  name="text" id="text"></textarea>
            </div>
            <button className={s.button}>Send Message</button>
        </div>
    )
}