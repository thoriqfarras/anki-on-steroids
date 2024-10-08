import { Inter } from 'next/font/google';
import { Nunito } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const nunito = Nunito({ subsets: ['latin'], weight: '400' });
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'],
});
