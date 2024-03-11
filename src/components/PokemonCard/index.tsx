import React, { Suspense } from "react";
import { Pokemon } from "@/api/fetchPokemon";
import Image from "next/image";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <div className="flex flex-col gap-1 border bg-gray-50 w-[200px] rounded-lg items-center py-3 px-2 hover:shadow-md">
        <Image
          width={100}
          height={100}
          src={pokemon.imageUrl}
          alt={`Image de ${pokemon.name}`}
        />
        <h2>{pokemon.name}</h2>
        <p>{pokemon.type.toLocaleUpperCase()}</p>
        <p>{}</p>
      </div>
    </Link>
  );
}
