'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';
import WhatsAppFloating from '@/components/WhatsAppFloating';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <WhatsAppFloating />
    </ThemeProvider>
  );
}