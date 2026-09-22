import { useEffect, useRef, useState } from "react";
import logo from "../assets/milo-miso-logo.svg";
import "./Navbar.css";

const SERVICES = [
  {
    title: "Wellness Exams",
    description: "Routine checkups to keep pets happy and healthy.",
  },
  {
    title: "Vaccinations",
    description: "Essential protection for dogs and cats.",
  },
  {
    title: "Dental Care",
    description: "Gentle care for healthier teeth and gums.",
  },
  {
    title: "Diagnostics",
    description: "Careful testing when answers matter.",
  },
  {
    title: "Surgery & Treatment",
    description: "Professional care when they need it most.",
  },
  {
    title: "Preventive Care",
    description: "Helping pets stay healthy every day.",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const servicesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenus = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenus}
        >
          <img
            src={logo}
            alt="Milo & Miso Veterinary Clinic"
            className="logo-image"
          />
        </a>

        {/* DESKTOP NAV */}
        <nav className="navbar-links" aria-label="Main navigation">

          <a href="#home">Home</a>

          {/* SERVICES DROPDOWN */}
          <div
            className="services-wrapper"
            ref={servicesRef}
          >
            <button
              type="button"
              className={`services-trigger ${
                servicesOpen ? "is-open" : ""
              }`}
              onClick={() =>
                setServicesOpen((prev) => !prev)
              }
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>

              <span className="services-arrow">
                ⌄
              </span>
            </button>

            <div
              className={`services-dropdown ${
                servicesOpen ? "is-visible" : ""
              }`}
            >
              <div className="dropdown-header">
                <span>OUR SERVICES</span>

                <h3>
                  Care for every wag & purr.
                </h3>
              </div>

              <div className="services-dropdown-grid">
                {SERVICES.map((service) => (
                  <a
                    key={service.title}
                    href="#services"
                    className="service-dropdown-item"
                    onClick={closeMenus}
                  >
                    {/* Illustration goes here later */}
                    <div className="service-illustration">
                      {/* <img src={...} alt="" /> */}
                    </div>

                    <div className="service-dropdown-text">
                      <h4>{service.title}</h4>

                      <p>{service.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              <a
                href="#services"
                className="dropdown-footer-link"
                onClick={closeMenus}
              >
                <span>View all services</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* OTHER NAV LINKS */}
          {NAV_LINKS.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="navbar-button"
        >
          Contact us
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <a href="#home" onClick={closeMenus}>
          Home
        </a>

        <button
          type="button"
          className="mobile-services-trigger"
          onClick={() =>
            setServicesOpen((prev) => !prev)
          }
          aria-expanded={servicesOpen}
        >
          <span>Services</span>

          <span
            className={`mobile-services-arrow ${
              servicesOpen ? "rotate" : ""
            }`}
          >
            ⌄
          </span>
        </button>

        <div
          className={`mobile-services-list ${
            servicesOpen ? "open" : ""
          }`}
        >
          {SERVICES.map((service) => (
            <a
              key={service.title}
              href="#services"
              onClick={closeMenus}
            >
              {service.title}
            </a>
          ))}
        </div>

        {NAV_LINKS.slice(1).map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenus}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-cta"
          onClick={closeMenus}
        >
          Contact us
        </a>
      </div>
    </header>
  );
}