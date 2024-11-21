import MainLayout from '@/components/layouts/MainLayout';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';
import CartItem from '@/pages/Cart/components/CartItem';
import { Trash2 } from 'lucide-react';

function Cart() {
  const { cart, getTotalPrice, handleClearCart } = useCart();
  const { getProductById } = useProducts();

  const products = cart.map((item) => ({
    ...getProductById(item.id),
    quantity: item.quantity,
  }));

  return (
    <MainLayout title="Cart | Trisolaris Roastery">
      <div className="flex w-full flex-col items-center gap-8 p-8">
        {cart.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <>
            <h1 className="text-3xl">Your Cart (4)</h1>
            <button>
              <Trash2
                onClick={() => handleClearCart()}
                className="h-5 w-5 cursor-pointer"
              />
            </button>
            <div className="flex w-full flex-col items-center justify-center gap-4">
                {products.map((product) => {
                return (
                  <CartItem
                    product={product}
                    key={product.id}
                    quantity={product.quantity}
                  />
                );
              })}
            </div>
            <div className="flex w-full flex-col items-end gap-4">
              <h1 className="font-newsreader text-3xl">{getTotalPrice}</h1>
              <button className="w-96 bg-custom-surface p-4 text-lg font-medium text-custom-textLight shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight dark:shadow-stone-800">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Cart;
