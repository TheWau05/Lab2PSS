import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { Loading } from './Loading';
import { CardLab2 } from './CardLab2';


const razas = ["affenpinscher","african","airedale","akita","appenzeller","australian","bakharwal","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","buhund","bulldog","bullterrier","cattledog","cavapoo","chihuahua","chippiparai","chow","clumber","cockapoo","collie","coonhound","corgi","cotondetulear","dachshund","dalmatian","dane","danish","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","finnish","frise","gaddi","german","greyhound","groenendael","havanese","hound","husky","keeshond","kelpie","kombai","komondor","kuvasz","labradoodle","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mix","mountain","mudhol","newfoundland","otterhound","ovcharka","papillon","pariah","pekinese","pembroke","pinscher","pitbull","pointer","pomeranian","poodle","pug","puggle","pyrenees","rajapalayam","redbone","retriever","ridgeback","rottweiler","rough","saluki","samoyed","schipperke","schnauzer","segugio","setter","sharpei","sheepdog","shiba","shihtzu","spaniel","spitz","springer","stbernard","terrier","tervuren","vizsla","waterdog","weimaraner","whippet","wolfhound"]
export function CustomHookLab2() {

    const {counter,decrement, increment, reset} = useCounter(1);
    const {data, hasError, isLoading}= useFetch(`https://dog.ceo/api/breed/${razas[counter]}/images/random`)
    const nombreImagen = data?.message;
  return (
    <>
    <div className="d-flex flex-column align-items-center text-center">
        <h1> Perritos wow wauf (no therian)</h1>
        <hr />
        <h2>{razas[counter]}</h2>
        {isLoading ? <Loading/>
                : (<CardLab2  name={razas[counter]} sprites={nombreImagen} />)}
                <br />
                <br />
                <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
                <button className='btn btn-primary' onClick= { ()=>reset() } >Reset</button>
                <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>


    </div>
    </>
    

  )
  
}

export default CustomHookLab2