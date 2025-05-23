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
import { useTranslation } from 'react-i18next';

const faqs = [
    {
        icon: <HelpOutlineIcon />,
    },
    {
        icon: <EngineeringIcon />,
    },
    {
        icon: <InfoOutlinedIcon />,
    },
    {
        icon: <SupportAgentIcon />,
    },
];

export default function Faq() {
    const { t } = useTranslation('faq');

    const [search, setSearch] = useState('');
    const faqs = t('items', { returnObjects: true });
    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ backgroundColor: 'transparent', py: 10 }}>
            <Container maxWidth="md">
                <Typography variant="h4" fontWeight={700} align="center" mb={4}>
                    {t('title')}
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
                        placeholder={t('searchPlaceholder')}
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
                                        <Typography fontWeight={600}>{t(`items.${index}.question`)}</Typography>
                                    </Stack>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography color="text.secondary">
                                        {t(`items.${index}.answer`)}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </motion.div>
                    ))
                ) : (
                    <Typography variant="body1" color="text.secondary">
                        {t('notFound')}
                    </Typography>
                )}

                <Divider sx={{ my: 6 }} />

                {/* CTA final */}
                <Box textAlign="center">
                    <Typography variant="h6" fontWeight={600} mb={2}>
                        {t('ctaTitle')}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/contact"
                        sx={{ fontWeight: 'bold', px: 4, py: 1 }}
                    >
                        {t('ctaButton')}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
