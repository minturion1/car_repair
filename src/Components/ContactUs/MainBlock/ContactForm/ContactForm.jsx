import { useState } from 'react';
import { useCreateContact } from '../../../../hooks/useCreateContact';
import { useForm } from '../../../../hooks/useForm';
import s from './ContactForm.module.css';
import validateField from './validateField';

const initialFormData = {
    name:"",
    phone:"",
    message:"",
}

export default function ContactForm() {
    const {
        formData,
        formErrors,
        handleChange,
        validateForm,
        resetForm,
    } = useForm(initialFormData, validateField);

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const mutation = useCreateContact({
            onSuccess: (res) => {
                console.log(res.data);
                resetForm();
                setIsModalOpen(true);
                setTimeout(() => setIsModalOpen(false), 3000);
            },
            onError: (err) => {
                console.error(err);
                alert("Error creating contact");
            }
        });

    function onFormSubmit() {
        const isValid = validateForm(["name", "phone", "message"]);
        if (!isValid) return;

        mutation.mutate(formData);
    }
    return (
        <div className={s.container}>
            <div className={`${s.modal} ${isModalOpen ? s.show : ""}`}>
                Your message has been sent!
            </div>
            <div className={s.title}>Feedback</div>
            <div className={s.top_inputs}>
                <div className={s.input_container}>
                    <label className={s.label} htmlFor="your_name">Your Name</label>
                    <input
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={s.input}
                        value={formData.name}
                    />
                    {formErrors.name && <div className={s.error}>{formErrors.name}</div>}
                </div>
                <div className={s.input_container}>
                    <label className={s.label}  htmlFor="phone_number">Phone Number</label>
                    <input
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={s.input}
                        value={formData.phone}
                    />
                    {formErrors.phone && <div className={s.error}>{formErrors.phone}</div>}
                </div>
            </div>
            <div className={s.area_container}>
                <label className={s.label}  htmlFor="text">Your message</label>
                <textarea
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`${s.input} ${s.area}`}
                    value={formData.message}
                />
                {formErrors.message && <div className={s.error}>{formErrors.message}</div>}
            </div>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    onFormSubmit();
                }}
                disabled={mutation.isPending}
                className={s.button}
            >
                {mutation.isPending ? "Sending..." : "Send message"}
            </button>
        </div>
    )
}