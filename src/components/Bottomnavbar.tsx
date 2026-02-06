'use client'; // Marks this component as a Client Component (required for hooks)

/* =======================
   IMPORTS
======================= */

// Next.js Link for client-side navigation
import Link from 'next/link';

// MUI components for layout & interaction
import { Box, ButtonBase, Typography } from '@mui/material';

// React hooks
import { useEffect, useState } from 'react';

// Hook to get current route path
import { usePathname } from 'next/navigation';

// MUI icons used in bottom navigation
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

/* =======================
   BOTTOM NAV COMPONENT
======================= */

const BottomNav = () => {
  // Controls visibility/initial mount animation (if needed later)
  const [show, setShow] = useState(false);

  // Current route pathname (used to detect active tab)
  const pathname = usePathname();

  // Runs once after component mounts
  useEffect(() => {
    setShow(true);
  }, []);

  /* =======================
     NAV ITEM COMPONENT
     (Reusable for each tab)
  ======================= */

  const NavItem = ({
    label,
    href,
    icon: Icon,
  }: {
    label: string;
    href: string;
    icon: React.ElementType;
  }) => {
    // Check if this nav item matches the current route
    const isActive = pathname === href;

    return (
      // Client-side navigation
      <Link href={href}>
        <ButtonBase sx={{ color: 'white' }}>
          {/* Wrapper for icon + label + indicator */}
          <Box
            sx={{
              px: { xs: 2, sm: 1.5, md: 2, lg: 5 }, // Horizontal padding by breakpoint
              py: { xs: 2, sm: 2, md: 2, lg: 2.2 }, // Vertical padding
              textAlign: 'center',
            }}
          >
            {/* NAV ICON */}
            <Icon
              sx={{
                fontSize: { xs: 30, sm: 30, md: 30, lg: 32 },
                marginBottom: '4px',
              }}
            />

            {/* NAV LABEL (currently empty strings used) */}
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: '20px',
                letterSpacing: '3px',
              }}
            >
              {label}
            </Typography>

            {/* ACTIVE ROUTE INDICATOR BAR */}
            <Box
              sx={{
                width: { xs: '50px', sm: '50px', md: '55px', lg: '60px' },
                height: { xs: '3px', sm: '3px', md: '5px', lg: '8px' },
                borderRadius: '50px',
                backgroundColor: isActive ? '#FF0000' : 'transparent',
                margin: { xs: '1', sm: '1.8', md: '6', lg: '8px auto 0' },
                transition: 'background-color 0.3s ease-in-out',
              }}
            />
          </Box>
        </ButtonBase>
      </Link>
    );
  };

  /* =======================
     BOTTOM NAV BAR LAYOUT
  ======================= */

  return (
    <Box
      sx={{
        position: 'fixed', // Always sticks to bottom
        bottom: 0,
        left: 0,
        width: '100%',
        height: { xs: '70px', sm: '70px', md: '85px', lg: '100px' },
        backgroundColor: 'rgba(255, 255, 255, 0.15)', // Glass effect
        backdropFilter: 'blur(10px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTop: '1px solid #FF0000',
        zIndex: 999, // Keeps it above other content
      }}
    >
      {/* NAV ITEMS */}
      <NavItem label="" href="/contact" icon={ContactPageIcon} />
      <NavItem label="" href="/" icon={HomeIcon} />
      <NavItem label="" href="/about" icon={InfoIcon} />
      <NavItem label="" href="/skills" icon={DonutLargeIcon} />
    </Box>
  );
};

export default BottomNav;
