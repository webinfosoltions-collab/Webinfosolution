import "./BrandTicker.css";

const items = [
  {
    name: "Shopify",
    logo: "/logos/shopify.svg",
    className: "bt-shopify",
  },
  {
    name: "WordPress",
    logo: "/logos/wordpress.svg",
    className: "bt-wordpress",
  },
  {
    name: "React",
    logo: "/logos/react.svg",
    className: "bt-react",
  },
  {
    name: "SEO",
    logo: "/logos/google-search.svg",
    className: "bt-seo",
  },
  {
    name: "Google Ads",
    logo: "/logos/google-ads.svg",
    className: "bt-google-ads",
  },
  {
    name: "Meta Ads",
    logo: "/logos/meta.svg",
    className: "bt-meta",
  },
  {
    name: "GMB",
    logo: "/logos/google-business.svg",
    className: "bt-gmb",
  },
  {
    name: "CRO",
    logo: "/logos/cro.svg",
    className: "bt-cro",
  },
  {
    name: "Ecommerce",
    logo: "/logos/ecommerce.svg",
    className: "bt-ecommerce",
  },
];

export default function BrandTicker() {
  const tickerItems = [...items, ...items];

  return (
    <section className="bt-section">

      <div className="bt-fade bt-fade-left"></div>
      <div className="bt-fade bt-fade-right"></div>

      <div className="bt-track">

        {tickerItems.map((item, index) => (
          <div
            className={`bt-card ${item.className}`}
            key={`${item.name}-${index}`}
          >

            <div className="bt-logo-box">
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="bt-logo"
                loading="lazy"
              />
            </div>

            <span className="bt-name">
              {item.name}
            </span>

          </div>
        ))}

      </div>
    </section>
  );
}