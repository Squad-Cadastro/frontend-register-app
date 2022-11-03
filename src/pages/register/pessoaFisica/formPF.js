import React, { useState } from "react";
import api from '../../../service/api';
import { Formik } from 'formik';
import { useSelector, useDispatch } from "react-redux";
// import { useSelector, useDispatch } from '../../../actions';
import {addCliente} from '../../../reducers/cliente';
import img from '../../../assets/images/pug.png'

const FormPF = () => {

  const {form}  = useSelector (state => state.clienteReducer)
  const dispatch = useDispatch();

  const [cep, setCepApi] = useState({});

  const handleBlurCep = async (e) => {
    await api
      .get(`/cep/${e.target.value}`)
      .then((response) => setCepApi(response.data)).then(()=>console.log(cep))
      .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      })
  }

  return(
      <div className="flex flex-col">
          <div className="grid md:grid-cols-2">
            <div className="grid justify-items-center">
              <h1 className="text-black text-5xl mt-7 mx-10">Preencher as informaçoes abaixo para criar sua conta pessoal</h1>
              <img className="w-4/6" src={img} alt="Minha Figura"></img>
            </div>
            <div className="grid justify-items-center">
              <Formik 
                initialValues={{ tipo_pessoa: 'F', endereco:null }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required';
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                  ) {
                    errors.email = 'Invalid email address';
                  }
                  return errors;
                }}
                
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    dispatch(addCliente(values))
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
                      name="name"
                      placeholder = "Nome completo"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      required
                    />
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
                      <input
                        className="self-center border-b border-slate-500 hover:border-black px-2 my-5 focus:outline-none w-full md:w-4/6 md:mr-10 "
                        type="date"
                        name="data_nascimento"
                        placeholder = "Data nascimento"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.data_nascimento}
                        required
                      />
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
                    {/* <input 
                      className="self-center border-2 border-slate-500 rounded-3xl w-full md:w-4/5 px-2 py-1 my-2"
                      type="email"
                      name="email1"
                      placeholder = "Confirmar email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email1}
                      required
                    /> */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="self-center bg-orange-400 rounded-3xl hover:bg-orange-500 w-full my-5 py-2  md:w-4/6 md:mr-10"
                    >
                      Enviar
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
        </table> */}
        </div>
      </div>
  )
};
 
export default FormPF;