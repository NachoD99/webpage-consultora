import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Layout from "./layout/Layout";
import GlobalBackground from './components/GlobalBackground';
import VantaBackground from "./components/VantaBackground";

export default function App() {
  return (
    <Router>
        <GlobalBackground />
        <VantaBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Layout>
    </Router>
  );
}