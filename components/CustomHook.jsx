import React from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { Loading } from './Loading';
import { Card } from './card';

export function CustomHook() {
    const {counter,decrement, increment, reset} = useCounter(1);
    const {data, hasError, isLoading}= useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

    return (
        <>
        <h1>Información de Pokemon</h1>
        <hr/>
        <h2>{data?.name}</h2>
        {isLoading ? <Loading/>
        : (<Card id={counter} name={data.name} sprites={ [
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.front_default,
        data.sprites.front_shiny,
        ] } />)}
        <br />
        <br />
        <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
        <button className='btn btn-primary' onClick= { ()=>reset() } >Reset</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
        
        </>
    )

}

