import React from 'react';
import './App.css';
import FormPF from './pages/register/pessoaFisica/formPF';
import FormPJ from './pages/register/pessoaJuridica/formPJ';
import Endereco from './pages/register/endereco/Endereco';

import Home from './pages/homepage/Home';
import SelectRecordsType from './pages/register/SelectRecordsType';
import Menu from './components/Menu'
import Footer from './components/Footer'


import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu/>
        <Routes >
          <Route exact path="/" element={ <Home />}/>
          <Route path="/cadastrar" element={ <SelectRecordsType />}/>
          <Route path="/pessoaFisica" element={ <FormPF />}/>
          <Route path="/pessoaJuridica" element={ <FormPJ />}/>
          <Route path="/endereco" element={ <Endereco />}/>
          <Route path="/logar" element={ <Home />}/>
        </Routes >
        <Footer/>
      </Router>
    </div>
          
  );
}

export default App;
