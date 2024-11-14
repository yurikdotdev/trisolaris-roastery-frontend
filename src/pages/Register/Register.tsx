import BaseLayout from '@/components/layouts/BaseLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <BaseLayout className="flex h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded bg-white p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold">Register</h2>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name" className="mb-2 block text-sm">
              Name
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="email" className="mb-2 block text-sm">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full"
            />
          </div>
          <div>
            <Label htmlFor="password" className="mb-2 block text-sm">
              Password
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-green-500 text-white hover:bg-green-600"
          >
            Register
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </BaseLayout>
  );
}

export default Register;
