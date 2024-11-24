import ProductContainer from '@/components/product/ProductContainer';
import { SITE } from '@/config';
import { useProducts } from '@/hooks/useProducts';
import MainLayout from '@/layouts/MainLayout';

function Products() {
  const { data, error, isLoading } = useProducts();

  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading products...</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout title={`All Products | ${SITE.SITE_NAME}`}>
      <ProductContainer products={data} />
    </MainLayout>
  );
}

export default Products;
