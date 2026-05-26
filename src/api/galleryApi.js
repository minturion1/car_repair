import axios from "axios";
import { baseURL } from "./baseUrl";


const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export const getImages = async (serviceId) => {
    
  const query = (serviceId!=='all') ? `/galleries?populate=*&filters[service][documentId][$eq]=${serviceId}`
  : `/galleries?populate=*`;

  const { data } = await api.get(query);
    
  return data.data;
};

export const getImageById = async (imageId) => {
    
  const { data } = await api.get(`/galleries/${imageId}?populate=*`);
    
  return data.data;
};