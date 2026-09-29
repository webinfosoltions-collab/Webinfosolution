import "./BehindTheWork.css";

export default function BehindTheWork() {
  return (
    <section className="behind-work">
      <div className="behind-work__container">

        {/* =========================
            HEADER
        ========================== */}

        <div className="behind-work__header">
          <span className="behind-work__eyebrow">
            BEHIND THE WORK
          </span>

          <h2>
            The Work Behind the <span>Work</span>
          </h2>

          <div className="behind-work__accent"></div>

          <p>
            Great digital work is shaped by conversations, ideas,
            experiments and countless small decisions before it
            ever reaches the screen.
          </p>
        </div>


        {/* =========================
            EDITORIAL GALLERY
        ========================== */}

        <div className="behind-work__gallery">

          {/* LARGE IMAGE */}

          <figure className="behind-work__item behind-work__item--large">

            <div className="behind-work__image">
              <img
                src="/images/about/workspace.jpg"
                alt="Workspace and creative work"
              />
            </div>

            <figcaption>
              <span>01</span>
              Planning the next build.
            </figcaption>

          </figure>


          {/* SMALL IMAGE */}

          <figure className="behind-work__item behind-work__item--small">

            <div className="behind-work__image">
              <img
                src="/images/about/design-work.png"
                alt="Digital design work"
              />
            </div>

            <figcaption>
              <span>02</span>
              Design before development.
            </figcaption>

          </figure>


          {/* TALL IMAGE */}

          <figure className="behind-work__item behind-work__item--tall">

            <div className="behind-work__image">
              <img
                src="/images/about/team-work.png"
                alt="Team collaborating"
              />
            </div>

            <figcaption>
              <span>03</span>
              Ideas are better together.
            </figcaption>

          </figure>


          {/* WIDE IMAGE */}

          <figure className="behind-work__item behind-work__item--wide">

            <div className="behind-work__image">
              <img
                src="/images/about/project-work.png"
                alt="Digital project work"
              />
            </div>

            <figcaption>
              <span>04</span>
              Turning ideas into interfaces.
            </figcaption>

          </figure>

        </div>


        {/* =========================
            BOTTOM STATEMENT
        ========================== */}

        <div className="behind-work__statement">

          <div className="behind-work__statement-line"></div>

          <p>
            <strong>Behind every finished screen</strong>
            {" "}is a process of thinking, refining and improving.
          </p>

        </div>

      </div>
    </section>
  );
}