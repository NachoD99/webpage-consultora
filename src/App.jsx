import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Layout from './layout/Layout';
import Contact from './pages/Contact';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Home from './pages/Home';
import GlobalBackground from './components/GlobalBackground';
import VantaBackground from "./components/VantaBackground";

function LanguageWrapper() {
  const { lng } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <Layout>
      
        <GlobalBackground />
        <VantaBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/es" />} />
      <Route path="/:lng/*" element={<LanguageWrapper />} />
    </Routes>
  );
}