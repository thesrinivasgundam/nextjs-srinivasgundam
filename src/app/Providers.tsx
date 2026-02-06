'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/theme';

type MuiProviderProps = {
  children: React.ReactNode;
};

const MuiProvider = ({ children }: MuiProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiProvider;
