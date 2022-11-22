import React from 'react';
import {
    Link
  } from "react-router-dom";

import cardPug from '../../assets/images/cardPug.png'

function Home() {
  return (
    <div className="flex flex-col">
      <div id="carouselCaptions" className="carousel slide relative" >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full bg-red-200 py-12">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <p className="relative float-right mx-2 text-xs "carousel-item active relative float-left w-full>*de acordo com os termos e condiçoes</p>
          </div>
          <div className="carousel-item relative float-left w-full bg-blue-200 py-12">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <p className="relative float-right mx-2 text-xs "carousel-item active relative float-left w-full>*de acordo com os termos e condiçoes</p>
          </div>
          <div className="carousel-item relative float-left w-full bg-yellow-200 py-12">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >Agora com Débito online</h1>
              <p className="relative float-right mx-2 text-xs "carousel-item active relative float-left w-full>*de acordo com os termos e condiçoes</p>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="prev"
        >
          {/* <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span> */}
          {/* <span className="visually-hidden">Previous</span> */}
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="next"
        >
          {/* <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span> */}
          {/* <span className="visually-hidden">Next</span> */}
        </button>
      </div>

      <div>
        <div className=" flex flex-col w-full bg-indigo-600 ">
          <div className="flex flex-row w-full bg-indigo-600 py-5 px-4">
            <div className="w-5/6 self-center">
              <img src={cardPug} className="text-lg text-white text-left mb-2"/>
            </div>
            <div>
              <h1 className="text-lg text-white text-left mb-2" >
                Cartão de crédito é na Dog Bank
              </h1>
              <p className="text-xs text-white text-left" >
                Seu cartão Dog possui benefícios incríveis. Mas se o seu cartão é DogFlex, você pode personalizar com os benefícios que quiser. E o melhor, sem custo adicional.
              </p>
            </div>
          </div>
          <Link className="bg-slate-50 border-2 rounded-3xl p-3 border-r-slate-50 w-2/3 self-center m-2" to="/Cadastrar">Crie uma conta grátis</Link>
          <h1 className="text-white m-4">Já possui uma conta?<Link className="text-slate-200" to="/Cadastrar"> clique aqui</Link></h1>
        </div>
      </div>

    </div>
          
  );
}

export default Home;


{/* <Link to="/Cadastrar">Cadastrar</Link>
<button>Logar</button> */}