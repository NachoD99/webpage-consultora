import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Statitics from '../components/Statitics';



export default function Home() {
  return (
    <>
      <Hero />
      <Statitics />
      <Services />
      <WhyChooseUs />
    </>
  );
}