import { API } from '@/config';
import { fetcherWithToken, fetchWithAuth } from '@/lib/fetcher';
import { showToastMessage } from '@/lib/toast';
import { Product } from '@/types';
import { useState } from 'react';
import useSWR from 'swr';

export type CartItem = {
  cartId: string;
  productId: string;
  quantity: number;
};

export type Cart = {
  id: string;
  cartItems: CartItem[];
};

export const useCart = () => {
  const [quantity, setQuantity] = useState(1);

  const { data, mutate } = useSWR<Cart>(API.CART, fetcherWithToken);

  const id = data?.id || '';
  const cartItems = data?.cartItems || [];

  const handleAddToCart = async (product: Product) => {
    if (!product.id) {
      console.error('Product ID is missing');
      return;
    }

    const cartItem: CartItem = {
      cartId: id,
      productId: product.id,
      quantity: quantity,
    };

    try {
      await fetchWithAuth(API.CART_ITEM, {
        method: 'POST',
        body: JSON.stringify(cartItem),
      });

      mutate();
      showToastMessage('Product added to cart !', 'success');
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  const handleDeleteItem = async (productId: string) => {
    try {
      await fetchWithAuth(API.CART_ITEM, {
        method: 'DELETE',
        body: JSON.stringify({ productId }),
      });

      mutate();
      showToastMessage('Product deleted from cart', 'error');
    } catch (error) {
      console.error('Error deleting product from cart:', error);
    }
  };

  const handleQuantityChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: string
  ) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);

    try {
      await fetchWithAuth(API.CART_ITEM, {
        method: 'PATCH',
        body: JSON.stringify({ productId, quantity: newQuantity }),
      });

      mutate();
    } catch (error) {
      console.error('Error updating product quantity in cart:', error);
    }
  };

  const handleClearCart = async () => {
    try {
      await fetchWithAuth(API.CART, {
        method: 'DELETE',
      });

      mutate();
      showToastMessage('All products deleted from cart', 'error');
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  return {
    setQuantity,
    cartItems,
    handleAddToCart,
    handleQuantityChange,
    handleDeleteItem,
    handleClearCart,
  };
};
