import { useCartStore } from '@/stores/useCartStore';
import { Product } from '@/types';
import { useState } from 'react';

export const useCart = () => {
  const [quantity, setQuantity] = useState(1);

  const cart = useCartStore((state) => state.cart)
  const addToCart = useCartStore((state) => state.addToCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice())

  const handleAddToCart = (product: Product) => {
    if (!product.id) {
      console.error('Product ID is missing');
      return;
    }

    const cartItem = {
      id: product.id,
      price: product.price,
      quantity: quantity,
    };

    addToCart(cartItem);
    console.log('Cart updated', useCartStore.getState().cart);
  };

  const handleDeleteItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: string
  ) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(productId, newQuantity);
  };

  const handleClearCart = () => {
    clearCart();
  }

  return {
    cart,
    setQuantity,
    handleAddToCart,
    handleDeleteItem,
    handleQuantityChange,
    handleClearCart,
    getTotalPrice
  };
};
