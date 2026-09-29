import "./OurTeam.css";

import team1 from "../../../assets/images/team/team-1.png";
import team2 from "../../../assets/images/team/team-1.png";
import team3 from "../../../assets/images/team/team-1.png";
import team4 from "../../../assets/images/team/team-1.png";
import team5 from "../../../assets/images/team/team-1.png";

const teamMembers = [
  {
    name: "Ritik Raushan",
    role: "Founder & Web Developer",
    image: team1,
    description:
      "Building thoughtful digital experiences that combine technology, design and business thinking.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "UI/UX Designer",
    image: team2,
    description:
      "Creating simple, engaging and purposeful interfaces that make digital experiences better.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Web Developer",
    image: team3,
    description:
      "Turning ideas into fast, responsive and scalable websites built for modern businesses.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "SEO & Growth Specialist",
    image: team4,
    description:
      "Helping businesses improve their visibility, reach the right audience and grow organically.",
    linkedin: "#",
  },
  {
    name: "Team Member",
    role: "Digital Marketing Specialist",
    image: team5,
    description:
      "Building focused marketing strategies that connect brands with the people who matter.",
    linkedin: "#",
  },
];

export default function OurTeam() {
  return (
    <section className="our-team">
      <div className="our-team__container">

        {/* TOP LABEL */}
        <div className="our-team__eyebrow">
          <span className="our-team__eyebrow-line"></span>
          <span>OUR TEAM</span>
        </div>


        {/* SECTION HEADER */}
        <div className="our-team__header">

          <div className="our-team__heading-wrap">
            <h2 className="our-team__title">
              The People Behind
              <br />
              <span>Better Digital Work.</span>
            </h2>
          </div>

          <div className="our-team__intro">
            <p>
              Great digital work comes from people who care about the details.
              Our team brings strategy, creativity and technology together to
              create work that moves businesses forward.
            </p>
          </div>

        </div>


        {/* TEAM GRID */}
        <div className="our-team__grid">

          {teamMembers.map((member, index) => (
            <article
              className={`team-card team-card--${index + 1}`}
              key={member.name + index}
            >

              {/* IMAGE */}
              <div className="team-card__image-wrap">

                <div className="team-card__image">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>

                {/* ORANGE CORNER */}
                <span className="team-card__corner"></span>

                {/* NUMBER */}
                <span className="team-card__number">
                  0{index + 1}
                </span>

              </div>


              {/* CONTENT */}
              <div className="team-card__content">

                <div>
                  <h3>{member.name}</h3>
                  <span className="team-card__role">
                    {member.role}
                  </span>
                </div>

                <p>{member.description}</p>

                <a
                  href={member.linkedin}
                  className="team-card__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>VIEW PROFILE</span>
                  <span className="team-card__arrow">↗</span>
                </a>

              </div>

            </article>
          ))}

        </div>


        {/* BOTTOM STATEMENT */}
        <div className="our-team__bottom">

          <span className="our-team__bottom-line"></span>

          <p>
            Strategy <strong>+</strong> Creativity <strong>+</strong>{" "}
            Technology <strong>=</strong> Meaningful Digital Work
          </p>

        </div>

      </div>
    </section>
  );
}