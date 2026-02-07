'use client';

import Starfield from '@/components/StarEmojiFiled';
import TopNav from '@/components/TopNavbar';
import BottomNav from '@/components/Bottomnavbar';
import { Box, ButtonBase, Typography, Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import PieCharts from '@/components/PieChart';

export default function skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <TopNav />
      <Box
        sx={{
          display: 'flex',
          width: '100vw',
          height: '60vh',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: { xs: '35px', sm: '60px', md: '60px', lg: '80px' },
        }}
      >
        <Starfield />

        <ButtonBase
          sx={{
            width: { xs: '80%', sm: '80%', md: '80%', lg: '80%' },
            height: '60vh',
            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
            borderBottomLeftRadius: 50,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            borderBottomRightRadius: 0,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '80vh',
              marginTop: { xs: '35px', sm: '60px', md: '60px', lg: '80px' },
              background: '#FFFFFFC2',
              /* 🔥 SCALE ANIMATION */
              transform: mounted ? 'scale(1)' : 'scale(0.1)',
              opacity: mounted ? 1 : 0,
              transition: 'transform 600ms ease-out, opacity 600ms ease-out',
              transformOrigin: 'center',
              borderBottomLeftRadius: 50,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 0,
            }}
          >
            <PieCharts />
          </Box>
          <BottomNav />
        </ButtonBase>
      </Box>
    </>
  );
}
