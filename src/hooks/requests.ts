import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import useSwr from 'swr';

type Request<T> = { data: T | undefined; error: AxiosError | undefined };

const test = 1;

export const useGet = <T>(
  axiosInstance: AxiosInstance,
  url: string,
  requestConfig?: AxiosRequestConfig,
): Request<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await axiosInstance.get(uri, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const usePost = <T>(
  axiosInstance: AxiosInstance,
  url: string,
  payload: never,
  requestConfig?: AxiosRequestConfig,
): Request<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await axiosInstance.post(uri, payload, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const usePut = <T>(
  axiosInstance: AxiosInstance,

  url: string,
  payload: never,
  requestConfig?: AxiosRequestConfig,
): Request<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await axiosInstance.put(uri, payload, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const usePatch = <T>(
  axiosInstance: AxiosInstance,
  url: string,
  payload: never,
  requestConfig?: AxiosRequestConfig,
): Request<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await axiosInstance.patch(uri, payload, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const useDelete = <T>(
  axiosInstance: AxiosInstance,
  url: string,
  requestConfig?: AxiosRequestConfig,
): Request<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await axiosInstance.delete(uri, requestConfig);
    return response.data;
  });

  return { data, error };
};
