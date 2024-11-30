import { ROUTES, SITE } from '@/config';
import MainLayout from '@/layouts/MainLayout';
import type { Register } from '@/schemas/Auth';
import { Form, Link } from 'react-router-dom';

function Register() {
  return (
    <MainLayout title={`Register | ${SITE.SITE_NAME}`}>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md">
          <Form
            className="mb-4 rounded px-8 pb-8 pt-6 shadow-md"
            method="post"
            action={ROUTES.REGISTER}
          >
            <h2 className="mb-6 text-center text-3xl font-bold">Register</h2>
            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="mb-2 block text-sm font-bold">
                Username
              </label>
              <input
                type="text"
                name="username"
                required
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-bold"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight shadow focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="focus:shadow-outline rounded bg-custom-accent px-4 py-2 font-bold text-white focus:outline-none"
              >
                Register
              </button>
              <Link
                to={ROUTES.SIGNIN}
                className="inline-block align-baseline text-sm font-bold text-custom-accent"
              >
                Sign In
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
