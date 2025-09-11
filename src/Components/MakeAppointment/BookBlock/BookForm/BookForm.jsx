import ServicesNeeded from '../ServicesNeeded/ServicesNeeded';
import s from './BookForm.module.css';
import BookInput from './BookInput/BookInput';
import { useState } from 'react';
import validateField from './validateField';
import axios from 'axios';

const initialFormData = {
    name:"",
    phone:"",
    email:"",
    make:"",
    model:"",
    year:"",
    date:"",
    time:"",
    location:"",
    services: [],
}
function BookForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    
    function onFormChange(field,value) {
        setFormData(data=>({
            ...data,
            [field]: value,
        }))
        const error = validateField(field, value);
        
        setFormErrors(errors => ({
            ...errors,
            [field]: value===""?"":error,
        }));
    }
    function onServiceClick(serviceId, serviceName) {
        const service={
            id: serviceId,
            name: serviceName,
        }
        
        setFormData(data => {
            const exists = data.services.find(s => s.id === serviceId);

            if (exists) {
            return {
                ...data,
                services: data.services.filter(s => s.id !== serviceId),
            };
            } else {
            return {
                ...data,
                services: [...data.services, service],
            };
            }
        });
    }
    function submitForm() {
        if (isBlocked) return;
        setIsBlocked(true);
        setTimeout(() => setIsBlocked(false), 5000);
        const requiredFields = ["name", "phone", "make", "model", "year", "date", "time"];

        for (let field of requiredFields) {
            if (!formData[field] || formData[field].toString().trim() === "") {
            setFormErrors(errors => ({
                ...errors,
                [field]: "This field is required",
            }));
            return; 
            }
        }

        const hasErrors = Object.values(formErrors).some(err => err && err.length > 0);
        if (hasErrors) {
            return;
        }

        axios.post("http://127.0.0.1:8000/api/v1/appointments/", formData)
            .then(res => {
            console.log(res.data);
            setIsModalOpen(true);
            setTimeout(() => setIsModalOpen(false), 3000);
            })
            .catch(err => {
            console.error(err);
            alert("Error creating appointment");
            });
        }

    
    return (
         <form className={s.container}>
            <div className={`${s.modal} ${isModalOpen ? s.show : ""}`}>
                Appointment successfully created!
            </div>

            <div className={s.grid}>
                <BookInput error={formErrors.name} onFormChange={onFormChange} required={true} value={formData.name} title="Your Name" name="name" />
                <BookInput error={formErrors.phone} onFormChange={onFormChange} required={true} value={formData.phone} title="Phone Number" name="phone" />
                <BookInput error={formErrors.email} onFormChange={onFormChange}  value={formData.email} title="Email Address" name="email" />
                <BookInput error={formErrors.make} onFormChange={onFormChange} required={true} value={formData.make} title="Make" name="make" />
                <BookInput error={formErrors.model} onFormChange={onFormChange} required={true} value={formData.model} title="Model" name="model" />
                <BookInput error={formErrors.year} onFormChange={onFormChange} required={true} value={formData.year} title="Year" name="year" />
            </div>
                
            <div className={s.title}>Appointment Details</div>
            <div className={s.grid}>
                <BookInput error={formErrors.date} onFormChange={onFormChange} required={true} value={formData.date} type="date" title="Date" name="date" />
                <BookInput error={formErrors.time} onFormChange={onFormChange} required={true} value={formData.time} type="time" title="Time" name="time" />
                <BookInput error={formErrors.location} onFormChange={onFormChange} value={formData.location} title="Location" name="location" />
            </div>
            <ServicesNeeded formData={formData} onServiceClick={onServiceClick} />
            <button onClick={(e)=>{e.preventDefault();submitForm()}} className={s.button}>Make an Appointment</button>
        </form>
    )
}

export default BookForm;