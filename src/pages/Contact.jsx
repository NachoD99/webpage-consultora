import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Container,
} from '@mui/material';

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
      e.target.reset(); // limpia el formulario si fue exitoso
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
            <TextField
              name="nombre"
              label="Nombre"
              variant="outlined"
              sx={{
                backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.25), transparent 70%)`,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0,191,255, 0.5)',
                borderRadius: '15px'
              }}
              fullWidth
              required
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              sx={{
                backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.25), transparent 70%)`,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0,191,255, 0.5)',
                borderRadius: '15px'
              }}
              fullWidth
              required
            />
            <TextField
              name="empresa"
              label="Empresa (opcional)"
              variant="outlined"
              sx={{
                backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.25), transparent 70%)`,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0,191,255, 0.5)',
                borderRadius: '15px'
              }}
              fullWidth
            />
            <TextField
              name="mensaje"
              label="Mensaje"
              variant="outlined"
              sx={{
                backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.25), transparent 70%)`,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0,191,255, 0.5)',
                borderRadius: '15px'
              }}
              fullWidth
              required
              multiline
              rows={4}
            />

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
      </Container>
    </Box>
  );
}