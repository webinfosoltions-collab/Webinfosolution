import MarketingHero from "../components/marketing/MarketingHero/MarketingHero";
import MarketingServices from "../components/marketing/MarketingServices/MarketingServices";
import MarketingPerformance from "../components/marketing/MarketingPerformance/MarketingPerformance";
import MarketingSEO from "../components/marketing/MarketingSEO/MarketingSEO";
import MarketingSocial from "../components/marketing/MarketingSocial/MarketingSocial";
import MarketingConversion from "../components/marketing/MarketingConversion/MarketingConversion";
import MarketingProcess from "../components/marketing/MarketingProcess/MarketingProcess";
import MarketingTechnology from "../components/marketing/MarketingTechnology/MarketingTechnology";






export default function DigitalMarketing() {
  return (
    <>
      <MarketingHero />
      <MarketingServices />
      <MarketingPerformance />
      <MarketingSEO />
      <MarketingSocial />
      <MarketingConversion />
      <MarketingProcess />
      <MarketingTechnology />
    </>
  );
}