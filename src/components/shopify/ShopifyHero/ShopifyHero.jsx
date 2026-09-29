import "./ShopifyHero.css";

export default function ShopifyHero() {
  return (
    <section className="shopify-hero">
      <div className="shopify-hero__container">

        {/* =========================
            LEFT CONTENT
        ========================== */}

        <div className="shopify-hero__content">

          <div className="shopify-hero__eyebrow">
            <span className="shopify-hero__eyebrow-line"></span>
            SHOPIFY DEVELOPMENT
          </div>

          <h1 className="shopify-hero__title">
            Shopify Development
            <span>That Builds Better Stores</span>
          </h1>

          <p className="shopify-hero__description">
            Custom Shopify storefronts built around your brand, products
            and customers — from theme customization and responsive UI
            to performance-focused development and polished ecommerce
            experiences.
          </p>

          <div className="shopify-hero__actions">

            <a
              href="#shopify-projects"
              className="shopify-btn shopify-btn--primary"
            >
              View My Shopify Work
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="shopify-btn shopify-btn--secondary"
            >
              Start a Project
            </a>

          </div>

        </div>


        {/* =========================
            RIGHT VISUAL
        ========================== */}

        <div className="shopify-hero__visual">

          <div className="shopify-hero__visual-label">
            SELECTED SHOPIFY WORK
          </div>


          {/* =========================
              MAIN BROWSER
          ========================== */}

          <div className="shopify-browser">

            {/* Browser Header */}

            <div className="shopify-browser__bar">

              <div className="shopify-browser__dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="shopify-browser__url">
                <span>⌁</span>
                shopify-store.com
              </div>

              <div className="shopify-browser__more">
                •••
              </div>

            </div>


            {/* =========================
                STORE PREVIEW
            ========================== */}

            <div className="shopify-store">

              {/* Store Navigation */}

              <header className="shopify-store__header">

                <div className="shopify-store__brand">

                  <span className="shopify-store__brand-mark">
                    +
                  </span>

                  <strong>ATELIER</strong>

                </div>


                <nav className="shopify-store__nav">
                  <span>Shop</span>
                  <span>Collections</span>
                  <span>Journal</span>
                </nav>


                <div className="shopify-store__actions">

                  <span>⌕</span>
                  <span>♡</span>

                  <b>2</b>

                </div>

              </header>


              {/* =========================
                  STORE HERO
              ========================== */}

              <div className="shopify-store__hero">

                <div className="shopify-store__content">

                  <span className="shopify-store__label">
                    FEATURED COLLECTION
                  </span>

                  <h2>
                    Built around
                    <br />
                    <em>the product.</em>
                  </h2>

                  <p>
                    A clean storefront experience designed
                    to make products easier to discover.
                  </p>

                  <button
                    type="button"
                    className="shopify-store__button"
                  >
                    Explore Store
                    <span>→</span>
                  </button>

                </div>


                {/* Product Visual */}

                <div className="shopify-product-scene">

                  <div className="shopify-product-shadow"></div>

                  <div className="shopify-product">

                    <div className="shopify-product__top"></div>

                    <div className="shopify-product__body">

                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                    <div className="shopify-product__label">
                      ATELIER
                    </div>

                  </div>

                  <div className="shopify-product-badge">
                    SHOPIFY
                  </div>

                </div>

              </div>


              {/* =========================
                  PRODUCT PREVIEW ROW
              ========================== */}

              <div className="shopify-product-row">

                <div className="shopify-mini-product">

                  <div className="shopify-mini-image shopify-mini-image--one"></div>

                  <div>
                    <span>Signature Piece</span>
                    <strong>01</strong>
                  </div>

                </div>


                <div className="shopify-mini-product">

                  <div className="shopify-mini-image shopify-mini-image--two"></div>

                  <div>
                    <span>New Arrival</span>
                    <strong>02</strong>
                  </div>

                </div>


                <div className="shopify-mini-product">

                  <div className="shopify-mini-image shopify-mini-image--three"></div>

                  <div>
                    <span>Best Seller</span>
                    <strong>03</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* =========================
              FLOATING CARD — TOP
          ========================== */}

          <div className="shopify-floating-card shopify-floating-card--top">

            <div className="shopify-floating-icon">
              S
            </div>

            <div>
              <small>Platform</small>
              <strong>Shopify</strong>
            </div>

          </div>


          {/* =========================
              FLOATING CARD — BOTTOM
          ========================== */}

          <div className="shopify-floating-card shopify-floating-card--bottom">

            <div className="shopify-floating-icon shopify-floating-icon--orange">
              ✓
            </div>

            <div>
              <small>Development</small>
              <strong>Custom & Responsive</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}