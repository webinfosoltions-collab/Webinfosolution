import "./ShopifyOverview.css";

export default function ShopifyOverview() {
  const pillars = [
    {
      number: "01",
      title: "Brand Experience",
      text: "A storefront should communicate your brand clearly from the first interaction to checkout.",
      icon: "✦",
    },
    {
      number: "02",
      title: "Merchandising",
      text: "Products, collections and content are structured to make browsing simple and purposeful.",
      icon: "◫",
    },
    {
      number: "03",
      title: "Mobile UX",
      text: "Every important interaction is designed to feel natural across phones, tablets and desktops.",
      icon: "⌁",
    },
    {
      number: "04",
      title: "Technical Performance",
      text: "Clean implementation and performance-focused decisions help create a faster storefront.",
      icon: "↗",
    },
  ];

  return (
    <section className="shopify-overview" id="shopify-overview">
      <div className="shopify-overview__container">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="shopify-overview__head">

          <span className="shopify-overview__eyebrow">
            <i></i>
            SHOPIFY OVERVIEW
            <i></i>
          </span>

          <h2>
            A storefront is only one part
            <span>of the ecommerce system.</span>
          </h2>

          <p>
            I connect brand presentation, merchandising, mobile UX,
            technical performance and marketing readiness into one
            coherent Shopify experience.
          </p>

        </div>


        {/* =========================
            MAIN CONTENT
        ========================== */}
        <div className="shopify-overview__layout">

          {/* LEFT VISUAL */}
          <div className="shopify-overview__visual">

            <div className="shopify-overview__visual-label">
              <span>SHOPIFY</span>
              <strong>ECOMMERCE<br />SYSTEM</strong>
            </div>

            <div className="shopify-overview__orbit">

              <div className="shopify-overview__core">
                <span>S</span>
                <small>SHOPIFY</small>
              </div>

              <div className="shopify-overview__node shopify-overview__node--top">
                <span>01</span>
                Brand
              </div>

              <div className="shopify-overview__node shopify-overview__node--right">
                <span>02</span>
                Products
              </div>

              <div className="shopify-overview__node shopify-overview__node--bottom">
                <span>03</span>
                UX
              </div>

              <div className="shopify-overview__node shopify-overview__node--left">
                <span>04</span>
                Performance
              </div>

            </div>

            <div className="shopify-overview__visual-footer">
              <span>DESIGN</span>
              <span>DEVELOPMENT</span>
              <span>OPTIMIZATION</span>
            </div>

          </div>


          {/* RIGHT CONTENT */}
          <div className="shopify-overview__pillars">

            {pillars.map((item) => (
              <article
                className="shopify-overview-card"
                key={item.number}
              >

                <div className="shopify-overview-card__number">
                  {item.number}
                </div>

                <div className="shopify-overview-card__icon">
                  {item.icon}
                </div>

                <div className="shopify-overview-card__content">

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </div>

                <span className="shopify-overview-card__arrow">
                  ↗
                </span>

              </article>
            ))}

          </div>

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}
        <div className="shopify-overview__statement">

          <span className="shopify-overview__statement-line"></span>

          <p>
            <strong>Good Shopify development</strong> is not just about
            making a store look better — it is about making the entire
            shopping experience work better.
          </p>

          <span className="shopify-overview__statement-line"></span>

        </div>

      </div>
    </section>
  );
}