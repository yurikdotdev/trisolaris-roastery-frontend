import type { Product } from '../../types';
import ProductItem from './ProductItem';

function ProductContainer({ products }: { products: Product[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product: Product) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductContainer;
