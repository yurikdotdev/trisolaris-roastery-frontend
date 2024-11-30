import { ROUTES, SITE } from '@/config';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';
import MainLayout from '@/layouts/MainLayout';
import { convertPrice } from '@/lib/utils';
import CartItem from '@/pages/Cart/components/CartItem';
import { useAuthStore } from '@/stores/useAuthStore';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Cart() {
  const { isAuthenticated } = useAuthStore();
  const { getProductById } = useProducts();
  const { cartItems, handleClearCart } = useCart();

  const products = cartItems.map((item) => ({
    ...getProductById(item.productId),
    quantity: item.quantity,
  }));

  const totalPrice = products.reduce((total, product) => {
      if (!product) {
        return total
      }

      return total + product.price * product.quantity
    }, 0)

  return (
    <MainLayout title={`Cart | ${SITE.SITE_NAME}`}>
      <div className="flex w-full flex-col items-center gap-8 p-8">
        {!isAuthenticated ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Please sign in to view your cart
            </h1>
            <Link to={ROUTES.SIGNIN} className="text-custom-accent underline">
              Sign In
            </Link>
          </div>
        ) : (
          <>
            {cartItems.length === 0 ? (
              <h1>Your cart is empty</h1>
            ) : (
              <>
                <div className="flex w-full items-center justify-between p-4">
                  <h1 className="text-3xl font-bold">Your Cart</h1>
                  <button onClick={handleClearCart}>
                    <Trash2 className="h-5 w-5 cursor-pointer" />
                  </button>
                </div>
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
                  <h1 className="font-newsreader text-2xl">
                    The total amount for your purchase is{' '}
                    {convertPrice(totalPrice)}
                  </h1>
                  <button className="w-full max-w-sm bg-custom-surface p-4 text-lg font-medium text-custom-textLight shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight dark:shadow-stone-800">
                    Proceed to Payment
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
}

export default Cart;
