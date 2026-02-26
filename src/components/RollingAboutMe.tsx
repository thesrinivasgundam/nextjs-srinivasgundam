'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const images = [
  '/html5.webp',
  '/css3.png',
  '/javascript.svg',
  '/react.png',
  '/Typescript.png',
  '/tailwind.png',
  '/nextjs.svg',
  '/mui.svg',
  '/python.png',
  '/Graphql.svg',
  '/django.png',
  '/dart.png',
  '/flutter.png',
];

export default function ImageCarousel() {

  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: '',
        alignItems: 'center',
        width: '100%',
        height: '60vh',
        flexDirection: 'column',
        gap: { xs: 3, sm: 3, md: 35, lg: 2 },
      }}
    >
      {/* TITLE & DESCRIPTION */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          sx={{
            marginTop: { xs: '13px', sm: '13px ', md: '25px', lg: '30px' },
            fontSize: { xs: '30px', sm: '30px', md: '30px', lg: '40px' },
            fontWeight: 900,
            
            letterSpacing: '5px',
            textShadow: '10px',
          }}
        >
          ABOUT ME
        </Typography>
        <Typography
  sx={{
    marginTop: { xs: '15px', sm: '15px', md: '7px', lg: '20px' },
    fontSize: { xs: 9, sm: 10, md: 16, lg: 16 },
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: 2.5,
    padding: { xs: 2, sm: 0.6, md: 0, lg: 6 },
  }}
>
  {(() => {
    const text = `
      I build modern, responsive web and mobile applications using a versatile technology stack.
      With HTML, CSS, and JavaScript, I create clean and accessible user interfaces.
      Using React, TypeScript, Next.js, and MUI, I develop scalable, high-performance frontend applications.
      For cross-platform mobile development, I work with Dart and Flutter to deliver smooth native-like experiences.
      On the backend, I use Python, Django, and GraphQL to build secure and flexible APIs.
    `;

    const boldWords = [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'TypeScript',
      'Next.js',
      'MUI',
      'Dart',
      'Flutter',
      'Python',
      'Django',
      'GraphQL',
    ];

    return text.split(/(\s+)/).map((word, index) => {
      const cleanWord = word.replace(/[,.\n]/g, '');

      if (boldWords.includes(cleanWord)) {
        return (
          <Box
            key={index}
            component="span"
            sx={{ fontWeight: 700 }}
          >
            {word}
          </Box>
        );
      }

      return word;
    });
  })()}
</Typography>
      </Box>

      {/* CAROUSEL CONTAINER */}
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* CAROUSEL */}
        <Box
          sx={{
            display: 'flex',
            width: 'max-content',
            animation: 'scroll 20s linear infinite',
          }}
        >
          {[...images, ...images].map((src, i) => (
            <Box
              key={i}
              component="img"
              src={src}
              alt="carousel"
              sx={{
                width: { xs: 70, sm: 70, md: 90, lg: 90 },
                height: 90,
                p: 3,
                objectFit: 'contain',
                flexShrink: 0,
                pointerEvents: 'none',
                filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.2))',
              }}
            />
          ))}
        </Box>

        {/* Animation */}
        <style jsx global>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </Box>
    </Box>
  );
}
