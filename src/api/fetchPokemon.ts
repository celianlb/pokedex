export interface Pokemon {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
}

export const fetchPokemon = async (id: number): Promise<Pokemon> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
  const data = await response.json();

  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    type: data.types[0].type.name,
    imageUrl: data.sprites.front_default,
  };

  return pokemon;
};

