import React, { Component } from "react";
// import Pokedex from "./Pokedex";

class Pokecard extends Component {
  render() {
    const { id, name, type, base_experience } = this.props;
    let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

    let image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(
      id
    )}.png`;

    return (
      <div className="pokecard">
        <h1 className="pokecard__title">{name}</h1>
        <img className="pokecard__image" src={image} alt={name} />
        <h2 className="pokecard__data">Type: {type.toUpperCase()}</h2>
        <h3 className="pokecard__data">EXP: {base_experience}</h3>
      </div>
    );
  }
}

export default Pokecard;
