import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductContainer from '@/components/ProductContainer';
import TopBar from '@/components/TopBar';

function Products() {
  return (
    <Container>
      <TopBar />
      <Header title="Products" />
      <ProductContainer n={12} />
      <div className="mt-6 flex items-center justify-center space-x-2">
        <button className="rounded bg-gray-200 px-3 py-1 text-gray-600">
          Previous
        </button>
        <button className="rounded bg-green-500 px-3 py-1 text-white">1</button>
        <button className="rounded bg-gray-200 px-3 py-1 text-gray-600">
          2
        </button>
        <button className="rounded bg-gray-200 px-3 py-1 text-gray-600">
          3
        </button>
        <button className="rounded bg-gray-200 px-3 py-1 text-gray-600">
          Next
        </button>
      </div>
      <Footer />
    </Container>
  );
}

export default Products;
