import { useEffect, useRef, useState } from "react";
import logo from "../assets/milo-miso-logo.svg";

import Petbath from "../assets/petbath.svg";
import Vetcheck from "../assets/vetcheck.svg";
import Nailtrim from "../assets/nailtrim.svg";
import Dentalcare from "../assets/dentalcare.svg";
import Grooming from "../assets/grooming.svg";
import Vaccine from "../assets/vaccine.svg";

import "./Navbar.css";

const SERVICES = [
  {
    title: "PET BATH",
    description:
      "A gentle bath and basic grooming session to leave your pet feeling clean, fresh, and comfortable.",
    image: Petbath,
  },
  {
    title: "VET CHECKUP",
    description:
      "A regular health check to make sure your pet is doing well and to catch small concerns early.",
    image: Vetcheck,
  },
  {
    title: "NAIL TRIM",
    description:
      "A careful nail trim that helps keep your pet comfortable and makes everyday movement easier.",
    image: Nailtrim,
  },
  {
    title: "VACCINATION",
    description:
      "Routine vaccinations to help protect your pet from common illnesses and keep their care on track.",
    image: Vaccine,
  },
  {
    title: "DENTAL CARE",
    description:
      "A simple dental check and cleaning to help keep your pet's teeth, gums, and breath in good shape.",
    image: Dentalcare,
  },
  {
    title: "GROOMING",
    description:
      "A neat and comfortable grooming session tailored to your pet's coat, needs, and overall comfort.",
    image: Grooming,
  },
];

const NAV_LINKS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Team",
    href: "#team",
  },
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

  const toggleServices = () => {
    setServicesOpen((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* =========================================
            LOGO
        ========================================= */}
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

        {/* =========================================
            DESKTOP NAVIGATION
        ========================================= */}
        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={closeMenus}
          >
            Home
          </a>

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
              onClick={toggleServices}
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
              {/* DROPDOWN HEADER */}
              <div className="dropdown-header">
                <span>OUR SERVICES</span>

                <h3>
                  Care for every wag &amp; purr.
                </h3>
              </div>

              {/* SERVICES */}
              <div className="services-dropdown-grid">
                {SERVICES.map((service) => (
                  <a
                    key={service.title}
                    href="#services"
                    className="service-dropdown-item"
                    onClick={closeMenus}
                  >
                    {/* IMAGE */}
                    <div className="service-illustration">
                      {service.image && (
                        <img
                          src={service.image}
                          alt=""
                        />
                      )}
                    </div>

                    {/* TEXT */}
                    <div className="service-dropdown-text">
                      <h4>{service.title}</h4>

                      <p>{service.description}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* VIEW ALL */}
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

          {/* ABOUT + TEAM */}
          {NAV_LINKS.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenus}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* =========================================
            DESKTOP CTA
        ========================================= */}
        <a
          href="#contact"
          className="navbar-button"
          onClick={closeMenus}
        >
          Contact us
        </a>

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}
        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
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

      {/* =========================================
          MOBILE MENU
      ========================================= */}
      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <a
          href="#home"
          onClick={closeMenus}
        >
          Home
        </a>

        {/* MOBILE SERVICES */}
        <button
          type="button"
          className="mobile-services-trigger"
          onClick={toggleServices}
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
              className="mobile-service-item"
            >
              {service.image && (
                <span className="mobile-service-image">
                  <img
                    src={service.image}
                    alt=""
                  />
                </span>
              )}

              <span>{service.title}</span>
            </a>
          ))}
        </div>

        {/* ABOUT + TEAM */}
        {NAV_LINKS.slice(1).map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenus}
          >
            {link.label}
          </a>
        ))}

        {/* MOBILE CTA */}
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