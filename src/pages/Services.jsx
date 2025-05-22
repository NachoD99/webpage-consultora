// src/pages/Services.jsx
import {
  Box,
  Typography,
  Container,
  Paper,
} from '@mui/material';

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';

import BuildIcon from '@mui/icons-material/Build';
import MemoryIcon from '@mui/icons-material/Memory';
import InsightsIcon from '@mui/icons-material/Insights';
import SensorsIcon from '@mui/icons-material/Sensors';

const servicios = [
  {
    titulo: 'Automatización de Procesos',
    descripcion: 'Optimizamos líneas de producción con tecnología avanzada.',
    icono: <BuildIcon />,
  },
  {
    titulo: 'Internet de las Cosas (IoT)',
    descripcion: 'Conectamos tus dispositivos industriales en tiempo real.',
    icono: <SensorsIcon />,
  },
  {
    titulo: 'Análisis Predictivo',
    descripcion: 'Usamos IA y datos históricos para anticipar fallos.',
    icono: <InsightsIcon />,
  },
  {
    titulo: 'Gemelos Digitales',
    descripcion: 'Simulamos virtualmente tu planta en tiempo real.',
    icono: <MemoryIcon />,
  },
];

export default function Services() {
  return (
    <Box sx={{ backgroundColor: 'transparent', py: 10 }}>
      <Container>
        <Typography variant="h4" fontWeight={700} align="center" mb={6}>
          Nuestros Servicios
        </Typography>

        <Timeline position="alternate">
          {servicios.map((servicio, index) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent
                sx={{ color: 'text.primary' }}
                variant="body2"
              >
                {servicio.titulo}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  {servicio.icono}
                </TimelineDot>
                {index < servicios.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Paper
                  elevation={4}
                  sx={{
                    p: 2,
                    backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.35), transparent 80%)`,
                    backgroundColor: 'background.paper',
                    border: '1px solid rgba(0,191,255)',
                    color: 'text.primary',
                  }}
                >
                  <Typography variant="subtitle1" fontWeight="bold">
                    {servicio.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {servicio.descripcion}
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}
