import ServicesNeeded from '../ServicesNeeded/ServicesNeeded';
import s from './BookForm.module.css';
import BookInput from './BookInput/BookInput';
import { useState } from 'react';
import validateField from './validateField';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useCreateAppointment } from '../../../../hooks/useCreateAppointment';
import { useForm } from '../../../../hooks/useForm';

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
    const {
        formData,
        formErrors,
        handleChange,
        validateForm,
        resetForm,
        setFormData,
        setFormErrors,
    } = useForm(initialFormData, validateField)

    const [isModalOpen, setIsModalOpen] = useState(false);

    const mutation = useCreateAppointment({
        onSuccess: (res) => {
            console.log(res.data);
            setIsModalOpen(true);
            resetForm();
            setTimeout(() => setIsModalOpen(false), 3000);
        },
        onError: (err) => {
            console.error(err);
            alert("Error creating appointment");
        }
    });

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
        const isValid = validateForm(["name", "phone", "make", "model", "year", "date", "time"]);

        if (!isValid) return;

        mutation.mutate(formData);
    }

    
    return (
         <form className={s.container}>
            <div className={`${s.modal} ${isModalOpen ? s.show : ""}`}>
                Appointment successfully created!
            </div>

            <div className={s.grid}>
                <BookInput error={formErrors.name} onFormChange={handleChange} required={true} value={formData.name} title="Your Name" name="name" />
                <BookInput error={formErrors.phone} onFormChange={handleChange} required={true} value={formData.phone} title="Phone Number" name="phone" />
                <BookInput error={formErrors.email} onFormChange={handleChange}  value={formData.email} title="Email Address" name="email" />
                <BookInput error={formErrors.make} onFormChange={handleChange} required={true} value={formData.make} title="Make" name="make" />
                <BookInput error={formErrors.model} onFormChange={handleChange} required={true} value={formData.model} title="Model" name="model" />
                <BookInput error={formErrors.year} onFormChange={handleChange} required={true} value={formData.year} title="Year" name="year" />
            </div>
                
            <div className={s.title}>Appointment Details</div>
            <div className={s.grid}>
                <BookInput error={formErrors.date} onFormChange={handleChange} required={true} value={formData.date} type="date" title="Date" name="date" />
                <BookInput error={formErrors.time} onFormChange={handleChange} required={true} value={formData.time} type="time" title="Time" name="time" />
                <BookInput error={formErrors.location} onFormChange={handleChange} value={formData.location} title="Location" name="location" />
            </div>
            <ServicesNeeded formData={formData} onServiceClick={onServiceClick} />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    submitForm();
                }}
                disabled={mutation.isPending}
                className={s.button}
            >
                {mutation.isPending ? "Sending..." : "Make an Appointment"}
            </button>
        </form>
    )
}

export default BookForm;