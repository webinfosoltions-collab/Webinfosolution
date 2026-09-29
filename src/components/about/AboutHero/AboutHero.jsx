
import "./AboutHero.css";
import aboutHero from "../../../assets/images/about/about-hero.jpg";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__container">

        {/* TOP LABEL */}
        <div className="about-hero__eyebrow">
          <span className="about-hero__eyebrow-line"></span>
          <span>ABOUT US</span>
        </div>

        {/* MAIN HERO */}
        <div className="about-hero__main">

          {/* LEFT CONTENT */}
          <div className="about-hero__content">

            <h1 className="about-hero__title">
              We Build Digital
              <br />
              Experiences That
              <br />
              <span>Move Businesses Forward.</span>
            </h1>

            <p className="about-hero__description">
              We combine strategy, design and technology to create
              digital experiences that are clear, purposeful and built
              to help ambitious businesses grow.
            </p>

            <div className="about-hero__statement">
              <span className="about-hero__statement-line"></span>

              <div>
                <strong>Strategy meets execution.</strong>
                <p>
                  Every project is built with purpose, clarity and
                  measurable growth in mind.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="about-hero__visual">

            <div className="about-hero__image-border"></div>

            <div className="about-hero__image">
              <img
                src={aboutHero}
                alt="Creative digital team working together"
              />
            </div>

            <div className="about-hero__image-tag">
              <span>WHO</span>
              <strong>WE ARE</strong>
            </div>

            <div className="about-hero__corner"></div>

          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="about-hero__bottom">

          <span>STRATEGY</span>
          <i>/</i>
          <span>CREATIVITY</span>
          <i>/</i>
          <span>TECHNOLOGY</span>
          <i>/</i>
          <span>GROWTH</span>

        </div>

      </div>
    </section>
  );
}

