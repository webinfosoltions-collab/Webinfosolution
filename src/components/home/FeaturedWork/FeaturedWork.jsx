import './FeaturedWork.css';
import { projects } from '../../../data/projects';
import { Link } from 'react-router-dom';

// =====================================================
// LOCAL PROJECT IMAGES
// =====================================================
import project8 from '../../../assets/images/home/project-8.png';
import project9 from '../../../assets/images/home/project-9.png';
import project10 from '../../../assets/images/home/project-10.png';
import beautyStore from '../../../assets/images/home/shopify-beauty-store.webp';
import fashionStore from '../../../assets/images/home/shopify-fashion-store.webp';

// =====================================================
// LOCAL IMAGES
// =====================================================
const featuredImages = [
  project8,
  project9,
  project10,
  beautyStore,
  fashionStore,
];

// =====================================================
// FEATURED WORK
// =====================================================
export default function FeaturedWork() {
  /*
   * We use the first 10 projects from projects.js.
   * Local images are mapped to these projects.
   */
  const carouselProjects = projects.slice(0, 10);

  // =====================================================
  // RENDER CARD
  // =====================================================
  const renderCard = (project, index, copyIndex = 0) => {
    // ---------------------------------------------------
    // IMPORTANT:
    // Always use our imported local image.
    // project.image is intentionally ignored.
    // ---------------------------------------------------
    const image =
      featuredImages[index % featuredImages.length];

    const title =
      project?.title ||
      `Featured Project ${(index % featuredImages.length) + 1}`;

    const industry =
      project?.industry ||
      'Digital Experience';

    const platform =
      project?.platform ||
      'Web';

    const services =
      Array.isArray(project?.services) &&
      project.services.length > 0
        ? project.services
        : ['Web Design', 'Development'];

    const slug = project?.slug;

    return (
      <Link
        className="work-card"
        key={`${slug || 'featured-project'}-${index}-${copyIndex}`}
        to={slug ? `/work/${slug}` : '/work'}
        aria-label={`View case study for ${title}`}
      >

        {/* =================================================
            FULL PROJECT IMAGE
        ================================================== */}
        <div className="work-img">

          <img
            src={image}
            alt={`${title} project preview`}
            loading="lazy"
          />

        </div>


        {/* =================================================
            HOVER CONTENT
        ================================================== */}
        <div className="work-info">

          {/* Dark hover background */}
          <div className="work-info-overlay" />

          {/* Content */}
          <div className="work-info-content">

            <small>
              {industry} · {platform}
            </small>

            <h3>
              {title}
            </h3>

            {/* =================================================
                SERVICES
            ================================================== */}
            <div className="tag-row">

              {services.map((service, serviceIndex) => (
                <span
                  className="tag"
                  key={`${service}-${serviceIndex}`}
                >
                  {service}
                </span>
              ))}

            </div>

            {/* =================================================
                CASE STUDY
            ================================================== */}
            <b>
              View Case Study ↗
            </b>

          </div>

        </div>

      </Link>
    );
  };


  // =====================================================
  // EMPTY PROJECT STATE
  // =====================================================
  if (!carouselProjects.length) {
    return null;
  }


  // =====================================================
  // MAIN
  // =====================================================
  return (
    <section className="section featured-work">

      <div className="container">

        {/* =================================================
            SECTION HEADER
        ================================================== */}
        <div className="section-head">

          <span className="eyebrow">
            FEATURED WORK
          </span>

          <h2>
            Stores We Build Are Made{' '}
            <span className="accent">
              To Look Good — And Work Hard.
            </span>
          </h2>

        </div>


        {/* =================================================
            CAROUSEL 1
            LEFT → RIGHT
        ================================================== */}
        <div
          className="work-carousel carousel-left"
          aria-label="Featured projects"
        >

          <div className="work-track">

            {/* First set */}
            {carouselProjects.map((project, index) =>
              renderCard(
                project,
                index,
                0
              )
            )}

            {/* Duplicate set */}
            {carouselProjects.map((project, index) =>
              renderCard(
                project,
                index,
                1
              )
            )}

          </div>

        </div>


        {/* =================================================
            CAROUSEL 2
            RIGHT → LEFT
        ================================================== */}
        <div
          className="work-carousel carousel-right"
          aria-label="More featured projects"
        >

          <div className="work-track">

            {/* First set */}
            {carouselProjects.map((project, index) =>
              renderCard(
                project,
                index,
                2
              )
            )}

            {/* Duplicate set */}
            {carouselProjects.map((project, index) =>
              renderCard(
                project,
                index,
                3
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}