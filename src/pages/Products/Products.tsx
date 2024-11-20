import MainLayout from '@/components/layouts/MainLayout';
import ProductContainer from '@/components/ProductContainer';
import { useProducts } from '@/hooks/useProducts';

function Products() {
  const { data, error } = useProducts();

  if (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading products...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log('Fetched products:', data);

  return (
    <MainLayout title="All Products | Trisolaris Roastery">
      <ProductContainer products={data} />
    </MainLayout>
  );
}

export default Products;
