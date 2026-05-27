import axios from "axios";
import { baseURL } from "./baseUrl";


const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export const getLimitedServices = async (limit) => {
  const { data } = await api.get(
    `/services?pagination[limit]=${limit}&populate=*`
  );

  return data.data;
};

export const getServices = async () => {
  const { data } = await api.get("/services?populate=*");

  return data.data;
};

export const getServiceById = async (id) => {
  const { data } = await api.get(
    `/services/${id}?populate=*`
  );

  return data.data;
};

export const getServiceNames = async () => {
  const { data } = await api.get(
    "/services?fields[0]=name"
  );

  return data.data;
};