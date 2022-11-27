// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function kantoPokemon(req, res) {
  const apiResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  const allpokemon = await apiResponse.json();
  console.log(allpokemon);
  res.status(200).json(allpokemon);
}
