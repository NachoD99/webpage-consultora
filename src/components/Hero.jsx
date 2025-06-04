import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation("hero");
  return (
    <Box
      sx={{
        minHeight: '60vh',
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            fontWeight={500}
            align="center"
            sx={{ fontSize: { xs: '2rem', md: '6rem' }, mb: 0 }}
          >
            {t("title1")}
          </Typography>
          <Typography
            variant="h1"
            fontWeight={500}
            sx={{ fontSize: { xs: '2rem', md: '6rem' }, mt: 0, background: (theme) => theme.palette.primary.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {t("title2")}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ maxWidth: '600px', mx: 'auto', color: 'text.secondary' }}
          >
            {t("description")}
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              mt: 3,
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
            {t("cta")}
          </Button>
        </motion.div>
      </Stack>
    </Box>
  );
}
