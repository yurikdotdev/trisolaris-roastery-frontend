import MainLayout from '@/components/layouts/MainLayout';
import ProductContainer from '@/components/ProductContainer';
import Header from '../../components/Header';

function Home() {
  return (
    <MainLayout>
      <Header title="Home" />
      <ProductContainer n={6} />
    </MainLayout>
  );
}

export default Home;
