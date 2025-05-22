// src/pages/Faq.jsx
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    InputBase,
    IconButton,
    Divider,
    Button,
    Stack,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EngineeringIcon from '@mui/icons-material/Engineering';

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
    {
        icon: <HelpOutlineIcon />,
        pregunta: '¿Qué es la Industria 4.0?',
        respuesta:
            'Es la transformación digital de los procesos industriales mediante tecnologías como IoT, IA, automatización y análisis de datos.',
    },
    {
        icon: <EngineeringIcon />,
        pregunta: '¿Qué servicios ofrecen como consultora?',
        respuesta:
            'Brindamos diagnóstico, desarrollo de soluciones a medida, implementación tecnológica y capacitación para digitalizar tu industria.',
    },
    {
        icon: <InfoOutlinedIcon />,
        pregunta: '¿Trabajan con empresas pequeñas o solo grandes plantas?',
        respuesta:
            'Colaboramos con empresas de todos los tamaños. Nuestras soluciones son escalables y adaptables a cada realidad.',
    },
    {
        icon: <SupportAgentIcon />,
        pregunta: '¿Puedo solicitar una demo o asesoría sin compromiso?',
        respuesta:
            'Sí. Podés agendar una reunión para entender tus necesidades y mostrarte cómo podríamos ayudarte.',
    },
];

export default function Faq() {
    const [search, setSearch] = useState('');

    const filteredFaqs = faqs.filter(faq =>
        faq.pregunta.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ backgroundColor: 'transparent', py: 10 }}>
            <Container maxWidth="md">
                <Typography variant="h4" fontWeight={700} align="center" mb={4}>
                    Preguntas Frecuentes
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.35), transparent 80%)`,
                        backgroundColor: 'background.paper',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        mb: 4,
                        border: '1px solid rgba(255,255,255,0.05)',
                    }}
                >
                    <SearchIcon color="primary" />
                    <InputBase
                        placeholder="Buscar pregunta..."
                        fullWidth
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        sx={{ ml: 2, color: 'text.primary' }}
                    />
                </Box>

                {/* FAQ List */}
                {filteredFaqs.length > 0 ? (
                    filteredFaqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Accordion
                                sx={{
                                    backgroundImage: `radial-gradient(ellipse at bottom, rgba(0,191,255,0.35), transparent 80%)`,
                                    backgroundColor: 'background.paper',
                                    color: 'text.primary',
                                    mb: 2,
                                    borderRadius: 2,
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    '&::before': { display: 'none' },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'primary.main' }} />}
                                >
                                    <Stack direction="row" spacing={2} alignItems="center">
                                        {faq.icon}
                                        <Typography fontWeight={600}>{faq.pregunta}</Typography>
                                    </Stack>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="text.secondary">
                                        {faq.respuesta}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </motion.div>
                    ))
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        No se encontraron preguntas que coincidan.
                    </Typography>
                )}

                <Divider sx={{ my: 6 }} />

                {/* CTA final */}
                <Box textAlign="center">
                    <Typography variant="h6" fontWeight={600} mb={2}>
                        ¿No encontraste lo que buscabas?
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/contact"
                        sx={{ fontWeight: 'bold', px: 4, py: 1 }}
                    >
                        Contactanos
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
