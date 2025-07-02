// src/components/GlobalBackground.jsx
import { Box } from '@mui/material';

export default function GlobalBackground() {
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        top: 0,
        left: 0,
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgb(255, 255, 255), rgb(158, 68, 32), rgb(106, 36, 161), rgb(0, 25, 255));',
          filter: 'blur(150px)',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.4,
        },
      }}
    />
  );
}
