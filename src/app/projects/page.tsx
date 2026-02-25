'use client';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Btns from '@/components/arrows';

/* -----------------------------------
   Project data source (carousel items)
------------------------------------ */
const projects = [
  {
    title: 'BIOTECH LABS',
    description:
      'Biotech Labs is a biotechnology company advancing human health, sustainable agriculture, and environmental resilience through genetic engineering and synthetic biology.',
    image: '/biotech.webp',
    link: 'https://biotech-srinivasgundam.netlify.app/',
  },
  {
    title: 'DIGITAL MARKETER',
    description:
      'digital marketer is a service that helps businesses grow their online presence and reach their target audience through strategic digital marketing campaigns.',
    image: '/portfolio-marketer.png',
    link: 'https://gundam-mahi.vercel.app/',
  },
  {
    title: 'OLD PORTFOLIO',
    description:
      'My old portfolio website, showcasing my previous projects and skills. It served as a platform to demonstrate my work and experience before the current portfolio was created.',
    image: '/srinivasgundam.webp',
    link: 'https://portfolio-srinivasgundam.netlify.app',
  },
];

export default function Project_card_one() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  /* ===== SWIPE STATE ===== */
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    setMounted(true);
  }, []);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) nextProject(); // swipe left
    if (distance < -minSwipeDistance) prevProject(); // swipe right
  };

  const project = projects[index];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '60vh',
        marginTop: { xs: '35px', sm: '60px', md: '60px', lg: '80px' },
      }}
    >
      <ButtonBase
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        sx={{
          width: { xs: '80%', sm: '80%', md: '80%', lg: '80%' },
          height: '60vh',
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
          borderBottomLeftRadius: 50,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          borderBottomRightRadius: 0,
          overflow: 'hidden',
          transformOrigin: 'bottom right',
          transform: mounted ? 'scale(1)' : 'scale(0.2)',
          transition: 'transform 500ms ease-out',
          touchAction: 'pan-y',
        }}
      >
        {/* ================= LEFT PANEL ================= */}
        <Box
          key={index}
          sx={{
            width: { xs: '100%', sm: '80%', md: '80%', lg: '80%' },
            height: '100%',
            bgcolor: '#FFFFFFC2',
            display: 'flex',
            alignItems: {
              xs: 'center',
              sm: 'center',
              md: 'start',
              lg: 'start',
            },
            justifyContent: 'space-between',
            flexDirection: 'column',
            padding: {
              xs: '40px 30px 10px 30px',
              sm: '40px 30px 10px 30px',
              md: '48px',
              lg: '48px',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 20, sm: 15, md: 30, lg: 50 },
              fontWeight: 900,
              mb: 2,
              animation: 'titleAnim 0.8s ease',
              '@keyframes titleAnim': {
                from: { opacity: 0, transform: 'translateX(600px)' },
                to: { opacity: 1, transform: 'translateX(0px)' },
              },
            }}
          >
            {project.title}
          </Typography>

          <Typography
            sx={{
              color: 'text.secondary',
              lineHeight: 1.7,
              textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' },
              fontSize: { xs: '10px', sm: '10px', md: '10px', lg: '15px' },
              animation: 'descAnim 1s ease',
              '@keyframes descAnim': {
                from: { opacity: 0, transform: 'translateX(-100px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            {project.description}
          </Typography>

          <Box
            sx={{
              animation: 'btnAnim 1.2s ease',
              '@keyframes btnAnim': {
                from: { opacity: 0, transform: 'translateX(40px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Button
              sx={{
                width: { xs: 140, sm: 140, md: 180, lg: 200 },
                height: { xs: 40, sm: 40, md: 65, lg: 70 },
                borderRadius: {
                  xs: '50px 50px 50px 50px',
                  sm: '50px 50px 50px 50px',
                  md: '0px 50px 50px 0px',
                  lg: '0px 50px 50px 0px',
                },
                color: 'black',
                bgcolor: 'red',
                fontWeight: 600,
                mt: 2,
              }}
              component="a"
              href={project.link}
              target="_blank"
            >
              HAVE A LOOK
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            {projects.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  width: index === i ? 18 : 10,
                  height: { xs: 3, sm: 4, md: 10, lg: 10 },
                  borderRadius: '50px',
                  cursor: 'pointer',
                  bgcolor: index === i ? 'red' : 'grey.700',
                }}
              />
            ))}
          </Box>
        </Box>

        {/* ================= RIGHT PANEL ================= */}
        <Box
          sx={{
            width: { xs: '100%', sm: '100%', md: '80%', lg: '80%' },
            height: '100%',
            bgcolor: '#FFFFFFC2',
            display: 'flex',
            flexDirection: {
              xs: 'column-reverse',
              sm: 'column-reverse',
              md: 'column',
              lg: 'column',
            },
            padding: { xs: '0px', sm: '0px', md: '48px', lg: '48px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'end' },
            }}
          >
            <Btns onNext={nextProject} onPrev={prevProject} />
          </Box>

          <Box
            key={project.image}
            sx={{
              marginTop: { xs: '30px', sm: '30px', md: '0px', lg: '0px' },
              width: '100%',
              height: '100%',
              backgroundImage: `url(${project.image})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              animation: 'float 4s ease-in-out infinite',
              '@keyframes float': {
                '0%': { transform: 'translateY(10px)' },
                '50%': { transform: 'translateY(-10px)' },
                '100%': { transform: 'translateY(10px)' },
              },
            }}
          />
        </Box>
      </ButtonBase>
    </Box>
  );
}
