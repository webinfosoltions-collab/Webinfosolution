import "./ShopifyExpertise.css";

export default function ShopifyExpertise() {
  const expertise = [
    {
      number: "01",
      title: "Custom Shopify Development",
      text: "Purpose-built Shopify storefronts developed around your brand, products and business requirements.",
      icon: "⌘",
    },
    {
      number: "02",
      title: "Theme Customization",
      text: "Clean, polished theme customization that improves the visual experience without compromising usability.",
      icon: "◈",
    },
    {
      number: "03",
      title: "Custom Sections",
      text: "Flexible custom sections and content blocks that give you more control over your Shopify storefront.",
      icon: "▦",
    },
    {
      number: "04",
      title: "Responsive Design",
      text: "Consistent shopping experiences across desktop, tablet and mobile devices.",
      icon: "⌁",
    },
    {
      number: "05",
      title: "Speed Optimization",
      text: "Performance-focused development to keep storefronts lightweight, efficient and user-friendly.",
      icon: "↗",
    },
    {
      number: "06",
      title: "Shopify Bug Fixing",
      text: "Precise troubleshooting and fixes for theme, layout, functionality and storefront issues.",
      icon: "⌕",
    },
    {
      number: "07",
      title: "App Integration",
      text: "Seamless integration of Shopify apps and third-party tools without disrupting the store experience.",
      icon: "+",
    },
    {
      number: "08",
      title: "Store Migration",
      text: "Carefully planned Shopify migrations focused on preserving content, structure and customer experience.",
      icon: "→",
    },
  ];

  return (
    <section className="shopify-expertise" id="shopify-expertise">
      <div className="shopify-expertise__container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="shopify-expertise__header">

          <span className="shopify-expertise__eyebrow">
            <i></i>
            WHAT I DO
            <i></i>
          </span>

          <h2>
            Shopify Expertise Built
            <span>For Better Stores</span>
          </h2>

          <p>
            From custom storefront development to performance optimization,
            I focus on the technical details that make a Shopify store feel
            polished, reliable and ready to grow.
          </p>

        </div>


        {/* =========================
            EXPERTISE GRID
        ========================== */}
        <div className="shopify-expertise__grid">

          {expertise.map((item) => (
            <article
              className="shopify-expertise-card"
              key={item.number}
            >

              <div className="shopify-expertise-card__top">

                <span className="shopify-expertise-card__number">
                  {item.number}
                </span>

                <span className="shopify-expertise-card__icon">
                  {item.icon}
                </span>

              </div>

              <div className="shopify-expertise-card__content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

              <div className="shopify-expertise-card__bottom">

                <span>EXPLORE CAPABILITY</span>

                <span className="shopify-expertise-card__arrow">
                  ↗
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}