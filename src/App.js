import React from 'react'
import { useState, createContext } from "react"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from './components/Nav';
import PokemonPics from './pages/Pokemon';
export const Context = createContext();


function App() {
  const [allPokemon, setAllPokemon] = useState([])
  

  return (
    
      <Context.Provider value ={{allPokemon, setAllPokemon}}>
      <Nav />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pokemonpics" element={<PokemonPics/>} />
      <Route path="/about" element={<About/>}/>
    </Routes>
    </Context.Provider>
  );
}

export default App