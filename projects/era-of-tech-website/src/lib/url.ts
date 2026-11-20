/** Prefix an internal path with the configured base (works on GitHub Pages sub-paths). */
export function u(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return `${base}${path.startsWith('/') ? path : '/' + path}`;
}
import { contact } from '../data/site';
export function waLink(text = contact.whatsappMessage): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
export function bookingHref(): string {
  return contact.bookingUrl || waLink("Hi Era of Tech! I'd like to book a 20-minute call about a project.");
}
