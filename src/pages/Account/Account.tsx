import MainLayout from '@/components/layouts/MainLayout';

function Account() {
  return (
    <MainLayout title="Account | Trisolaris Roastery Co.">
      <div className="mx-auto mt-6 max-w-2xl rounded-md bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-semibold">
          Edit Account Information
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter new password"
              className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-green-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-green-500 p-3 text-white hover:bg-green-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default Account;
