 
import './Testimonials.css';
import { testimonials } from '../../../data/testimonials';

export default function Testimonials() {

  /*
   * ======================================================
   * IMAGE CAROUSEL DATA
   * ======================================================
   *
   * Add image to every testimonial:
   *
   * image: "/images/client-01.jpg"
   *
   * We automatically repeat the available images
   * so the carousel never looks empty.
   */


  const sourceImages = testimonials
    .filter((item) => item.image)
    .slice(0, 20);


  /*
   * If images are not added yet,
   * use testimonials themselves as fallback items.
   */

  const fallbackImages =
    sourceImages.length > 0
      ? sourceImages
      : testimonials;


  /*
   * Make sure each row has enough cards
   * for a completely filled continuous carousel.
   */

  const createCarouselItems = (items, minimum = 10) => {

    if (!items.length) return [];

    const result = [];

    for (let i = 0; i < minimum; i++) {
      result.push(items[i % items.length]);
    }

    return result;
  };


  const firstCarousel =
    createCarouselItems(fallbackImages, 10);


  const secondCarousel =
    createCarouselItems(fallbackImages, 10);


  /*
   * Duplicate the complete set.
   * This creates the seamless infinite loop.
   */

  const firstTrack = [
    ...firstCarousel,
    ...firstCarousel
  ];


  const secondTrack = [
    ...secondCarousel,
    ...secondCarousel
  ];


  const ImageCard = ({ item, index }) => {

    const image = item.image;

    return (
      <div
        className="testimonial-image-card"
        key={`${item.name}-${index}`}
      >

        <div className="testimonial-image">

          {image ? (
            <img
              src={image}
              alt={`${item.name} client`}
              loading="lazy"
            />
          ) : (
            <div className="testimonial-image-placeholder">
              <span>YOUR IMAGE</span>
            </div>
          )}

        </div>

      </div>
    );
  };


  return (
    <section className="section blue-soft testimonials-section">

      <div className="container">


        {/* ==================================================
            HEADING
        ================================================== */}

        <div className="section-head center">

          <span className="eyebrow">
            CLIENT PERSPECTIVE
          </span>

          <h2>
            Built For Better{' '}
            <span className="accent">
              Digital Momentum.
            </span>
          </h2>

        </div>


        {/* ==================================================
            CAROUSEL 1
            LEFT → RIGHT
        ================================================== */}

        <div className="testimonial-image-carousel image-carousel-left">

          <div className="testimonial-image-track">

            {firstTrack.map((item, index) =>
              ImageCard({
                item,
                index
              })
            )}

          </div>

        </div>


        {/* ==================================================
            CAROUSEL 2
            RIGHT → LEFT
        ================================================== */}

        <div className="testimonial-image-carousel image-carousel-right">

          <div className="testimonial-image-track">

            {secondTrack.map((item, index) =>
              ImageCard({
                item,
                index
              })
            )}

          </div>

        </div>


      </div>

    </section>
  );
}
 
