// src/components/PorQueElegirnos.jsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import InsightsIcon from '@mui/icons-material/Insights';
import BuildIcon from '@mui/icons-material/Build';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const razones = [
  {
    icon: <InsightsIcon />,
    titulo: "Enfoque basado en datos",
    descripcion: "Usamos inteligencia de datos para tomar decisiones estratégicas que mejoran tu operación.",
  },
  {
    icon: <BuildIcon />,
    titulo: "Soluciones a medida",
    descripcion: "Adaptamos nuestras herramientas a las necesidades específicas de tu planta o industria.",
  },
  {
    icon: <VerifiedIcon />,
    titulo: "Experiencia comprobada",
    descripcion: "Contamos con casos de éxito en sectores productivos reales.",
  },
  {
    icon: <SupportAgentIcon />,
    titulo: "Soporte experto",
    descripcion: "Acompañamiento técnico y consultivo en cada etapa del proyecto.",
  },
];

export default function PorQueElegirnos() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: "transparent", position: 'relative' }}>
      <Typography variant="h4" align="center" fontWeight={700} mb={6}>
        ¿Por qué elegirnos?
      </Typography>

      {/* Blur overlay */}
      {hoveredIndex !== null && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backdropFilter: 'blur(6px)',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        />
      )}

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 6 }, position: 'relative', zIndex: 20 }}
      >
        {razones.map((razon, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card
              elevation={hoveredIndex === index ? 12 : 6}
              sx={{
                backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.35), transparent 80%)`,
                backgroundColor: 'background.paper',
                border: '1px solid rgba(0,191,255)',
                color: 'text.primary',
                width: '100%',
                maxWidth: 300,
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.35)' : 'scale(1)',
                zIndex: hoveredIndex === index ? 100 : 20,
              }}
            >
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  width: 56,
                  height: 56,
                  mb: 2,
                  color: '#000',
                }}
              >
                {razon.icon}
              </Avatar>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {razon.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {razon.descripcion}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
