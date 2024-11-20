import { Trash } from 'lucide-react';

function CartItem() {
  return (
    <div className="flex w-full cursor-pointer flex-row gap-4 rounded-lg p-4 shadow-sm hover:shadow-lg md:gap-6 md:p-6">
      <img
        src="https://cdn.dribbble.com/users/1622978/screenshots/16873134/media/7f5d72bce5b94fe1ae56484394de673f.jpg?compress=1&resize=1600x1200&vertical=top"
        className="h-24 w-24 rounded-lg object-cover md:h-32 md:w-32"
        alt="Aceh Gayo Coffee"
      />
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-medium md:text-lg">Aceh Gayo</h1>
        <p className="font-newsreader text-lg font-medium md:text-lg">
          Rp.120.000
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          id="quantity"
          type="number"
          min="0"
          defaultValue="1"
          className="w-16 rounded-lg border bg-custom-bgLight p-1 text-center text-sm text-custom-bgDark md:w-20"
        />
      </div>
      <button>
        <Trash className="h-5 w-5 cursor-pointer" />
      </button>
    </div>
  );
}

export default CartItem;
