import ProductItem from './ProductItem';

function ProductContainer({ n }: { n: number }) {
  const testProducts = Array(n).fill(null);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {testProducts.map((_, index) => (
        <ProductItem key={index} />
      ))}
    </div>
  );
}

export default ProductContainer;
