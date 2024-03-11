import { Pokemon } from "@/api/fetchPokemon";
import PokemonCard from "../PokemonCard";

type PokemonListProps = {
    pokemons: Pokemon[];
};

export default function PokemonList({ pokemons }: PokemonListProps) {
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {pokemons ? pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} />
            )) : <p>Chargement des Pokémon...</p>}
        </div>
    );
}
