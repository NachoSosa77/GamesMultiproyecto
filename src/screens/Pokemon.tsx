import { useState } from "react";

const POKEMONS = [
  "ivysaur",
  "bulbasaur",
  "venasaur",
  "charmander",
  "charmeleon",
  "charizard",
  "squirtle",
  "wartortle",
  "blastoise",
  "caterpie",
  "metapod",
  "butterfree",
  "weedle",
  "kakuna",
  "beedrill",
  "pidgey",
  "pidgeotto",
  "rattata",
  "raticate",
  "spearow",
  "fearow",
  "ekans",
  "arbok",
  "pikachu",
  "raichu",
  "sandshrew",
  "sandslash",
];

const MATCH = Math.floor(Math.random() * POKEMONS.length);

type Form = HTMLFormElement & {
  pokemon: HTMLInputElement;
};

export default function Pokemon() {
  const [hasWon, toggleWon] = useState(false);

  function handleSubmit(event: React.FormEvent<Form>) {
    event.preventDefault();

    const { pokemon } = event.currentTarget;

    if (pokemon.value.toLowerCase() === POKEMONS[MATCH]) {
      toggleWon(true);
      alert("You Won!");
    } else {
      alert("Wrong answer!");
    }
  }

  return (
    <div>
      <img
        height={512}
        width={512}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          MATCH + 1
        }.png`}
        style={{
          imageRendering: "pixelated",
          filter: hasWon ? "" : "brightness(0) invert(1)",
        }}
      />
      {hasWon ? (
        <button style={{ width: "100%" }} onClick={() => location.reload()}>
          Play Again
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input autoFocus type="text" name="pokemon" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
