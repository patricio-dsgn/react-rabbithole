import React, { useState } from "react";
import axios from "axios";



const DemoApp = () => {

  // let test = 1;
  // if (test === 1) throw new Error("algo salio mal amig@!");

  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonType, setPokemonType] = useState("");

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
    } catch (e) {
      // console.log(e);
    }
  };
  // console.log(pokemonData);



  return (
    <div className="obj">
      <div className="App">

        <form onSubmit={handleSubmit}>
          <input type="text" width="100%" onChange={handleChange} placeholder="ingresa tu pokemón" />
        </form>

        <div className="mini-head"></div>
        {pokemonData.map((data, i) => {
          return (

            <div key={i} className="poke-card">
              <img width="100%" src={data.sprites.other.home['front_default']} alt="" />

              <table className="poke-info">
                <tr>
                  <td>Tipo</td>
                  <td>{pokemonType}</td>
                </tr>
                <tr>
                  <td>Altura</td>
                  <td>{Math.round(data.height * 3.9)}</td>
                </tr>
                <tr>
                  <td>Peso</td>
                  <td>{Math.round(data.weight / 4.3)} lbs</td>
                </tr>
                <tr>
                  <td>Batallas</td>
                  <td>{data.game_indices.length}</td>
                </tr>
              </table>

            </div>

          );
        })}
        <div className="mini-foot"></div>
      </div>
    </div>


  );
};

export default DemoApp;