// src/components/Hero.jsx
import { Box, Typography, Button, Stack } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
        backgroundColor: "transparent",
        color: 'text.primary',
      }}
    >
      <Stack spacing={4} width="800px" sx={{ mx: 'auto', color: 'text.secondary' }} maxWidth="lg">
        <Typography
          variant="h1"
          fontWeight={500}
           align="center"
          sx={{ fontSize: { xs: '2rem', md: '6rem' }, mb: 0 }}
        >
          Transformamos tu 
        </Typography>
        <Typography
          variant="h1"
          fontWeight={500}
          sx={{ fontSize: { xs: '2rem', md: '6rem' }, mt: 0, color: 'primary.main'}}
        >
          Industria
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ maxWidth: '600px', mx: 'auto', color: 'text.secondary' }}
        >
          Somos expertos en Industria 4.0. Digitalizamos procesos, optimizamos operaciones y te preparamos para el futuro.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '999px',
            bgcolor: 'primary.main',
            color: '#000',
            '&:hover': {
              bgcolor: 'secondary.main',
            },
          }}
        >
          Solicitar una demo
        </Button>
      </Stack>
    </Box>
  );
}
