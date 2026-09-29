import "./WhoWeAre.css";

export default function WhoWeAre() {
  return (
    <section className="who-we-are">
      <div className="who-we-are__container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="who-we-are__header">

          <span className="who-we-are__eyebrow">
            WHO WE ARE
          </span>

          <h2>
            More Than a <span>Digital Team</span>
          </h2>

          <div className="who-we-are__accent"></div>

        </div>


        {/* =========================
            BIG INTRO
        ========================== */}

        <div className="who-we-are__intro">

          <p>
            We are a team focused on turning ideas into useful
            digital experiences — combining thoughtful design,
            reliable technology and a practical understanding
            of business.
          </p>

        </div>


        {/* =========================
            EDITORIAL WORDS
        ========================== */}

        <div className="who-we-are__words">

          {/* THINK */}

          <div className="who-we-are__item">

            <div className="who-we-are__top">

              <span className="who-we-are__small">
                01
              </span>

              <span className="who-we-are__line"></span>

            </div>

            <h3>
              Think<span>.</span>
            </h3>

            <p>
              We look beyond the obvious and try to understand
              the real idea, challenge or opportunity first.
            </p>

          </div>


          {/* BUILD */}

          <div className="who-we-are__item">

            <div className="who-we-are__top">

              <span className="who-we-are__small">
                02
              </span>

              <span className="who-we-are__line"></span>

            </div>

            <h3>
              Build<span>.</span>
            </h3>

            <p>
              We turn ideas into thoughtful digital experiences
              with care, clarity and attention to detail.
            </p>

          </div>


          {/* IMPROVE */}

          <div className="who-we-are__item">

            <div className="who-we-are__top">

              <span className="who-we-are__small">
                03
              </span>

              <span className="who-we-are__line"></span>

            </div>

            <h3>
              Improve<span>.</span>
            </h3>

            <p>
              We stay curious, learn from every experience and
              look for better ways to do the work.
            </p>

          </div>

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <div className="who-we-are__bottom">

          <div className="who-we-are__bottom-mark"></div>

          <p>
            <strong>People first.</strong>{" "}
            Ideas with purpose. Work that keeps evolving.
          </p>

        </div>

      </div>
    </section>
  );
}