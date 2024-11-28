export function setTheme(isDark: boolean): void {
  document.documentElement.classList.toggle('dark', isDark);
}

export function saveTheme(isDark: boolean): void {
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

export function getTheme(): boolean {
  return localStorage.getItem('theme') === 'dark';
}
