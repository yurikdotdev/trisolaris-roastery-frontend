import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import type { Product } from '@/types';

export const useProducts = () => {
  const { data, error } = useSWR<Product[]>(
    'http://localhost:5000/products',
    fetcher
  );

  const getProductById = (id: string): Product => {
    return data?.find((product) => product.id === id) as Product;
  } 

  return { data, error, getProductById };
};
