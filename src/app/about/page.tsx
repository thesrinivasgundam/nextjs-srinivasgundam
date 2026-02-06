'use client';

import { Box, ButtonBase, Typography, Button } from '@mui/material';
import Starfield from '@/components/StarEmojiFiled';
import TopNav from '@/components/TopNavbar';
import BottomNav from '@/components/Bottomnavbar';
import { useEffect, useState } from 'react';
import ImageCarousel from '@/components/RollingAboutMe';


export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <TopNav />
      <Box
        sx={{
          width: '100%',
          height: '60vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Starfield />
        <Box
          sx={{
            width: '100%',
            height: '60vh',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100vw',
              height: '60vh',
              marginTop: {xs: '40px', sm: '45px', md:'80px',lg:'80px'},
            }}
          >
            <ButtonBase
              sx={{
                width: '80%',
                height: '60vh',
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                borderBottomRightRadius: 0,
                overflow: 'hidden',

                transform: mounted ? 'translateY(0px)' : 'translateY(150px)',
                transition: 'transform 3s ease-out, opacity 700ms ease-in-out',
              }}
            >
              <Box
                sx={{
                  width: {xs: '100%', sm: '100%', md: '80%', lg: '80%'},
                  height: '100%',
                  bgcolor:' #cccccccb',
                  borderRadius: '20px',
                  padding: {xs: '3px' ,sm:'20px', md:'80px',lg: '0px'},
                  textAlign: 'left',
                  textShadow: '10px',
                  
                  
                }}
              >
                <ImageCarousel/>
              </Box>
            </ButtonBase>
          </Box>
        </Box>
      </Box>

      <BottomNav />
    </>
  );
}
