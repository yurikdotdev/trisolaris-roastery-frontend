import type { Product } from '../../types';
import ProductItem from './ProductItem';

function ProductContainer({
  products,
  index,
}: {
  products: Product[];
  index: number;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product: Product, i) => {
        while (i < index) {
          return <ProductItem key={product.id} product={product} />;
        }
      })}
    </div>
  );
}

export default ProductContainer;
