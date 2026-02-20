import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';
import { CharacterCard } from './CaracterCard';

export function RickMortyInfo() {
  const { counter, decrement, increment, reset } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  return (
    <>
      <h1>Información de Personaje</h1>
      <hr />

      <h2>{data?.name}</h2>

      {isLoading ? (
        <Loading />
      ) : (
        <CharacterCard
          id={counter}
          name={data.name}
          status={data.status}
          species={data.species}
          image={data.image}
        />
      )}

      <br />
      <br />

      <button className="btn btn-primary" onClick={() => decrement()}>
        Anterior
      </button>

      <button className="btn btn-primary" onClick={() => reset()}>
        Reset
      </button>

      <button className="btn btn-primary" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
}