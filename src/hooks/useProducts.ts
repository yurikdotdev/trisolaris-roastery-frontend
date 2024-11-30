import { API } from '@/config';
import { fetcher } from '@/lib/fetcher';
import type { Product } from '@/types';
import { useState } from 'react';
import useSWR from 'swr';

export const useProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data, error, isLoading } = useSWR<Product[]>(API.PRODUCTS, fetcher);

  const getProductById = (id: string): Product => {
    return data?.find((product) => product.id === id) as Product;
  };

  const filterProducts = (searchQuery: string) => {
    if (!data) {
      return [];
    }

    if (searchQuery === '') {
      return data;
    }

    const filtered = data?.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered;
  };

  return {
    data,
    error,
    isLoading,
    getProductById,
    filterProducts,
    searchQuery,
    setSearchQuery,
  };
};
