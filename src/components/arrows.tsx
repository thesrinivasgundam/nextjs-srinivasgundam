'use client';

import { Box, IconButton } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useEffect, useRef, useState } from 'react';

export default function Btns({ onNext, onPrev }: any) {
  const [animate, setAnimate] = useState(false);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (!hovered) setAnimate(true);

      intervalRef.current = setInterval(() => {
        if (!hovered) {
          setAnimate(false);
          requestAnimationFrame(() => setAnimate(true));
        }
      }, 3000);
    }, 10000);

    return () => {
      clearTimeout(startTimeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hovered]);

  return (
    <Box
      onMouseEnter={() => {
        setHovered(true);
        setAnimate(false); // stop immediately
      }}
      onMouseLeave={() => setHovered(false)}
      className={animate ? 'box-ripple' : ''}
      sx={{
        width: '130px',
        height: 50,
        display: 'flex',
        gap: {xs:0 ,sm: 0, md:2, lg:2.1,},
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: '100px',
        position: 'relative',
      }}
    >
      <IconButton
        sx={{
          borderRadius: '100px',
          bgcolor: '#FF0000',
          display:{xs:'none', sm: 'none', md: 'flex', lg:'flex',}
        }}
        onClick={onPrev}
      >
        <KeyboardDoubleArrowLeftIcon sx={{ color: '#000', fontSize: { xs: 13, sm: 14, md: 10, lg: 28 }, display: {xs:'none', sm: 'none', md: 'flex', lg:'flex',},}} />
      </IconButton>

      <IconButton
        sx={{ borderRadius: '100px', bgcolor: '#FF0000', display: {xs:'none', sm: 'none', md: 'flex', lg:'flex',} }}
        onClick={onNext}
      >
        <KeyboardDoubleArrowRightIcon sx={{ color: '#000' , fontSize: { xs: 13, sm: 14, md: 10, lg: 28 },}} />
      </IconButton>

<style jsx global>{`
  .box-ripple::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 100px;
    border: 3px solid rgba(255, 0, 0, 0.6);
    animation: boxRipple 1s ease-out;
    pointer-events: none;
  }

  @keyframes boxRipple {
    0% {
      transform: scale(0.3);
      opacity: 1;
    }
    100% {
      transform: scale(8);
      opacity: 0;
    }
  }

  /* 📱 Disable ripple animation on mobile */
  @media (max-width: 768px) {
    .box-ripple::after {
      animation: none !important;
      border: none;
    }
  }
`}</style>

    </Box>
  );
}
