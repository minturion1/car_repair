import axios from 'axios';

export const baseURL = "http://localhost:1337";

const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export const createAppointment = (formData) => {
    return api.post("/appointments", {
        data: formData,
    });
};