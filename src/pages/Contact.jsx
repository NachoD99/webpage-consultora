import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
  IconButton,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function Contacto() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      nombre: formData.get('nombre'),
      email: formData.get('email'),
      empresa: formData.get('empresa'),
      mensaje: formData.get('mensaje'),
    };

    try {
      const res = await fetch("http://localhost:5000/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      alert(result.mensaje);
      e.target.reset();
    } catch (err) {
      alert("Error al enviar el mensaje.");
    }
  };

  return (
    <Box sx={{ backgroundColor: "transparent", py: 10 }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          fontWeight={700}
          align="center"
          gutterBottom
        >
          Contacto
        </Typography>

        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          mb={6}
        >
          ¿Tenés un proyecto o consulta? Completá el formulario y te responderemos a la brevedad.
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            {['nombre', 'email', 'empresa', 'mensaje'].map((field, i) => (
              <TextField
                key={field}
                name={field}
                label={field === 'empresa' ? 'Empresa (opcional)' : field.charAt(0).toUpperCase() + field.slice(1)}
                type={field === 'email' ? 'email' : 'text'}
                variant="outlined"
                multiline={field === 'mensaje'}
                rows={field === 'mensaje' ? 4 : 1}
                required={field !== 'empresa'}
                sx={{
                  backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.25), transparent 70%)`,
                  backgroundColor: 'background.paper',
                  border: '1px solid rgba(0,191,255, 0.5)',
                  borderRadius: '15px'
                }}
                fullWidth
              />
            ))}

            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: 'primary.main',
                color: '#000',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'secondary.main',
                },
              }}
            >
              Enviar mensaje
            </Button>
          </Stack>
        </form>

        {/* Redes sociales */}
        <Stack direction="row" spacing={2} justifyContent="center" mt={6}>
          <IconButton
            component="a"
            href="https://www.linkedin.com/company/tuempresa"
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.instagram.com/tuempresa"
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/tuempresa"
            target="_blank"
            rel="noopener"
            sx={{ color: 'primary.main' }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"
            href="mailto:contacto@tuempresa.com"
            sx={{ color: 'primary.main' }}
          >
            <EmailIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
