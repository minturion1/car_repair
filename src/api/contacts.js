import axios from 'axios';

export const baseURL = "http://localhost:1337";

const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export const createContact = (formData) => {
    return api.post("/contacts", {
        data: formData,
    });
};