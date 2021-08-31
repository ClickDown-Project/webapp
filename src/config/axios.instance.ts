import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  return Promise.reject(error.response);
});

const getRequest = (url: string, params?: any): Promise<AxiosResponse['data']> => axiosInstance.get(url, { params });

const postRequest = (url: string, data?: any, params?: any): Promise<AxiosResponse['data']> => axiosInstance.post(url, data, { params });

const putRequest = (url: string, data?: any, params?: any): Promise<AxiosResponse['data']> => axiosInstance.put(url, data, { params });

const deleteRequest = (url: string, params?: any): Promise<AxiosResponse['data']> => axiosInstance.delete(url, { params });

export default {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
