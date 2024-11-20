import CartItem from '@/components/CartItem';
import MainLayout from '@/components/layouts/MainLayout';

function Cart() {
  return (
    <MainLayout title="Cart | Trisolaris Roastery">
      <div className="flex w-full flex-col items-center gap-8 p-8">
        <h1 className="text-3xl">Your Cart (4)</h1>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className='w-full flex flex-col gap-4 items-end'>
          <h1 className="text-3xl font-newsreader">Rp.480.000</h1>
          <button className="w-96 bg-custom-surface p-4 text-lg font-medium text-custom-textLight shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight dark:shadow-stone-800">
            Checkout
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default Cart;
