import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { Product } from '@/types';
import { API } from '@/config';

export const useProducts = () => {
  const { data, error, isLoading } = useSWR<Product[]>(
    API.PRODUCTS,
    fetcher
  );

  const getProductById = (id: string): Product => {
    return data?.find((product) => product.id === id) as Product
  } 

  return { data, error, isLoading, getProductById };
};
