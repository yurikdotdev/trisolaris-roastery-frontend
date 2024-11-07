import ProductItem from './ProductItem';

const testProducts = Array(30).fill(null);

function ProductContainer() {
  return (
    <div className='flex flex-wrap gap-4 justify-center'>
      {testProducts.map((_, index) => (
        <ProductItem key={index} />
      ))}
    </div>
  );
}

export default ProductContainer;
