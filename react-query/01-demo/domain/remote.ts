import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const request = ({ ...options }) => {
  api.defaults.headers.common.Authorization = "Bearer (...token)";
  const onSuccess = (res: any) => res;
  const onError = (err: any) => err; // do something with error...
  return api(options).then(onSuccess).catch(onError);
};
