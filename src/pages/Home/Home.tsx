import Container from '@/components/Container';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import Header from './components/Header';

function Home() {
  return (
    <Container className="h-screen bg-gray-500">
      <TopBar />
      <Header />
      <Footer />
    </Container>
  );
}

export default Home;
