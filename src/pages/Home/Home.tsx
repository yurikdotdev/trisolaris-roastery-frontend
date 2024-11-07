import TopBar from '@/components/TopBar';
import Header from './components/Header';
import Container from '@/components/Container';

function Home() {
  return (
    <Container className='bg-gray-500 h-screen'>
      <TopBar />
      <Header />
    </Container>
  );
}

export default Home;
