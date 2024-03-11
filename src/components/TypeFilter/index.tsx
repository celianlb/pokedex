'use client'
import React, { useEffect, useState } from 'react';

export interface TypeFilterProps {
  onTypeChange: (type: string) => void;
}

export const TypeFilter: React.FC<TypeFilterProps> = ({ onTypeChange }) => {
  const [types, setTypes] = useState<string[]>([]);

  useEffect(() => {
    const fetchTypes = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();
      const types = data.results.map((type: any) => type.name);
      setTypes(types);
    };

    fetchTypes();
  }, []);

  return (
    <select onChange={(e) => onTypeChange(e.target.value)} defaultValue="" className='border border-gray-500 mb-6 py-2 px-4 rounded-lg cursor-pointer'>
      <option value="">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
