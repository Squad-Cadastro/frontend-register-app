import React from 'react';
import {
    Link
  } from "react-router-dom";

function Home() {
  return (
    <div className="App">
       <Link to="/Cadastrar">Cadastrar</Link>
       <button>Logar</button>
    </div>
          
  );
}

export default Home;
