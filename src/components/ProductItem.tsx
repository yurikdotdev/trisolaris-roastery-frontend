import { Link } from 'react-router-dom';

function ProductItem() {
  return (
    <Link to={'/details'} className='p-4 w-96 h-96 bg-orange-100 flex flex-col justify-between align-middle rounded-lg'>
      <p>Sample Product</p>
      <div className='flex justify-between gap-4'>
        <p>Product</p>
        <p>Price</p>
      </div>
    </Link>
  );
}

export default ProductItem