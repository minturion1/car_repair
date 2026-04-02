import axios from "axios";

export const baseURL = "http://localhost:1337";

const api = axios.create({
  baseURL: `${baseURL}/api`,
});

export const getServices = async () => {
  const { data } = await api.get(
    "/services?pagination[limit]3&populate=*"
  );

  return data.data;
};