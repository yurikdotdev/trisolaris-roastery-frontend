import { API, ROUTES } from '@/config';
import { Register } from '@/schemas/Auth';
import { ActionFunctionArgs, redirect } from 'react-router-dom';

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userData = {
    username: formData.get('username'),
    email: formData.get('email'),
    role: 'customer',
    password: formData.get('password'),
  };

  if (!userData.username || !userData.email || !userData.password) {
    console.log('Username, email, and password are required');
  }

  const response = await fetch(API.REGISTER, {
    method: 'POST',
    body: JSON.stringify(userData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const registerResponse: Register = await response.json();

  if (!registerResponse) {
    console.log('Error registering user');
  }

  return redirect(ROUTES.SIGNIN);
};
