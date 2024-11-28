export function setCookie(token: string, days: number): void {
  const cookieName = 'token';
  const cookieValue = token;
  const maxAge = days * 24 * 60 * 60;
  const isSecure = location.protocol === 'https:';

  const expires = new Date();
  expires.setTime(expires.getTime() + maxAge * 1000);

  const expiresString = `Expires=${expires.toUTCString()}`;

  const cookieString = `${cookieName}=${encodeURIComponent(cookieValue)}; ${expiresString}; Max-Age=${maxAge}; Path=/; ${
    isSecure ? 'Secure;' : ''
  } SameSite=Strict`;

  document.cookie = cookieString;

  console.log('Setting cookie:', {
    name: cookieName,
    value: cookieValue,
    expires,
    maxAge,
    secure: isSecure,
  });
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  
  return null;
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

  console.log('Deleting cookie:', name);
}