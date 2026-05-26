import axios from 'axios';
import { baseURL } from './baseUrl';


const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export const createAppointment = (formData) => {
    return api.post("/appointments", {
        data: formData,
    });
};