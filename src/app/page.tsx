"use client";
import React, { Suspense, useEffect, useState } from "react";
import { fetchPokemon, Pokemon } from "@/api/fetchPokemon";
import PokemonList from "@/components/PokemonList";
import { TypeFilter } from "@/components/TypeFilter";
import Loading from "./loading";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const filteredPokemons = selectedType
    ? pokemons.filter((pokemon) => pokemon.type === selectedType)
    : pokemons;

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      const pokemonPromises = Array.from({ length: 151 }, (_, index) =>
        fetchPokemon(index + 1)
      );
      const pokemons = await Promise.all(pokemonPromises);
      setPokemons(pokemons);
    };

    fetchPokemons();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <main className="flex justify-center items-center h-screen">
        <Loading />
      </main>
    );
  }
  
  /*const rdm = Math.floor(Math.random() * 151);
  if (rdm != 0) {
    throw new Error("Random error");
  }*/

  return (
      <main className=" p-8">
        <TypeFilter onTypeChange={(type) => setSelectedType(type)} />
        <PokemonList pokemons={filteredPokemons} />
      </main>
  );
}
