import ShopifyHero from '../components/shopify/ShopifyHero/ShopifyHero';
import ShopifyExpertise from '../components/shopify/ShopifyExpertise/ShopifyExpertise';
import CustomTheme from '../components/shopify/CustomTheme/CustomTheme';
import ShopifyShowcase from '../components/shopify/ShopifyShowcase/ShopifyShowcase';

import ShopifyOverview from '../components/shopify/ShopifyOverview/ShopifyOverview';
import ShopifyServices from '../components/shopify/ShopifyServices/ShopifyServices';
import ShopifyProcess from '../components/shopify/ShopifyProcess/ShopifyProcess';


export default function Shopify() {
  return (
    <>
      <ShopifyHero />

      <ShopifyExpertise />

      <ShopifyOverview />
   
    
      <ShopifyServices />
      <ShopifyShowcase />
      <CustomTheme />
      
      <ShopifyProcess />
      
    </>
  );
}