import React from "react";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="about">
      <div className="welcome">
      <img src="https://scarletviolet.pokemon.com/_images/home/header-medium-up.jpg"/>
      <h1> WELCOME TO THE COMMUNITY!!!</h1>
      </div>
      <div className="pic1">
        <a href="https://community.pokemon.com/en-us/categories/pokemon-general" target="_blank">
          <img src="https://us.v-cdn.net/6034460/uploads/XW64VDWTOOOT/game-card-community-en.png" />
        </a>
        <a href="https://community.pokemon.com/en-us/categories/pokemon-trading-card-game" target="_blank">
          <img src="https://us.v-cdn.net/6034460/uploads/G0AW5L9MACHB/game-card-tcg-en.png" />
        </a>
        </div>
        <div className="pic2">
        <a href="https://community.pokemon.com/en-us/categories/pokemon-tcg-live" target="_blank">
          <img src="https://us.v-cdn.net/6034460/uploads/JQJXYN5LMS68/game-card-tcg-live-en.png" />
        </a>
        <a href="https://community.pokemon.com/en-us/categories/pokemon-unite" target="_blank">
          <img src="https://us.v-cdn.net/6034460/uploads/8HIZCJ8GEANG/game-card-unite.png" />
        </a>
         <a href="https://community.pokemon.com/en-us/categories/pokemon-play" target="_blank">
          <img src="https://us.v-cdn.net/6034460/uploads/6PMXYJP9HAPU/game-card-play.png" />
        </a>
        </div>
        <Footer/>
    </div>
  );
}

export default About;
