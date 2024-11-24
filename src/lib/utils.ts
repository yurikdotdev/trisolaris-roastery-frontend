export function getYear(): string {
  return String(new Date().getFullYear())
}

export function convertPrice(price: number): string {
  return `Rp.${price.toLocaleString('id-ID')}`;
}
