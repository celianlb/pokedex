"use client";

import { Pokemon, fetchPokemon } from "@/api/fetchPokemon";
import ButtonBack from "@/components/ButtonBack";
import Spinner from "@/components/Spinner";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function OnePokemon({ params }: { params: { id: string } }) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOnePokemon = async () => {
      setIsLoading(true);
      const pokemon = await fetchPokemon(Number(params.id));
      setPokemon(pokemon);
      setIsLoading(false);
    };

    fetchOnePokemon();
  }, [params.id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>    
    <Head>
      <title>{pokemon ? `Pokémon n°${pokemon.id}` : 'Chargement...'}</title>
    </Head> 
      <div className="grid grid-cols-3 items-start p-8">
        <ButtonBack />
        {pokemon && (
          <div className="flex flex-col gap-4 border items-center m-auto bg-gray-50 p-5 w-[200px] rounded-lg">
            <h1>{pokemon.name}</h1>
            <Image
              width={100}
              height={100}
              src={pokemon.imageUrl}
              alt={`Image de ${pokemon.name}`}
            />
            <p>{pokemon.type.toLocaleUpperCase()}</p>

            <p>Pokémon n°{pokemon.id}</p>
          </div>
        )}
      </div>
    </>
  );
}
