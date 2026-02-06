import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

export const inter = Inter({
  subsets: ['latin'],
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
