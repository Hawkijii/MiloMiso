import "./Services.css";

import Petbath from "../assets/petbath.svg";
import Vetcheck from "../assets/vetcheck.svg";
import Nailtrim from "../assets/nailtrim.svg";
import Dentalcare from "../assets/dentalcare.svg";
import Grooming from "../assets/grooming.svg";
import Vaccine from "../assets/vaccine.svg";

import { Mail, Clock3, MapPin } from "lucide-react";
const services = [
  {
    title: "PET BATH",
    description:
      "A gentle bath and basic grooming session to leave your pet feeling clean, fresh, and comfortable.",
    price: "$50",
    duration: "2 hours",
    image: Petbath,
  },
  {
    title: "VET CHECKUP",
    description:
      "A regular health check to make sure your pet is doing well and to catch small concerns early.",
    price: "$35",
    duration: "1 hour",
    image: Vetcheck,
  },
  {
    title: "NAIL TRIM",
    description:
      "A careful nail trim that helps keep your pet comfortable and makes everyday movement easier.",
    price: "$20",
    duration: "30 min",
    image: Nailtrim,
  },
  {
    title: "VACCINATION",
    description:
      "Routine vaccinations to help protect your pet from common illnesses and keep their care on track.",
    price: "$45",
    duration: "45 min",
    image: Vaccine,
  },
  {
    title: "DENTAL CARE",
    description:
      "A simple dental check and cleaning to help keep your pet's teeth, gums, and breath in good shape.",
    price: "$60",
    duration: "1 hour",
    image: Dentalcare,
  },
  {
    title: "GROOMING",
    description:
      "A neat and comfortable grooming session tailored to your pet's coat, needs, and overall comfort.",
    price: "$55",
    duration: "2 hours",
    image: Grooming,
  },
];

export default function Services() {
  return (
    <>
      {/* =========================================
          AVAILABILITY
      ========================================= */}
      <section
        className="availability"
        aria-label="Clinic information"
      >
        <div className="availability-container">

          <div className="availability-item">
            <div className="availability-icon">
              <Mail size={28} strokeWidth={2} />
            </div>

            <div className="availability-content">
              <h2>Contact Us</h2>
              <p>milomiso@vet.com</p>
              <p>+63 489 256</p>
            </div>
          </div>

          <div className="availability-item">
            <div className="availability-icon">
              <Clock3 size={28} strokeWidth={2} />
            </div>

            <div className="availability-content">
              <h2>Open Hours</h2>
              <p>Monday – Saturday</p>
              <p>8:00 AM – 6:00 PM</p>
            </div>
          </div>

          <div className="availability-item">
            <div className="availability-icon">
              <MapPin size={28} strokeWidth={2} />
            </div>

            <div className="availability-content">
              <h2>Location</h2>
              <p>Cebu City, Philippines</p>
              <a href="#contact">View Location</a>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          DIVIDER
      ========================================= */}
      <div className="services-divider">
        <hr />
      </div>

      {/* =========================================
          OUR SERVICES
      ========================================= */}
      <section className="services" id="services">
        <div className="services-container">

          <header className="services-heading">
            <p className="services-eyebrow">CARE FOR EVERY STAGE</p>
            <h2>OUR SERVICES</h2>
          </header>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.title}
              >
                {/* Top section */}
                <div className="service-main">

                  {/* Illustration area */}
                  <div className="service-image">
                    {service.image && (
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                      />
                    )}
                </div>

                  {/* Service information */}
                  <div className="service-info">
                    <h3>{service.title}</h3>

                    <p>{service.description}</p>
                  </div>

                </div>

                {/* Price + Duration */}
                <div className="service-meta">
                  <span className="service-pill">
                    {service.price}
                  </span>

                  <span className="service-pill">
                    {service.duration}
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="service-button"
                >
                  Schedule Appointment
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}