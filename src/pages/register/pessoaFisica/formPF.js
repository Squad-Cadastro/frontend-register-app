import React, { useState, useRef } from "react";
import api from '../../../service/api';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from "react-redux";
// import { useSelector, useDispatch } from '../../../actions';
import {addCliente} from '../../../reducers/cliente';
import img from '../../../assets/images/pug.png'
import { cpf } from 'cpf-cnpj-validator'; 
import {  Link, useNavigate } from "react-router-dom";

const FormPF = () => {

  const {form}  = useSelector (state => state.clienteReducer)
  const dispatch = useDispatch();
  const ref = useRef();
  const navigate = useNavigate();

  return(
      <div className="flex flex-col">
          <div className="grid md:grid-cols-2">
            <div className="grid justify-items-center">
              <h1 className="text-black text-3xl md:text-5xl mt-7 mx-2 md:mx-10">Preencha as informações para criar sua conta pessoal</h1>
              <img className="w-4/6 hidden  md:inline" src={img} alt="Minha Figura" ></img>
            </div>
            <div className="grid justify-items-center">
              <Formik 
                initialValues={{ tipoPessoa: 'F', endereco:null }}
                validate={values => {
                  const errors = {};
                  if (!values.nome) {
                    errors.nome = 'Required';
                  }
                  if (!values.documento) {
                    errors.documento = 'Required';
                  }else if(!cpf.isValid(values.documento)){
                    errors.documento = 'cpf inválido';
                  }
                  if (!values.dataNascimento) {
                    errors.dataNascimento = 'Required';
                  }
                  if (!values.telefone) {
                    errors.telefone = 'Required';
                  }
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'email inválido';
                  }
                  if (!values.politica) {
                    errors.politica = 'Required';
                  }
                  return errors;
                }}
                
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    dispatch(addCliente(values))
                    navigate("/endereco") 
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit} className="flex flex-col self-center w-5/6 md:w-5/6 ">
                    <input 
                      className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                      type="text"
                      name="nome"
                      placeholder = "Nome completo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nome}
                      required
                    />
                    {errors.nome && touched.nome && errors.nome}
                    {/* {errors.name && touched.name && errors.name} */}
                    {/* <div className="flex flex-wrap space-x-4 justify-between w-full self-center mt-2"> */}
                    {/* className="flex w-auto grow  border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4" item*/}
                    <input
                      className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                      type="text"
                      name="documento"
                      placeholder = "CPF"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.documento}
                      required
                    />
                    {errors.documento && touched.documento && errors.documento}
                    <input
                      className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                      ref={ref}
                      type="text"
                      name="dataNascimento"
                      placeholder = "Data nascimento"
                      onChange={handleChange}
                      onFocus={() => (ref.current.type = "date")}
                      onBlur={() => (ref.current.type = "text")}
                      value={values.dataNascimento}
                      required
                    />
                    {errors.dataNascimento && touched.dataNascimento && errors.dataNascimento}
                    <input
                      className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                      type="cel"
                      name="telefone"
                      placeholder = "Celular"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telefone}
                      required
                    />
                    {errors.telefone && touched.telefone && errors.telefone}
                    {/* </div> */}
                    <input 
                      className="self-center border-b border-slate-500 hover:border-black w-full px-2 my-5 focus:outline-none md:w-4/6 md:mr-10"
                      type="email"
                      name="email"
                      placeholder = "Email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      required
                    />
                    {errors.email && touched.email && errors.email}
                    <div className="flex flex-row self-center w-full md:w-4/6 md:mr-10">
                      <Field className="mr-2" type="checkbox"  name="politica"/>
                      <label className="text-left text-xs"> Eu li, estou ciente das condições de tratamento dos meus dados pessoais, e dou meu consentimento, quando aplicável, conforme descrito nesta <Link className=" text-blue-500"> Política de Privacidade</Link>.</label>
                    </div>
                    {errors.politica && touched.politica && errors.politica}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="self-center bg-orange-400 rounded-3xl hover:bg-orange-500 w-full my-5 py-2  md:w-4/6 md:mr-10"
                    >
                      Confirmar
                    </button>
                  </form>
                )}
              </Formik>
            </div>

        {/* {"Somente p/ visualização"} */}
         {/* <table>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>Celular</th>
              <th>tipoPessoa</th>
              <th>dataNascimento</th>
              <th>email</th>
              <th>endereco</th>
            </tr>
          {form.map((element, index) => {
            return(
              <tr key={index}>
                <td> {element.name}</td>
                <td>{element.documento}</td>
                <td>{element.telefone}</td>
                <td>{element.tipo_pessoa}</td>
                <td>{element.data_nascimento}</td>
                <td>{element.email}</td>
                <td>{element.endereco}</td>
              </tr>
            )
          })       
          }
        </table>  */}
        </div>
      </div>
  )
};
 
export default FormPF;