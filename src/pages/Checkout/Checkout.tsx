import Container from '@/components/Container';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import TopBar from '@/components/TopBar';

function Checkout() {
  return (
    <Container>
      <TopBar />
      <Header title="Checkout" />
      <div className="mx-auto max-w-4xl p-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Billing</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
                  placeholder="123 Main St"
                />
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
                    placeholder="City"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
                    placeholder="12345"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-green-500 p-3 text-white hover:bg-green-600"
              >
                Proceed to Payment
              </button>
            </form>
          </div>

          <div className="rounded-lg bg-white p-4 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Order Summary</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Item 1 - $29.99</p>
              <p>Item 2 - $19.99</p>
              <p>Item 3 - $39.99</p>
              <div className="mt-4 border-t border-gray-300"></div>
              <p className="mt-2 font-semibold">Total: $89.97</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Checkout;
