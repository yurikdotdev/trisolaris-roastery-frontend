import { Link } from 'react-router-dom';

function ProductItem() {
  return (
    <Link
      to={'/details'}
      className="flex h-96 w-96 flex-col justify-between rounded-lg bg-orange-100 align-middle"
    >
      <img
        src="https://cdn.dribbble.com/users/1622978/screenshots/16873134/media/7f5d72bce5b94fe1ae56484394de673f.jpg?compress=1&resize=1600x1200&vertical=top"
        className="w-full rounded-t-lg"
      />

      <div className='flex flex-col gap-4 p-4'>
        <h2>Sample Product</h2>
        <div className="flex justify-between gap-4">
          <p>Product Description</p>
          <p>Price</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
