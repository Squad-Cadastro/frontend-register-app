import React from 'react';
import './App.css';
import FormPF from './pages/register/pessoaFisica/formPF';
import Home from './pages/homepage/Home';
import SelectRecordsType from './pages/register/SelectRecordsType';


import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastrar">Cadastrar</Link>
            </li>
            <li>
              <Link to="/logar">Logar</Link>
            </li>
          </ul>
          <hr />

          <Routes >
            <Route exact path="/" element={ <Home />}>
            </Route>
            <Route path="/cadastrar" element={ <SelectRecordsType />}>
            </Route>
            <Route path="/pessoaFisica" element={ <FormPF />}>
            </Route>
            <Route path="/logar" element={ <FormPF />}>
            </Route>
          </Routes >
        </div>
      </Router>
    </div>
          
  );
}

export default App;
