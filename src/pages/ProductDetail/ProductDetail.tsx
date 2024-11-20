import MainLayout from '@/components/layouts/MainLayout';
import { useProducts } from '@/hooks/useProducts';
import type { Product } from '@/types';
import { useParams } from 'react-router-dom';
import { convertPrice } from '@/lib/utils';

function ProductDetail() {
  const { productId } = useParams();
  const { data, error } = useProducts();

  if (error) {
    console.error('Error fetching product data:', error);
    return <div>Error loading product details...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const product: Product = data.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <MainLayout title={`${product.name} | Trisolaris Roastery Co.`}>
      <div className="flex flex-col gap-8 px-8 py-12 md:max-w-7xl md:flex-row">
        <img
          src={product.imageUrl}
          className="rounded-lg shadow-sm md:max-w-xl"
          alt={product.name}
        />

        <div className="flex flex-col gap-8">
          <div className="flex-row gap-2 md:flex md:flex-col">
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <p className="text-custom-accent">{product.category}</p>
          </div>

          <p>{product.description}</p>

          <h2 className="font-newsreader text-3xl font-bold">
            {convertPrice(product.price)}
          </h2>

          <div className="flex w-full overflow-hidden rounded-lg shadow-sm">
            <input
              type="number"
              className="w-1/6 bg-custom-bgLight p-4 text-lg text-custom-textLight"
              placeholder="0"
            />
            <button className="w-full bg-custom-surface p-4 text-lg font-medium text-custom-textLight shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight dark:shadow-stone-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProductDetail;
