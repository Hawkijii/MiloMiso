import "./Team.css";
import {
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import doctor1 from "../assets/muhammadhicham.jpg";
import doctor2 from "../assets/karlatottoc.jpg";
import doctor3 from "../assets/brunorodrigues.jpg";

const teamMembers = [
  {
    name: "Dr. Muhammad Hicham",
    role: "Veterinarian",
    image: doctor1,
    shadow: "purple",
  },
  {
    name: "Dr. Karla Totto",
    role: "Veterinarian",
    image: doctor2,
    shadow: "coral",
  },
  {
    name: "Dr. Bruno Rodrigues",
    role: "Pet Care Specialist",
    image: doctor3,
    shadow: "yellow",
  },
];

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="team-container">

        {/* =========================================
            HEADER
        ========================================= */}
        <header className="team-heading">
          <p className="team-eyebrow">TEAM MEMBERS</p>

          <h2>Meet our pet care team</h2>
        </header>

        {/* =========================================
            TEAM GRID
        ========================================= */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article
              className={`team-card team-card-${member.shadow}`}
              key={member.name}
            >
              {/* PROFILE IMAGE */}
              <div className="team-avatar">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>

              {/* MEMBER INFO */}
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>

              {/* CONTACT / SOCIAL LINKS */}
              <div className="team-socials">
                <a
                  href="#contact"
                  className="team-social"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail size={17} strokeWidth={2.2} />
                </a>

                <a
                  href="#contact"
                  className="team-social"
                  aria-label={`Message ${member.name}`}
                >
                  <MessageCircle size={17} strokeWidth={2.2} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* =========================================
            NEXT BUTTON
        ========================================= */}
        <button
          className="team-next"
          type="button"
          aria-label="Next team members"
        >
          <ArrowRight size={22} strokeWidth={2.2} />
        </button>

      </div>
    </section>
  );
}