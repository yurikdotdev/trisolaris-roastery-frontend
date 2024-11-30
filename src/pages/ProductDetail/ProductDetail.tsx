import SectionHeader from '@/components/common/SectionHeader';
import ProductContainer from '@/components/product/ProductContainer';
import { SITE } from '@/config';
import { useCart } from '@/hooks/useCart';
import { useProducts } from '@/hooks/useProducts';
import ErrorLayout from '@/layouts/ErrorLayout';
import Loading from '@/layouts/Loading';
import MainLayout from '@/layouts/MainLayout';
import { convertPrice } from '@/lib/utils';
import { useAuthStore } from '@/stores/useAuthStore';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const { isAuthenticated } = useAuthStore();

  const { data, error, isLoading, getProductById } = useProducts();
  const { setQuantity, handleAddToCart } = useCart();

  if (!productId) {
    return <ErrorLayout errorCode="404" text="PRODUCT NOT FOUND" />;
  }

  const product = data ? getProductById(productId) : null;

  if (error) {
    console.error('Error fetching product data:', error);
    return <ErrorLayout errorCode="500" text="ERROR FETCHING PRODUCT DETAIL" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return <ErrorLayout errorCode="404" text="PRODUCT NOT FOUND" />;
  }

  return (
    <MainLayout title={`${product.name} | ${SITE.SITE_NAME}`}>
      <div className="flex flex-col gap-6 p-6 md:max-w-7xl md:flex-row md:gap-20 md:p-12">
        <img
          src={product.imageUrl}
          className="rounded-lg shadow-sm md:max-w-xl"
          alt={product.name}
        />

        <div className="flex w-full flex-col gap-8">
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
              className="w-20 appearance-none bg-custom-bgLight p-4 text-lg text-custom-textLight"
              placeholder="1"
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button
              type="submit"
              className="w-full bg-custom-surface p-4 text-lg font-medium text-custom-textLight shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight disabled:bg-custom-surface disabled:font-medium disabled:text-custom-textLight disabled:opacity-70 dark:shadow-stone-800"
              onClick={() => {
                handleAddToCart(product);
              }}
              disabled={!isAuthenticated}
            >
              Add to Cart
            </button>
          </div>
          {!isAuthenticated && (
            <p className="w-full text-custom-accent">Sign in to add to cart.</p>
          )}
        </div>
      </div>
      <SectionHeader title="Related Products" />
      {data && <ProductContainer products={data} index={3} />}
    </MainLayout>
  );
}

export default ProductDetail;
