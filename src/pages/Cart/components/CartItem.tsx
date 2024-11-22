import { useCart } from '@/hooks/useCart';
import { convertPrice } from '@/lib/utils';
import { Product } from '@/types';
import { Trash } from 'lucide-react';

interface CartItemProps {
  product: Product;
  quantity: number;
}

function CartItem({ product, quantity }: CartItemProps) {
  const { handleDeleteItem, handleQuantityChange } = useCart();

  return (
    <div className="flex w-full cursor-pointer flex-row gap-4 rounded-lg p-4 shadow-sm hover:shadow-lg md:gap-6 md:p-6">
      <img
        src={product.imageUrl}
        className="h-24 w-24 rounded-lg object-cover md:h-32 md:w-32"
        alt={product.name}
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-medium md:text-lg">{product.name}</h1>
        <p className="font-newsreader text-lg font-medium md:text-lg">
          {product.price ? convertPrice(product.price) : 'Loading...'}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          className="w-16 rounded-lg border bg-custom-bgLight p-1 text-center text-sm text-custom-bgDark md:w-20"
          value={quantity}
          onChange={(event) => handleQuantityChange(event, product.id)}
        />
      </div>
      <button onClick={() => handleDeleteItem(product.id)}>
        <Trash className="h-5 w-5 cursor-pointer" />
      </button>
    </div>
  );
}

export default CartItem;
