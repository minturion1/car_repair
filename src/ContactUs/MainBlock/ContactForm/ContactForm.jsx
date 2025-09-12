import s from './ContactForm.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const initialFormData = {
    name:"",
    phone:"",
    message:"",
}

export default function ContactForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    function onFormChange(fieldName, value) {
        setFormData(prev=>({
                    ...prev,
                    [fieldName]: value,
                }))
    }
    function onFormSubmit() {
        if (isBlocked) return;
        setIsBlocked(true);
        setTimeout(() => setIsBlocked(false), 5000);
        axios.post("http://127.0.0.1:8000/api/v1/contacts/", formData)
            .then(res => {
                setIsModalOpen(true);
                setTimeout(() => setIsModalOpen(false), 3000);
                console.log(res.data);
            })
            .catch(err => {
            console.error(err);
            alert("Error creating contact");
            });
    }
    return (
        <div className={s.container}>
            <div className={`${s.modal} ${isModalOpen ? s.show : ""}`}>
                Appointment successfully created!
            </div>
            <div className={s.title}>Feedback</div>
            <div className={s.top_inputs}>
                <div className={s.input_container}>
                    <label className={s.label} htmlFor="your_name">Your Name</label>
                    <input onChange={(e)=>{onFormChange("name", e.target.value)}} className={s.input} value={formData.name}  name="your_name" id="your_name" type="text" />
                </div>
                <div className={s.input_container}>
                    <label className={s.label}  htmlFor="phone_number">Phone Number</label>
                    <input onChange={(e)=>{onFormChange("phone", e.target.value)}}  className={s.input} value={formData.phone} name="phone_number" id="phone_number" type="text" />
                </div>
            </div>
            <div className={s.area_container}>
                <label className={s.label}  htmlFor="text">Your message</label>
                <textarea onChange={(e)=>{onFormChange("message", e.target.value)}}  className={`${s.input} ${s.area}`} value={formData.message} name="text" id="text"></textarea>
            </div>
            <button onClick={onFormSubmit} className={s.button}>Send Message</button>
        </div>
    )
}