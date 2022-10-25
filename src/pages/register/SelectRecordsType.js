import React from 'react';
import {
    Link
  } from "react-router-dom";

function SelectRecordsType() {
  return (
    <div className="App">
       <Link to="/pessoaFisica">Fisica </Link>
       <button>Juridica</button>
    </div>
          
  );
}

export default SelectRecordsType;
