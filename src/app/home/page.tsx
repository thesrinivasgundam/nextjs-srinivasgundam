'use client';

import { Flare } from '@mui/icons-material';
import { Box, ButtonBase } from '@mui/material';
import TopNav from '@/components/TopNavbar';
import BottomNav from '@/components/Bottomnavbar';
import Chips from '@/components/arrows';
import Project_card_one from '../projects/page';
import Starfield from '@/components/StarEmojiFiled';

const Home = () => {
  return (
    <Box
      sx={{
        w: '100%',
        height: '100vh',
        // backgroundImage: "url('/bg.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Starfield />
      <TopNav />

      <BottomNav />
      <Project_card_one />
    </Box>
  );
};

export default Home;
