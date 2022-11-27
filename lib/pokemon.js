export async function kantoPokemon() {
  const pokeIDs = randomNum();
  const team = {};
  for (let id of pokeIDs) {
    const apiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await apiResponse.json();
    const filteredPokemon = {
      id,
      name: pokemon.name,
      types: pokemon.types.map((t) => t.type.name),
      sprite: pokemon.sprites.front_default,
    };
    team[id] = filteredPokemon;
  }

  console.log(team);
  return team;
}

export function randomNum() {
  const nums = [];
  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 151) + 1;
    nums.push(num);
  }
  return nums;
}

export default {
  kantoPokemon,
};
