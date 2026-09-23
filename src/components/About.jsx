import "./About.css";

import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* =========================================
            SECTION HEADING
        ========================================= */}
        <header className="about-heading">
          <p className="about-eyebrow">ABOUT US</p>

          <h2>
            The founding story
            <br />
            behind our practice
          </h2>
        </header>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}
        <div className="about-content">

          {/* =========================================
              LEFT — CAT VISUAL
          ========================================= */}
          <div className="about-visual">
            <div className="about-circle">

              <div className="about-cat about-cat-one">
                <img
                  src={cat1}
                  alt="Milo and Miso cat"
                />
              </div>

              <div className="about-cat about-cat-two">
                <img
                  src={cat2}
                  alt="Milo and Miso cat"
                />
              </div>

            </div>
          </div>

          {/* =========================================
              RIGHT — STORY + TRUST
          ========================================= */}
          <div className="about-copy">

            <p className="about-text">
              We started Milo &amp; Miso with a simple idea: pets deserve
              thoughtful care, and their people deserve a clinic they can
              genuinely trust. Our team is here to make every visit feel
              calm, personal, and focused on what your pet needs.
            </p>

            {/* TRUST BADGE */}
            <div className="about-trust">

              <div className="about-avatars">
                <div className="about-avatar">
                  <img src={cat1} alt="" />
                </div>

                <div className="about-avatar">
                  <img src={cat2} alt="" />
                </div>

                <div className="about-avatar about-avatar-three">
                  <img src={cat1} alt="" />
                </div>

                <div className="about-avatar-plus">
                  +
                </div>
              </div>

              <p>
                Trusted by over 1,500 clients worldwide since 2012
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}