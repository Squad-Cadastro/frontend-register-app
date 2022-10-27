import React from 'react';
import {
    Link
  } from "react-router-dom";

function SelectRecordsType() {
  return (
    <div className='flex flex-col'>
      <h1 className="text-black text-4xl mb-4">Você é um pessoa </h1>
      <div className='flex flex-row self-center space-x-1'>
        <Link to="/pessoaFisica" className='border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4'>Fisica </Link>
        <h1 className="text-black text-2xl mb-4 self-center">ou</h1>
        <Link to="/pessoaJuridica" className='border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4'>Juridica </Link>
       </div>
    </div>
          
  );
}

export default SelectRecordsType;
