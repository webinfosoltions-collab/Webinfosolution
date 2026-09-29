import AboutHero from "../components/about/AboutHero/AboutHero";
import OurStory from "../components/about/OurStory/OurStory";
import WhoWeAre from "../components/about/WhoWeAre/WhoWeAre";
import OurApproach from "../components/about/OurApproach/OurApproach";
import BehindTheWork from "../components/about/BehindTheWork/BehindTheWork";
import WorkingWithUs from "../components/about/WorkingWithUs/WorkingWithUs";
import AboutClosing from "../components/about/AboutClosing/AboutClosing";

export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <WhoWeAre />
      <OurApproach />
      <BehindTheWork />
      <WorkingWithUs />
      <AboutClosing />
    </>
  );
}