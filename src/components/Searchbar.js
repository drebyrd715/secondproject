import React from 'react'
import { useState } from 'react'


const Searchbar = ({onSearch}) => {
    const [input, setInput] = useState("");
        
    const fetchData = (value) => {
        fetch("https://pokeapi.co/api/v2/type")
        .then((response) => response.json())
        .then((json) => {
        const results = json.results.filter((type) => {
            return type.name.includes(value)
        });
        console.log(results)
        // console.log(json)
    });
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

    const handleSubmit = (e) => {
      e.preventDefault();
    }

        return (
        <div>
        <form onsubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Search... by type'
        value={input}
        onChange={(e) => handleChange(e.target.value)}
       />         
        <button type="submit">Search</button>
        </form>
    </div>
  );
};

export default Searchbar