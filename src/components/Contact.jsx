import "./Contact.css";
import nsuma from "../assets/nsuma.png";
import { Mail, Clock3, MapPin } from "lucide-react";  

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* =========================================
            HEADER
        ========================================= */}
        <header className="contact-heading">
          <p className="contact-eyebrow">LET'S CONNECT</p>

          <h2>Fill out our contact form</h2>
        </header>

        {/* =========================================
            CONTENT
        ========================================= */}
        <div className="contact-content">

          {/* LEFT SIDE */}
          <div className="contact-info">

            <div className="contact-info-top">
              <h3>Connect with us</h3>

              <div className="contact-detail">
                <span className="contact-icon">⌖</span>
                <p>
                  Cebu City,
                  <br />
                  Philippines
                </p>
              </div>

              <div className="contact-detail">
                <span className="contact-icon">⌕</span>
                <p>+63 489 256</p>
              </div>

              <div className="contact-detail">
                <span className="contact-icon">✉</span>
                <p>milomiso@vet.com</p>
              </div>

              <div className="contact-detail">
                <span className="contact-icon">◷</span>
                <p>Mon – Sat · 8:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="contact-illustration">
                
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form-card">

            <form className="contact-form">

              <div className="contact-fields-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                />

                <input
                  type="text"
                  placeholder="Pet Name"
                  aria-label="Pet Name"
                />
              </div>

              <div className="contact-fields-row">
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                />

                <input
                  type="tel"
                  placeholder="Phone"
                  aria-label="Phone"
                />
              </div>

              <div className="contact-fields-row">
                <select defaultValue="">
                  <option value="" disabled>
                    My pet is
                  </option>
                  <option value="dog">A Dog</option>
                  <option value="cat">A Cat</option>
                  <option value="other">Other</option>
                </select>

                <select defaultValue="">
                  <option value="" disabled>
                    Services looking for
                  </option>
                  <option value="bath">Pet Bath</option>
                  <option value="checkup">Vet Checkup</option>
                  <option value="nail">Nail Trim</option>
                  <option value="vaccination">Vaccination</option>
                  <option value="dental">Dental Care</option>
                  <option value="grooming">Grooming</option>
                </select>
              </div>

              <textarea
                placeholder="Message"
                aria-label="Message"
              ></textarea>

              <div className="contact-form-bottom">

                <label className="contact-checkbox">
                  <input type="checkbox" />
                  <span>I'd prefer a video call</span>
                </label>

                <button type="submit">
                  Make an appointment
                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}