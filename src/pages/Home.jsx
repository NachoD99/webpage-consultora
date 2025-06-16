import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Statitics from '../components/Statitics';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n } = useTranslation('home');
  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
      </Helmet>
      <Hero />
      <Statitics />
      <Services />
      <WhyChooseUs />
    </>
  );
}