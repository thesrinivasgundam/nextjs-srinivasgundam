"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Fab from '@mui/material/Fab';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Disable SSR for confetti
const Confetti = dynamic(() => import("react-confetti"), {
  ssr: false,
});

export default function WhatsAppFloating() {
  const [isActive, setIsActive] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  // Get window size safely
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Stop confetti after 2.5 seconds
  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setIsActive(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const handleClick = () => {
    setIsActive(true);

    // Delay WhatsApp redirect slightly so confetti is visible
    setTimeout(() => {
      window.open("https://wa.me/917382761411", "_blank");
    }, 300);
  };

  return (
    <>
      {isActive && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={300}
          gravity={0.3}
          recycle={false}
        />
      )}

      <Fab
        color="success"
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: { xs: 100, sm: 100, md: 130, lg: 140 },
          right: { xs: 20, sm: 20, md: 100, lg: 100 },
          zIndex: 9999,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <WhatsAppIcon />
      </Fab>
    </>
  );
}