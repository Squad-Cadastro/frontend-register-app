import React, { useState } from "react";
import api from '../../../service/api';
import { Formik } from 'formik';
import { useSelector, useDispatch } from "react-redux";
// import { useSelector, useDispatch } from '../../../actions';
import {addCliente} from '../../../reducers/cliente';

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
      <div className="flex flex-col py-5">
        <h1 className="text-black text-4xl mb-4">Preencher as informaçoes abaixo para criar sua conta pessoal</h1>
        <Formik 
          initialValues={{ tipo_pessoa: 'F' }}
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
            <form onSubmit={handleSubmit} className="flex flex-col self-center border-2 border-slate-500 rounded-3xl w-3/5  py-2">
              <input 
                className="self-center border-2 border-slate-500 rounded-3xl w-4/5 px-2 py-1 my-2"
                type="text"
                name="name"
                placeholder = "Nome completo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {/* {errors.name && touched.name && errors.name} */}
              <div className="flex  flex-wrap justify-between w-4/5 self-center mt-2">
                <input
                  className="flex w-auto grow  border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="text"
                  name="documento"
                  placeholder = "CPF"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.documento}
                />
                <input
                  className="flex w-auto grow  border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="date"
                  name="data_nascimento"
                  placeholder = "Data nascimento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.data_nascimento}
                />
                <input
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="cel"
                  name="telefone"
                  placeholder = "Celular"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telefone}
                />
              </div>
              <div className="flex flex-row flex-wrap  w-4/5 self-center ">
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="email"
                  name="email"
                  placeholder = "Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="email"
                  name="email1"
                  placeholder = "Confirmar email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email1}
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="self-center border-2 border-slate-500 rounded-3xl px-2 py-1 my-2"
              >
                Finalizar cadastro
              </button>
            </form>
          )}
        </Formik>

        {/* {"Somente p/ visualização"} */}
        <table>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Celular</th>
          </tr>
          <tr>
            <td> {form.name}</td>
            <td>{form.documento}</td>
            <td>{form.telefone}</td>
          </tr>
        </table>
       
      </div>
  )
};
 
export default FormPF;