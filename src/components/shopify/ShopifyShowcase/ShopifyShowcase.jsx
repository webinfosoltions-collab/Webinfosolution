import "./ShopifyShowcase.css";

import prao from "../../../assets/images/shopify/prao.jpg";
import maharani from "../../../assets/images/shopify/prao.jpg";
import divyanti from "../../../assets/images/shopify/prao.jpg";
import rbory from "../../../assets/images/shopify/prao.jpg";
import furneezy from "../../../assets/images/shopify/prao.jpg";

export default function ShopifyShowcase() {
  const projects = [
    {
      number: "01",
      category: "JEWELLERY",
      title: "PRAO",
      description:
        "A premium jewellery ecommerce experience focused on product presentation, collections and a polished shopping journey.",
      image: prao,
      url: "https://prao.com/",
      work: "Shopify Development",
    },
    {
      number: "02",
      category: "JEWELLERY",
      title: "Maharani Martini",
      description:
        "A visually rich jewellery storefront designed to give products a refined and premium online presence.",
      image: maharani,
      url: "https://maharanimartini.com/",
      work: "Shopify Development",
    },
    {
      number: "03",
      category: "FASHION",
      title: "Divyanti Designs",
      description:
        "A fashion-focused ecommerce storefront built around clean product discovery and a strong visual brand experience.",
      image: divyanti,
      url: "https://divyantidesigns.in/",
      work: "Shopify Development",
    },
    {
      number: "04",
      category: "BEAUTY",
      title: "RBORY Cosmetics",
      description:
        "A modern cosmetics ecommerce experience with product-led presentation and a clean shopping interface.",
      image: rbory,
      url: "https://rborycosmetics.in/",
      work: "Shopify Development",
    },
    {
      number: "05",
      category: "FURNITURE",
      title: "Furneezy",
      description:
        "An ecommerce storefront created to present furniture products clearly while keeping browsing simple and intuitive.",
      image: furneezy,
      url: "https://furneezy.in/",
      work: "Shopify Development",
    },
  ];

  return (
    <section className="shopify-showcase" id="shopify-work">
      <div className="shopify-showcase__container">

        {/* =========================
            HEADER
        ========================== */}
        <div className="shopify-showcase__header">

          <span className="shopify-showcase__eyebrow">
            <i></i>
            SELECTED SHOPIFY WORK
            <i></i>
          </span>

          <h2>
            Real stores.
            <span>Real ecommerce work.</span>
          </h2>

          <p>
            A selection of Shopify storefronts across jewellery, fashion,
            beauty and lifestyle ecommerce — each built around the products,
            brand and customer experience.
          </p>

        </div>


        {/* =========================
            PROJECTS
        ========================== */}
        <div className="shopify-showcase__projects">

          {projects.map((project) => (
            <article
              className="shopify-project"
              key={project.number}
            >

              {/* IMAGE */}
              <div className="shopify-project__image">

                <img
                  src={project.image}
                  alt={`${project.title} Shopify ecommerce website`}
                  loading="lazy"
                />

                <div className="shopify-project__overlay">
                  <span>VIEW STORE</span>
                  <span>↗</span>
                </div>

              </div>


              {/* CONTENT */}
              <div className="shopify-project__content">

                <div className="shopify-project__meta">

                  <span>
                    {project.number}
                  </span>

                  <span>
                    {project.category}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                <div className="shopify-project__footer">

                  <span className="shopify-project__work">
                    {project.work}
                  </span>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shopify-project__link"
                    aria-label={`Visit ${project.title}`}
                  >
                    Visit Store
                    <span>↗</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* =========================
            BOTTOM
        ========================== */}
        <div className="shopify-showcase__bottom">

          <span></span>

          <p>
            More Shopify projects available on request.
          </p>

          <span></span>

        </div>

      </div>
    </section>
  );
}