import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        <Services />

        <section id="about" className="placeholder-section">
          <h2>About Milo & Miso</h2>
        </section>

        <section id="team" className="placeholder-section">
          <h2>Meet Our Team</h2>
        </section>

        <section id="contact" className="placeholder-section">
          <h2>Contact Us</h2>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Milo & Miso Veterinary Clinic</p>

        <p>
          Concept &amp; Design by Ralph Jay Guevarra ·{" "}
          <a
            href="https://ralphjayguevarra.me"
            target="_blank"
            rel="noreferrer"
          >
            ralphjayguevarra.me
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;