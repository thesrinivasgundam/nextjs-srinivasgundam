import localFont from 'next/font/local';

export const dmSans = localFont({
  src: '../../public/fonts/DMSans.ttf',
  variable: '--font-dm-sans',
  weight: '100 900', // IMPORTANT for variable fonts
  display: 'swap',
});
