import { useState } from "react";
import p from "../lib/pokemon";
import Pokecard from "./pokecard";
import s from "../styles/Home.module.css";

export default function PokemonFrontEnd() {
  const [team, setTeam] = useState({});
  return (
    <div>
      <h1 className={s.title}> Pokemon Team Generator!</h1>
      <button
        onClick={async () => setTeam(await p.kantoPokemon())}
        className={s.button}
      >
        Team get!
      </button>

      <h2 className={s.result}> Your team should be: </h2>
      <div className={s.grid}>
        {Object.entries(team).map(([id, pokemon]) => {
          return <Pokecard key={id} {...pokemon} />;
        })}
      </div>
    </div>
  );
}
