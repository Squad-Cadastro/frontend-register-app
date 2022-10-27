import React from 'react';
import './App.css';
import FormPF from './pages/register/pessoaFisica/formPF';
import FormPJ from './pages/register/pessoaJuridica/formPJ';

import Home from './pages/homepage/Home';
import SelectRecordsType from './pages/register/SelectRecordsType';
import Menu from './components/Menu'

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
          <Route path="/logar" element={ <Home />}/>
        </Routes >
      </Router>
    </div>
          
  );
}

export default App;
