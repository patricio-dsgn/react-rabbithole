import React, { useState } from "react";
import axios from "axios";

import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import "./me.styles.scss"


const Me = () => {

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

    <div className="page page-me">

    <div className="respo"></div>

      <Grid container justifyContent={'center'} p={3}>

        <Grid item xs={12} pt={40} align="center">
          <Typography m={3} sx={{ fontSize: { md: 60, sm: 50, xs: 40 } }} variant="h2" component="h1" color="#fff">Podedex creada con pokeapi</Typography>
        </Grid>

        <div className="obj">

          <div className="App">

            <form onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  width="100%"
                  
                  onChange={handleChange}
                  placeholder="ingresa tu pokemón"
                />
              </label>
            </form>

            <div className="mini-head"></div>
            {pokemonData.map((data,i) => {
              return (
                
                <div key={i} className="poke-card">                  
                  <img width="100%" src={data.sprites.other.home['front_default']} alt=""/>
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




      </Grid>

    </div>

  );
};

export default Me;
