import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="our-story">
      <div className="our-story__container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="our-story__header">

          <span className="our-story__eyebrow">
            OUR STORY
          </span>

          <h2>
            Where We <span>Started</span>
          </h2>

          <div className="our-story__accent"></div>

        </div>


        {/* =========================
            STORY INTRO
        ========================== */}

        <div className="our-story__intro">

          <div className="our-story__intro-mark">
            <span></span>
            <span></span>
          </div>

          <p>
            Every company has a starting point. Ours began with
            a simple belief — digital work should be thoughtful,
            useful and built around real business needs.
          </p>

        </div>


        {/* =========================
            STORY CONTENT
        ========================== */}

        <div className="our-story__story">

          {/* IMAGE */}

          <div className="our-story__visual">

            <div className="our-story__image-frame">

              <img
                src="/images/about/our-story.jpg"
                alt="Our team working together"
              />

              <div className="our-story__image-overlay"></div>

            </div>

            <div className="our-story__caption">
              <span></span>
              <p>Ideas begin with people.</p>
            </div>

          </div>


          {/* CONTENT */}

          <div className="our-story__content">

            <span className="our-story__mini-label">
              THE JOURNEY
            </span>

            <h3>
              From an idea to a
              <span> growing journey.</span>
            </h3>

            <p>
              We started with a desire to create digital work
              that was not only visually strong, but also useful
              for the businesses behind it.
            </p>

            <p>
              As projects and experiences grew, so did our
              understanding of what makes digital work valuable.
              We learned to listen more carefully, think more
              practically and pay closer attention to the details
              that shape the final experience.
            </p>

            <p>
              That mindset continues to guide us today. We keep
              learning, keep adapting and keep looking for better
              ways to turn ideas into meaningful digital experiences.
            </p>

          </div>

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <div className="our-story__bottom">

          <p>
            <span>Our story is still being written.</span>
            {" "}Every project adds another chapter.
          </p>

        </div>

      </div>
    </section>
  );
}