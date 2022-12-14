import React, { useState, useRef } from "react";
import api from '../../../service/api';
import { Formik, Field } from 'formik';
import { useSelector, useDispatch } from "react-redux";
// import { useSelector, useDispatch } from '../../../actions';
import {addEndereco} from '../../../reducers/cliente';
import img from '../../../assets/images/pug.png'
import Alert from '@mui/material/Alert';
import { useNavigate } from "react-router-dom";


const Endereco = () => {

  const {form}  = useSelector (state => state.clienteReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [endereco, setEndereco] = useState({})
  const [showAlert, setShowAlert] = useState(false)
  const [res, setRes] = useState(false)


  const ref = useRef();

  const mergeIntoEndereco = (values) => {
    var ultimoClienteForm = form[form.length - 1];
    let mergedForm = {
      nome: ultimoClienteForm.nome,
      documento: ultimoClienteForm.documento,
      email: ultimoClienteForm.email,
      telefone: ultimoClienteForm.telefone,
      tipoPessoa: ultimoClienteForm.tipoPessoa,
      dataNascimento: ultimoClienteForm.dataNascimento,
      endereco: [values]
    };
    return mergedForm;
  }


  const findCEP = async(value) => {
    let response = await api.get(`/cep/${value}`)
    if (response.status === 200){
      setEndereco(response.data)
    }
  }

  const AlertId = (response) =>{
    setRes(response)
    setShowAlert(true)
  }
  return(
      <div className="flex flex-col">
        {showAlert ?
          <Alert 
            action={
              <div>
                <button onClick={() =>  navigator.clipboard.writeText(res.id)} color="inherit" size="small"  className="m-2">
                  Copiar
                </button>
                <button onClick={() => {setShowAlert(false); navigate("/home") }} color="inherit" size="small">
                  Fechar
                </button>
              </div>
            }
          >
            Id: {res.id}
          </Alert>
          :null
        }
          <div className="grid md:grid-cols-2">
            <div className="grid justify-items-center">
              <h1 className="text-black text-3xl md:text-5xl mt-7 mx-2 md:mx-10">Preencha as informa????es a respeito do seu endere??o</h1>
              <img className="w-4/6 hidden  md:inline" src={img} alt="Minha Figura" ></img>
            </div>
            <div className="grid justify-items-center">
              <Formik 
                initialValues={endereco || {logradouro:"", numero:"", cep:"", bairro:"", localidade:"", uf:""}}
                enableReinitialize
                validate={values => {
                  const errors = {};
                  if (!values.cep) {
                    errors.cep = 'Required';
                  }
                  if (!values.uf) {
                    errors.uf = 'Required';
                  }
                  if (!values.localidade) {
                    errors.localidade = 'Required';
                  }
                  if (!values.bairro) {
                    errors.bairro = 'Required';
                  }
                  if (!values.logradouro) {
                    errors.logradouro = 'Required';
                  }
                  if (!values.numero) {
                    errors.numero = 'Required';
                  }
                  return errors;
                }}
                
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    setSubmitting(false);
                    navigator.clipboard.writeText('Copy this text to clipboard')
                    dispatch(addEndereco(mergeIntoEndereco(values),AlertId));
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
                      name="cep"
                      placeholder = "CEP"
                      onChange={handleChange}
                      onBlur={(e) => {findCEP(e.target.value)}}
                      value={values.cep}
                      required
                    />
                    {errors.cep && touched.cep && errors.cep}
                    {/* {errors.name && touched.name && errors.name} */}
                    {/* <div className="flex flex-wrap space-x-4 justify-between w-full self-center mt-2"> */}
                    {/* className="flex w-auto grow  border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4" item*/}
                    <input
                      className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                      type="text"
                      name="uf"
                      placeholder = "Estado"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.uf}
                      required
                    />
                    {errors.uf && touched.uf && errors.uf}
                    <input
                      className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                      ref={ref}
                      type="text"
                      name="localidade"
                      placeholder = "Cidade"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.localidade}
                      required
                    />
                    {errors.localidade && touched.localidade && errors.localidade}
                    <input
                      className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                      type="text"
                      name="bairro"
                      placeholder = "Bairro"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.bairro}
                      required
                    />
                    {errors.bairro && touched.bairro && errors.bairro}
                    {/* </div> */}
                    <input 
                      className="self-center border-b border-slate-500 hover:border-black w-full px-2 my-5 focus:outline-none md:w-4/6 md:mr-10"
                      type="text"
                      name="logradouro"
                      placeholder = "Logradouro"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.logradouro}
                      required
                    />
                    {errors.logradouro && touched.logradouro && errors.logradouro}
                    <input 
                      className="self-center border-b border-slate-500 hover:border-black w-full px-2 my-5 focus:outline-none md:w-4/6 md:mr-10"
                      type="text"
                      name="numero"
                      placeholder = "N??mero"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.numero}
                      required
                    />
                    {errors.numero && touched.numero && errors.numero}
                    <button 
                      type="submit" 
                      disabled={isSubmitting || showAlert}
                      className="self-center bg-orange-400 rounded-3xl hover:bg-orange-500 w-full my-5 py-2  md:w-4/6 md:mr-10"
                    >
                      Confirmar
                    </button>
                  </form>
                )}
              </Formik>
            </div>

        {/* {"Somente p/ visualiza????o"} */}
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
 
export default Endereco;