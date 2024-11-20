import MainLayout from '@/components/layouts/MainLayout';
import ProductContainer from '@/components/ProductContainer';
import SectionHeader from '@/components/SectionHeader';
import Hero from './components/Hero';

function Home() {
  return (
    <MainLayout title="Home | Trisolaris Roastery Co.">
      <Hero />

      <SectionHeader title="Popular Products" />
      <ProductContainer n={6} />

      <SectionHeader title="New Arrivals" />
      <ProductContainer n={6} />
    </MainLayout>
  );
}

export default Home;
