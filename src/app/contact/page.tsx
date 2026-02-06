'use client';

import Starfield from '@/components/StarEmojiFiled';
import TopNav from '@/components/TopNavbar';
import BottomNav from '@/components/Bottomnavbar';
import { blue } from '@mui/material/colors';
import { useEffect, useState } from 'react';
import { Box, ButtonBase, Typography, Button, TextField } from '@mui/material';
import { Instagram } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function ContactForm() {
  const [mounted, setMounted] = useState(false);
  const [slideKey, setSlideKey] = useState(0);
  //status
  // ADD states
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  // ADD validation function
  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!form.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      tempErrors.email = 'Invalid email';
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // for email form
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // handling change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // REPLACE handleSubmit with this

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // prevents reload
    setStatus('');

    if (!validate()) return;

    setStatus('Sending...');

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('Message sent successfully');
      setForm({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } else {
      setStatus('Failed to send');
    }
  };

  //handling  status submit's

  useEffect(() => {
    setMounted(true);
  }, []);

  const triggerSlide = () => {
    setSlideKey((prev) => prev + 1);
  };

  const IconSize = { xs: 30, sm: 30, md: 40, lg: 40 };

  const iconStyle = {
    fontSize: IconSize,
    color: '#000',
    cursor: 'pointer',
    transition: 'color 200ms ease',
    '&:hover': {
      color: '#9E0000',
    },
  };

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '60vh',
            marginTop: { xs: '50px', sm: '50px ', md: '75px', lg: '80px' },
          }}
        >
          <ButtonBase
            sx={{
              width: '80%',
              height: '60vh',
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              borderBottomRightRadius: 50,
              overflow: 'hidden',
              transformOrigin: 'bottom left',
              transform: mounted ? 'scale(1)' : 'scale(0.2)',
              transition: 'transform 500ms ease-out',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',
                height: '100%',
                flexDirection: {
                  xs: 'column',
                  sm: 'column',
                  md: 'row',
                  lg: 'row',
                },
              }}
            >
              {/* LEFT PANEL */}
              <Box
                sx={{
                  width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                  height: { xs: '47%', sm: '48%', md: '100%', lg: '100%' },
                  bgcolor: '#FFFFFFC2',
                  display: 'flex',
                  flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: 'column',
                  },
                  justifyContent: 'space-between',
                  padding: '48px ',
                  textAlign: {
                    xs: 'center',
                    sm: 'center',
                    md: 'left',
                    lg: 'left',
                  },
                }}
              >
                <Typography
                  key={`title-${slideKey}`}
                  sx={{
                    fontSize: { xs: 20, sm: 10, md: 40, lg: 42 },
                    fontWeight: 900,
                    mb: 2,
                    transform: 'translateX(-80px)',
                    opacity: 0,
                    animation: 'slideIn 700ms ease forwards',
                    '@keyframes slideIn': {
                      to: { transform: 'translateX(0)', opacity: 1 },
                    },
                  }}
                >
                  CONTACT
                </Typography>

                <Typography
                  key={`desc-${slideKey}`}
                  sx={{
                    lineHeight: 1.7,
                    transform: 'translateX(-120px)',
                    fontSize: {
                      xs: '10px',
                      sm: '10px',
                      md: '17px',
                      lg: '17px',
                    },
                    opacity: 0,
                    animation: 'slideInDesc 900ms ease forwards',
                    '@keyframes slideInDesc': {
                      to: { transform: 'translateX(0)', opacity: 1 },
                    },
                  }}
                >
                  Get in touch with us for collaborations, projects, and
                  professional inquiries. We respond within 24 hours.
                </Typography>
                <Box
                  sx={{
                    marginTop: { xs: 3, sm: 3, md: 8, lg: 8 },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: { xs: 3, sm: 3, md: 8, lg: 8 },
                  }}
                >
                  <Box
                    component="a"
                    href="https://www.instagram.com/thesrinivasgundam/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon sx={iconStyle} />
                  </Box>

                  <Box
                    component="a"
                    href="https://github.com/thesrinivasgundam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon sx={iconStyle} />
                  </Box>

                  <Box component="a" href="mailto:thesrinivasgundam@gmail.com">
                    <EmailIcon sx={iconStyle} />
                  </Box>

                  <Box
                    component="a"
                    href="https://www.facebook.com/people/Srinivas-Gundam/61550597097546/?rdid=X0a9fj2As9CPehE2&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1T7N1zTh9G%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon sx={iconStyle} />
                  </Box>
                </Box>

                <Box
                  key={`btn-${slideKey}`}
                  sx={{
                    mt: 3,
                    transform: 'translateY(40px)',
                    opacity: 0,
                    animation: 'slideInBtn 1000ms ease forwards',
                    '@keyframes slideInBtn': {
                      to: { transform: 'translateY(0)', opacity: 1 },
                    },
                  }}
                ></Box>
              </Box>

              {/* RIGHT PANEL (CONTACT FORM) */}
              <Box
                sx={{
                  width: { xs: '100%', sm: '100%', md: '50%', lg: '50%' },
                  height: '100%',
                  bgcolor: '#FFFFFFC2',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: {
                    xs: '0px 30px 30px 30px',
                    sm: '30px',
                    md: '48px',
                    lg: '48px',
                  },
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: { xs: 1, sm: 1, md: 2, lg: 2 },
                    backgroundImage: "url('/laptop_envelop.png')",
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '100%',

                    animation: 'levitate 4s ease-in-out infinite',

                    '@keyframes levitate': {
                      '0%': {
                        transform: 'translateY(0px)',
                      },
                      '50%': {
                        transform: 'translateY(-18px)',
                      },
                      '100%': {
                        transform: 'translateY(0px)',
                      },
                    },
                  }}
                ></Box>
              </Box>
            </Box>
          </ButtonBase>
        </Box>
      </Box>

      <BottomNav />
    </>
  );
}
