import { message } from "ant-design-vue";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosRequestConfig,
} from "axios";

const createAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: Number(import.meta.env.VITE_TIME_OUT),
  withCredentials: true, // 异步请求携带cookie
  headers: {
    // 设置后端需要的传参类型
  },
});
//请求拦截器
createAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    /**
     * 在这里写你的拦截逻辑
     */
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//响应拦截
createAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    /**
     * 在这里写你的响应逻辑
     */
    return response.data;
  },
  (error) => {
    message.error(error.message);
    return Promise.reject(error);
  }
);

const request = <T>(
  options: AxiosRequestConfig & {
    method: "get" | "post" | "put" | "delete";
  }
): Promise<T> => {
  return createAxios(options);
};

export default request;
