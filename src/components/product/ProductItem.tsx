import { convertPrice } from '@/lib/utils';
import { Link } from 'react-router-dom';
import type { Product } from '../../types';

function ProductItem({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="flex h-96 w-96 flex-col justify-between rounded-lg p-2 align-middle transition duration-300 ease-in-out hover:opacity-100 md:opacity-90"
    >
      <img
        src={product.imageUrl}
        className="h-96 w-96 rounded-lg object-cover shadow-sm"
        alt={product.name}
      />

      <div className="flex items-center justify-between gap-1 p-3">
        <div className="flex flex-col">
          <p className="text-sm text-custom-accent">{product.category}</p>
          <h1 className="text-lg font-medium">{product.name}</h1>
        </div>
        <p className="font-newsreader text-lg font-medium">
          {convertPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}

export default ProductItem;
