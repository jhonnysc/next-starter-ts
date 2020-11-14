import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import useSwr from 'swr';

type FetchReturn<T> = { data: T | undefined; error: AxiosError | undefined };

export const useGet = <T>(
  url: string,
  requestConfig?: AxiosRequestConfig,
): FetchReturn<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await Axios.get(uri, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const usePost = <T>(
  url: string,
  payload: never,
  requestConfig?: AxiosRequestConfig,
): FetchReturn<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await Axios.post(uri, payload, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const usePut = <T>(
  url: string,
  payload: never,
  requestConfig?: AxiosRequestConfig,
): FetchReturn<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await Axios.put(uri, payload, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const usePatch = <T>(
  url: string,
  payload: never,
  requestConfig?: AxiosRequestConfig,
): FetchReturn<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await Axios.patch(uri, payload, requestConfig);
    return response.data;
  });

  return { data, error };
};

export const useDelete = <T>(
  url: string,
  requestConfig?: AxiosRequestConfig,
): FetchReturn<T> => {
  const { data, error } = useSwr<T, AxiosError>(url, async (uri) => {
    const response = await Axios.delete(uri, requestConfig);
    return response.data;
  });

  return { data, error };
};
