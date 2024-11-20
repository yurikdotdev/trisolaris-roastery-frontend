import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getYear(): string {
  return String(new Date().getFullYear())
}

export function convertPrice(price: number): string {
  return `Rp.${price.toLocaleString('id-ID')}`;
}
