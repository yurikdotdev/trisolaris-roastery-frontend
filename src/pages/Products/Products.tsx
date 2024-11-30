import ProductContainer from '@/components/product/ProductContainer';
import { SITE } from '@/config';
import { useProducts } from '@/hooks/useProducts';
import ErrorLayout from '@/layouts/ErrorLayout';
import Loading from '@/layouts/Loading';
import MainLayout from '@/layouts/MainLayout';

function Products() {
  const { data, error, isLoading } = useProducts();

  if (error) {
    console.error('Error fetching data:', error);
    return <ErrorLayout errorCode="500" text="ERROR LOADING PRODUCTS" />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainLayout title={`All Products | ${SITE.SITE_NAME}`}>
      {data ? <ProductContainer products={data} index={9} /> : <Loading />}
    </MainLayout>
  );
}

export default Products;
