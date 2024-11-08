import Container from '@/components/Container';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';

import { Slash } from 'lucide-react';

import ProductContainer from '@/components/ProductContainer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';

function ProductDetail() {
  return (
    <Container>
      <TopBar />
      <Header title="Product Detail" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <Slash />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Product Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="relative mx-auto flex max-w-7xl gap-8 px-8 py-12">
        <img
          src="https://cdn.dribbble.com/users/1622978/screenshots/16873134/media/7f5d72bce5b94fe1ae56484394de673f.jpg?compress=1&resize=1600x1200&vertical=top"
          className="max-w-xl"
        />
        <div className="flex flex-col gap-8">
          <h1>Sample Product</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            perferendis reiciendis voluptatum! Repellat corrupti quisquam
            molestiae provident! Error reprehenderit amet magni magnam nihil
            eveniet non, labore praesentium nam vitae nostrum.
          </p>

          <div className="flex gap-4">
            <h2>Price: </h2>
            <h2>$99.99</h2>
          </div>

          <div className="flex gap-4">
            <h2>Quantity: </h2>
            <h2>1</h2>
          </div>

          <Button>Add to Cart</Button>
        </div>
      </div>

      <ProductContainer n={3} />
    </Container>
  );
}

export default ProductDetail;
