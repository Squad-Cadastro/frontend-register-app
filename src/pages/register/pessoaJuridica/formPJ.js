import React, { useState } from "react";
import api from '../../../service/api';
import { Formik } from 'formik';
import { useSelector, useDispatch } from "react-redux";
// import { useSelector, useDispatch } from '../../../actions';
import {addCliente} from '../../../reducers/cliente';

const FormPJ = () => {

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
      <div className="flex flex-col py-5">
        <h1 className="text-black text-4xl mb-4">Preencher as informaçoes abaixo para criar sua conta empresarial</h1>
        <Formik 
          initialValues={{ tipo_pessoa: 'J', endereco:null }}
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
            <form onSubmit={handleSubmit} className="flex flex-col self-center w-5/6 md:w-2/6">
              <input 
                className="self-center border-2 border-slate-500 rounded-3xl w-full md:w-4/5 px-2 py-1 my-2"
                type="text"
                name="nome"
                placeholder = "Nome completo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nme}
                required
              />
              {/* {errors.name && touched.name && errors.name} */}
              {/* <div className="flex flex-wrap space-x-4 justify-between w-full self-center mt-2"> */}
              {/* className="flex w-auto grow  border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4" item*/}

                <input
                  className="self-center border-2 border-slate-500 rounded-3xl w-full md:w-4/5 px-2 py-1 my-2"
                  type="text"
                  name="documento"
                  placeholder = "CNPJ"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.documento}
                  required
                />
                <input
                  className="self-center border-2 border-slate-500 rounded-3xl w-full md:w-4/5 px-2 py-1 my-2"
                  type="date"
                  name="dataNascimento"
                  placeholder = "Data nascimento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.dataNascimento}
                  required
                />
                <input
                  className="self-center border-2 border-slate-500 rounded-3xl w-full md:w-4/5 px-2 py-1 my-2"
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
                className="self-center border-2 border-slate-500 rounded-3xl w-full md:w-4/5 px-2 py-1 my-2"
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
                className="self-center border-2 border-slate-500 rounded-3xl px-2 py-1 my-2"
              >
                Confirmar
              </button>
            </form>
          )}
        </Formik>
              

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
  )
};
 
export default FormPJ;