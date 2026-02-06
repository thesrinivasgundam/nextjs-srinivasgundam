'use client';

import { Box, ButtonBase, Typography, Avatar } from '@mui/material';
import { useEffect, useState } from 'react';

const TopNav = () => {
  const [ripple, setRipple] = useState(false);

  useEffect(() => {
    setRipple(true);
  }, []);

  return (
    <ButtonBase sx={{ width: '100%', color: '#FFFFFF' }}>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden', // 👈 REQUIRED for ripple
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: { xs: '20px', sm: '22px', md: '35px', lg: '50px' },
          paddingRight: { xs: '20px', sm: '22px', md: '35px', lg: '50px' },
          alignItems: 'center',
          backgroundColor: 'rgba(34, 34, 34, 0.24)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          width: '100dvw',
          height: { lg: '100px', md: '80px', sm: '60px', xs: '65px' },
          borderBottom: '1px solid #FF0000',
          top: 0,

          /* RIPPLE EFFECT */
          '::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            background: 'rgb(255, 255, 255)',
            borderRadius: '50%',
            transform: ripple
              ? 'translate(-50%, -50%) scale(100)'
              : 'translate(-50%, -50%) scale(0)',
            opacity: ripple ? 0 : 0.6,
            transition:
              'transform 900ms cubic-bezier(0.16, 1, 0.3, 1), opacity 900ms ease',
            pointerEvents: 'none',
            zIndex: 999,
          },
        }}
      >
        <Box></Box>
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { sm: '20px', xs: '15px', md: '32px', lg: '40px' },
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: { lg: '20px', md: '15px', sm: '8px', xs: '5px' },
            zIndex: 1, // 👈 stays above ripple
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          srinivas gundam
        </Typography>
        <Avatar
          src="/avatar_cnu.png"
          sx={{
            width: { xs: 27, sm: 30, md: 40, lg: 50 },
            height: { xs: 27, sm: 30, md: 40, lg: 50 },
            transition: 'transform 0.3s ease',
            cursor: 'pointer',
            '&:hover': {
              transform: 'scale(1.2)',
            },
          }}
        ></Avatar>
      </Box>
    </ButtonBase>
  );
};

export default TopNav;
