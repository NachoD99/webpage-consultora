import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

export default function Layout({ children }) {
  const { t } = useTranslation('layout');



  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          mt: isMobile ? 0 : '30px',
          mx: isMobile ? 0 : 'auto',
          width: isMobile ? '100%' : '50%',
          borderRadius: isMobile ? 0 : '30px',
          backdropFilter: 'blur(10px)',
          backgroundImage: isMobile ? 0 : `radial-gradient(ellipse at top, rgba(0,191,255,0.25), transparent 70%)`,
          backgroundColor: isMobile ? 'transparent' : 'rgba(43, 43, 92, 0.5)'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.25rem',
                background: (theme) => theme.palette.text.primary, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}
            >
              {t('title')}
            </Typography>

            <DesktopNav />
            <MobileNav />
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">{children}</Box>

      <Footer />
    </>
  );
}
