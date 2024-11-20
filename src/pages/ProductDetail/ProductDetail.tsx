import MainLayout from '@/components/layouts/MainLayout';
import ProductContainer from '@/components/ProductContainer';
import SectionHeader from '@/components/SectionHeader';

function ProductDetail() {
  return (
    <MainLayout title="Product Detail | Trisolaris Roastery Co.">
      <div className="flex flex-col gap-8 px-8 py-12 md:max-w-7xl md:flex-row">
        <img
          src="https://cdn.dribbble.com/users/1622978/screenshots/16873134/media/7f5d72bce5b94fe1ae56484394de673f.jpg?compress=1&resize=1600x1200&vertical=top"
          className="rounded-lg shadow-sm md:max-w-xl"
        />

        <div className="flex flex-col gap-8">
          <div className="flex-row gap-2 md:flex md:flex-col">
            <h1 className="text-4xl font-bold">Aceh Gayo</h1>
            <p className="text-custom-accent">Indonesia</p>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
            perferendis reiciendis voluptatum! Repellat corrupti quisquam
            molestiae provident! Error reprehenderit amet magni magnam nihil
            eveniet non, labore praesentium nam vitae nostrum. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Molestiae perferendis
            reiciendis voluptatum! Repellat corrupti quisquam molestiae
            provident! Error reprehenderit amet magni magnam nihil eveniet non,
            labore praesentium nam vitae nostrum.
          </p>

          <h2 className="text-3xl font-bold font-newsreader">Rp.120.000</h2>

          <div className="flex w-full overflow-hidden rounded-lg shadow-sm">
            <input
              type="number"
              className="w-1/6 bg-custom-bgLight p-4 text-lg text-custom-textLight"
              placeholder="0"
            />
            <button className="w-full bg-custom-surface p-4 text-lg font-medium text-custom-textLight shadow-stone-200 duration-300 ease-in-out hover:bg-custom-accent hover:font-bold hover:text-custom-bgLight dark:shadow-stone-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <SectionHeader title="Similar Products" />
      <ProductContainer n={3} />
    </MainLayout>
  );
}

export default ProductDetail;
