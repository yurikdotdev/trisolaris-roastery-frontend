import Container from '@/components/Container';
import Footer from '@/components/Footer';
import ProductContainer from '@/components/ProductContainer';
import TopBar from '@/components/TopBar';
import Header from '../../components/Header';

function Home() {
  return (
    <Container>
      <TopBar />
      <Header title="Home" />
      <ProductContainer n={30} />
      <Footer />
    </Container>
  );
}

export default Home;
