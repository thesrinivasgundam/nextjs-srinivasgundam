'use client';

import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsAppFloating() {
  return (
    <Fab
      color="success"
      href="https://wa.me/917382761411" //
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed',
        bottom: { xs: 100, sm: 100, md: 130, lg: 140 },
        right: { xs: 20, sm: 20, md: 100, lg: 100 },
        zIndex: 9999,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
}
