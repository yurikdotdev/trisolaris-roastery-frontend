import { getCookie } from './cookie';

export const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error fetching ${url}: ${response.statusText}`);
  }

  return response.json();
};

export const fetcherWithToken = async (url: string) => {
  const token = getCookie('token');

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching ${url}: ${response.statusText}`);
  }

  return response.json();
};

export const fetchWithAuth = async (url: string, options: RequestInit) => {
  const token = getCookie('token');

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching: ${response.statusText}`);
  }

  return response.json();
};
