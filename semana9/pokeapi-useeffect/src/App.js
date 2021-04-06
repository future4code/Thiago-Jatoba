import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PokeCard from './components/PokeCard'


const App = () => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState('')

useEffect(() => {
  const getPokemon = () => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(res => {
        setPokeList(res.data.results)
      })
      .catch (err => {
        console.log(err)
      })
  }
  getPokemon();
},[setPokeList])

const changePokeName = (e) => {
  setPokeName(e.target.value)
}

return (
  <div>
    <select onChange = {changePokeName}>
      <option value = {''}>Nenhum</option>
      {pokeList.map(pokemon => {
        return(
          <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
        )
      })}
    </select>
    {pokeName && <PokeCard pokemon={pokeName}/>}
  </div>
)
}
export default App