import Footer from '../components/Footer';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Container,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const navItems = [
  { label: 'INICIO', to: '/' },
  { label: 'SERVICIOS', to: '/services' },
  { label: 'CONTACTO', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
];

export default function Layout({ children }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          mt: isMobile ? 0 : '30px',
          mx: isMobile ? 0 : 'auto',
          width: isMobile ? '100%' : '40%',
          borderRadius: isMobile ? 0 : '30px',
          backdropFilter: 'blur(10px)',
          backgroundImage: isMobile ? 0 : `radial-gradient(ellipse at top, rgba(0,191,255,0.25), transparent 70%)`,
          backgroundColor: isMobile ? 'transparent' : 'rgba(43, 43, 92, 0.5)',
          // border: isMobile ? '0' : '2px solid rgba(73, 75, 110, 0.5)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
            {/* Logo o nombre */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.25rem',
              }}
            >
              Industria 4.0
            </Typography>

            {/* Desktop Nav */}
            {!isMobile && (
              <Stack direction="row" spacing={3}>
                {navItems.map(({ label, to }) => (
                  <Button
                    key={to}
                    component={Link}
                    to={to}
                    sx={{
                      color: 'white',
                      fontWeight: location.pathname === to ? 'bold' : 700,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      '&:hover': {
                        color: 'primary.main',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {label}
                  </Button>
                ))}
              </Stack>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <>
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>

                <Drawer
                  anchor="right"
                  open={drawerOpen}
                  onClose={toggleDrawer(false)}
                  ModalProps={{
                    sx: {
                      background: 'background.paper', // o '#0a0f1c' o 'rgba(0,0,0,0.8)'
                      color: 'text.primary',                // asegura que el texto sea visible
                      backdropFilter: 'blur(5px)',        // opcional: efecto de glassmorphism
                      borderLeft: '1px solid rgba(255,255,255,0.1)', // opcional
                    },
                  }}
                >
                  <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                    <List>
                      {navItems.map(({ label, to }) => (
                        <ListItem button component={Link} to={to} key={to} sx={{
                          '&:hover': {
                            backgroundColor: 'rgba(0,191,255,0.1)', // azul suave al hover
                          },
                        }}>
                          <ListItemText primary={label} sx={{ color: '#fff' }} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Contenido */}
      <Box component="main">{children}</Box>

      <Footer />
    </>
  );
}
