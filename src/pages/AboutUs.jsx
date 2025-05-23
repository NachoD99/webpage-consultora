import {
    Box,
    Container,
    Typography,
    Grid,
    Avatar,
    Paper,
    Stack
} from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import InsightsIcon from '@mui/icons-material/Insights';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation('aboutUs');
    const icons = [
        <PrecisionManufacturingIcon />,
        <InsightsIcon />,
        <GroupsIcon />,
        <VerifiedUserIcon />
    ];
    const ceos = t('ceos', { returnObjects: true });
    console.log("ceos", typeof ceos);
    return (
        <Box sx={{ py: 10, backgroundColor: 'transparent' }}>
            <Container maxWidth="md">
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
                        {t('title1')}
                    </Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight={700}
                        mb={6}
                        sx={{ background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                    >
                        {t('title2')}
                    </Typography>
                </Box>

                <Typography
                    variant="body1"
                    align="center"
                    color="text.secondary"
                    mb={6}
                >
                    {t('description')}
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 4,
                                height: '100%',
                                backgroundColor: 'background.paper',
                                border: '1px solid rgba(0,191,255, 0.2)',
                                backgroundImage:
                                    'radial-gradient(ellipse at bottom, rgba(0,191,255,0.2), transparent 80%)'
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                {t('missionTitle')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {t('missionText')}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={4}
                            sx={{
                                p: 4,
                                height: '100%',
                                backgroundColor: 'background.paper',
                                border: '1px solid rgba(0,191,255, 0.2)',
                                backgroundImage:
                                    'radial-gradient(ellipse at bottom, rgba(0,191,255,0.2), transparent 80%)'
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                {t('visionTitle')}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {t('visionText')}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Typography
                    variant="h5"
                    align="center"
                    fontWeight={600}
                    mt={8}
                    mb={4}
                    color="primary.main"
                >
                    {t('teamTitle')}
                </Typography>

                <Grid container spacing={4} justifyContent="center"  wrap="nowrap" alignItems="stretch">
                    {ceos.map((ceo, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Box
                                sx={{
                                    borderRadius: 3,
                                    overflow: 'hidden',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'background.paper',
                                    border: '1px solid rgba(0,191,255,0.3)',
                                    boxShadow: '0 0 0 1px rgba(0,191,255,0.2)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        boxShadow: '0 0 15px rgba(0,191,255,0.4)'
                                    }
                                }}
                            >
                                {/* Imagen de fondo */}
                                <Box
                                    sx={{
                                        height: 240,
                                        width: '100%',
                                        backgroundImage: `url(/src/images/ceo${i + 1}.jpg)`, // Asegurate de tener /images/ceo1.jpg, ceo2.jpg, etc.
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />

                                {/* Contenido */}
                                <Box sx={{ p: 3 }}>
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {ceo.name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {ceo.role}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" mt={1}>
                                        {ceo.bio}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
