///
///
///
///
const getFiveMoves = async (pokename) => {
  const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`);
  const response = await request.json();
  const moves = response.moves.map(({ move }) => move.name);
  console.log(moves.slice(0, 5));
};

getFiveMoves('charmander');
