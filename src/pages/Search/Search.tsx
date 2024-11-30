import ProductContainer from '@/components/product/ProductContainer';
import { SITE } from '@/config';
import { useProducts } from '@/hooks/useProducts';
import MainLayout from '@/layouts/MainLayout';
import { useLocation } from 'react-router-dom';

function Search() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q') || '';

  const { filterProducts } = useProducts();

  const filteredProducts = filterProducts(query);

  return (
    <MainLayout title={`All Products | ${SITE.SITE_NAME}`}>
      {filteredProducts && filteredProducts.length > 0 ? (
        <ProductContainer
          products={filteredProducts}
          index={filteredProducts.length}
        />
      ) : (
        <div className='flex items-center justify-center'>
          <p className='text-medium text-custom-accent text-3xl'>No products found for "{query}".</p>
        </div>
      )}
    </MainLayout>
  );
}

export default Search;
