import { API, ROUTES } from '@/config';
import { setCookie } from '@/lib/cookie';
import { setAuthenticated, setUser } from '@/stores/useAuthStore';
import { ActionFunctionArgs, redirect } from 'react-router-dom';

export type LoginResponse = {
  message: string;
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
    role: string;
    createdAt: string;
    updatedAt: string;
  };
};

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  if (!userData.email || !userData.password) {
    console.log('Username and password are required');
  }

  console.log(userData);

  const response = await fetch(API.SIGNIN, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const loginResponse: LoginResponse = await response.json();

  if (!loginResponse) {
    console.log('Error logging in user');
  }

  const { token, user } = loginResponse;

  if (!token) {
    console.log('Error logging in user');
  }

  if (!user) {
    console.log('Error logging in user');
  }

  console.log(loginResponse);

  setCookie(token, 7);
  setUser(user);
  setAuthenticated(true);

  return redirect(ROUTES.ACCOUNT);
};
