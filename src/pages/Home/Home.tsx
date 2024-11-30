import SectionHeader from '@/components/common/SectionHeader';
import ProductContainer from '@/components/product/ProductContainer';
import { SITE } from '@/config';
import { useProducts } from '@/hooks/useProducts';
import MainLayout from '@/layouts/MainLayout';
import Hero from './components/Hero';

function Home() {
  const { data } = useProducts();

  return (
    <MainLayout title={`Home | ${SITE.SITE_NAME} `}>
      <Hero />
      <SectionHeader title="New Arrival" />
      {data && <ProductContainer products={data} index={6} />}
      <SectionHeader title="Best Seller" />
      {data && <ProductContainer products={data} index={6} />}
    </MainLayout>
  );
}

export default Home;
