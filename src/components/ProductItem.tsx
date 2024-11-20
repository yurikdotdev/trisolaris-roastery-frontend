import { Link } from 'react-router-dom';

function ProductItem() {
  return (
    <Link
      to={'/details/${product.id}'}
      className="justify-between rounded-lg flex h-96 w-96 flex-col p-2 align-middle transition duration-300 ease-in-out hover:opacity-100 md:opacity-90"
    >
      <img
        src="https://cdn.dribbble.com/users/1622978/screenshots/16873134/media/7f5d72bce5b94fe1ae56484394de673f.jpg?compress=1&resize=1600x1200&vertical=top"
        className="w-full rounded-lg shadow-sm"
        alt="Product Image"
      />

      <div className="flex items-center justify-between gap-1 p-3">
        <div className="flex flex-col">
          <p className="text-sm text-custom-accent">Indonesia</p>
          <h1 className="text-lg font-medium">Aceh Gayo</h1>
        </div>
        <p className="text-lg font-medium font-newsreader">Rp.120.000</p>
      </div>
    </Link>
  );
}

export default ProductItem;
