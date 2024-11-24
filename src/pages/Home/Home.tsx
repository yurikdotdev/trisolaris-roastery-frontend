import MainLayout from '@/layouts/MainLayout';
import Hero from './components/Hero';
import { SITE } from '@/config';

function Home() {
  return (
    <MainLayout title={`Home | ${SITE.SITE_NAME} `}>
      <Hero />
    </MainLayout>
  );
}

export default Home;
