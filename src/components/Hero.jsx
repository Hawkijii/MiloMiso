import heroPet from "../assets/hero-pet.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            <span className="line-break">Unconditional love</span>
            <br/>
            <span className="line-break">deserve the best care.</span>
          </h1>

          <p className="hero-description">
            Give your pets the ultimate glow up and the gentle care they need
          </p>

          <a href="#contact" className="hero-button">
            Contact us
          </a>
        </div>

        <div className="hero-visual">
          <img
            src={heroPet}
            alt="Veterinarian caring for a dog"
            className="hero-pet"
          />
        </div>
      </div>
    </section>
  );
}
