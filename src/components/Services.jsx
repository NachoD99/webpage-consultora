// src/components/Servicios.jsx
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
} from "@mui/material";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SensorsIcon from '@mui/icons-material/Sensors';
import AssessmentIcon from '@mui/icons-material/Assessment';
import React, { useState } from 'react';

const servicios = [
  {
    icon: <PrecisionManufacturingIcon fontSize="large" />,
    titulo: "Automatización de Procesos",
    descripcion: "Implementamos soluciones de automatización para maximizar la eficiencia operativa.",
  },
  {
    icon: <SensorsIcon fontSize="large" />,
    titulo: "Internet de las Cosas (IoT)",
    descripcion: "Conectamos tus equipos a la nube para monitoreo y control en tiempo real.",
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    titulo: "Análisis de Datos",
    descripcion: "Transformamos tus datos industriales en decisiones inteligentes.",
  },
];

export default function Servicios() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "transparent" }}>
      <Box display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          mb={6}
          mr={2}
          color="text.secondary"
        >
          Nuestros
        </Typography>
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          mb={6}
          color="primary.main"
        >
          Servicios
        </Typography>
      </Box>
      {hoveredIndex !== null && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backdropFilter: 'blur(12px)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Cards */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 6 }, position: 'relative', zIndex: 20 }}
      >
        {servicios.map((servicio, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: 'flex', justifyContent: 'center' }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card
              elevation={hoveredIndex === index ? 12 : 6}
              sx={{
                backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.25), transparent 70%)`,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0,191,255)',
                color: 'text.primary',
                maxWidth: 600,
                width: 400,
                minHeight: 320,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                p: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.35)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 100 : 20,
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 56,
                    height: 56,
                    margin: 'auto',
                    mb: 2,
                    color: '#000',
                  }}
                >
                  {servicio.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {servicio.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {servicio.descripcion}
                </Typography>
              </CardContent>

              <CardActions sx={{ justifyContent: 'center', mt: 1 }}>
                <Button
                  variant="text"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 'bold',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  Ver más
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
