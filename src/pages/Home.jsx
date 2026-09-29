import Hero from "../components/home/Hero/Hero";
import BrandTicker from "../components/home/BrandTicker/BrandTicker";
 import StoreTransformation from "../components/home/StoreTransformation/StoreTransformation";
import ServicesBento from "../components/home/ServicesBento/ServicesBento";
import GrowthEcosystem from "../components/home/GrowthEcosystem/GrowthEcosystem";
import FeaturedWork from "../components/home/FeaturedWork/FeaturedWork";
import Performance from "../components/home/Performance/Performance";
import Process from "../components/home/Process/Process";
import WhyChooseUs from "../components/home/WhyChooseUs/WhyChooseUs";
import Stats from "../components/home/Stats/Stats";
import Testimonials from "../components/home/Testimonials/Testimonials";
// import OurTeam from "../components/home/OurTeam/OurTeam";
import FAQs from "../components/home/FAQs/FAQs";
import FinalCTA from "../components/home/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />

      <BrandTicker />

       

      <StoreTransformation />

      <ServicesBento />

      <GrowthEcosystem />

      <FeaturedWork />

      <Performance />

      <Process />

      <WhyChooseUs />

      <Stats />

      <Testimonials />

      {/* OUR TEAM */}
      {/* <OurTeam /> */}

      <FAQs />

      <FinalCTA />
    </>
  );
}