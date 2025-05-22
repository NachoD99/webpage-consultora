// src/components/Footer.jsx
import { Box, Container, Typography, Stack, Link, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#050812',
        color: 'text.secondary',
        py: 6,
        px: 2,
        mt: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', sm: 'center' }}
          spacing={4}
        >
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            © {new Date().getFullYear()} Consultora Industria 4.0. Todos los derechos reservados.
          </Typography>

          <Stack direction="row" spacing={3}>
            <Link href="#" underline="hover" color="text.secondary">
              Privacidad
            </Link>
            <Link href="#" underline="hover" color="text.secondary">
              Términos
            </Link>
            <Link href="/contact" underline="hover" color="text.secondary">
              Contacto
            </Link>
          </Stack>
        </Stack>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* <Typography variant="body2" align="center" sx={{ opacity: 0.5 }}>
          Desarrollado con ♥ por tu equipo de tecnología
        </Typography> */}
      </Container>
    </Box>
  );
}
