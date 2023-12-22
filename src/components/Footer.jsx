import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="title">
      <h1>The Pokemon Database</h1>
      </div>
      <div className="news">
        <a
          href="https://www.pokemon.com/us/pokemon-news/pokemon-gos-along-the-routes-event-introduces-mateo"
          target="_blank"
        >
          News
        </a>
      </div>
      <div className="parentsGuide">
        <a href="https://www.pokemon.com/us/parents-guide/" target="_blank">
          Parents Guide
        </a>
      </div>
      <div className="customerService">
        <a href="https://www.pokemon.com/us/customer-service/" target="_blank">
          Customer Service
        </a>
      </div>
      <div className="aboutCompany">
        <a href="https://corporate.pokemon.com/en-us/" target="_blank">
          About Our Company
        </a>
      </div>
      <div className="place">
        <a href="https://www.pokemon.com/us/country-region/" target="_blank">
          Select a Country/Region
        </a>
      </div>
    </footer>
  );
}

export default Footer;
