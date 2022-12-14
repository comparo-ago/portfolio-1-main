import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.PNG";
import IMG2 from "../../assets/portfolio2.PNG";
import IMG3 from "../../assets/portfolio3.PNG";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="imagen de web" />
          </div>
          <h3>React Weather App </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/comparo-ago/my-weather-app"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="imagen de web" />
          </div>
          <h3>Drink Paradise App de Bebidas</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://comparo-ago.github.io/DrinkParadise-master/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
      
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="imagen de web" />
          </div>
          <h3>React Reserva Hotelera</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/comparo-ago/kusicuy"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>

          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
