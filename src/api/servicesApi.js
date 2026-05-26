import axios from "axios";
import { baseURL } from "./baseUrl";


const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export const getServices = async (limit) => {
  const query = limit ? `/services?pagination[limit]=${limit}&populate=*`
  : `/services?populate=*`;

  const { data } = await api.get(query);

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