import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <MainLayout
      title="Login | Trisolaris Roastery"
    >
      <div className="w-full max-w-md space-y-8 rounded bg-white p-6 shadow-lg">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <form className="space-y-4">
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
            Login
          </Button>
        </form>
        <p className="mt-4 text-center text-sm">
          No account?{' '}
          <Link to="/register" className="text-green-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </MainLayout>
  );
}

export default Login;
