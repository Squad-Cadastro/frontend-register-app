import React from 'react';
 import { Formik } from 'formik';
 
 const Form = () => {
    return(
      <div className="flex flex-col py-5">
        <Formik 
          initialValues={{ email: '', password: '' }}
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
              console.log("value",values)
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className="flex flex-col self-center border-2 border-slate-500 rounded-3xl w-4/5  py-2">
              <h1 className="text-black text-4xl mb-4">Cadastro de pessoa física</h1>
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
                  name="cpf"
                  placeholder = "CPF"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpf}
                />
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="text"
                  name="data"
                  placeholder = "Data de nascimeto"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
                  onChange={handleChange}
                  value={values.data}
                />
                <input
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="tel"
                  name="telefone"
                  placeholder = "Numero de telefone"
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
                  name="email"
                  placeholder = "Confirmar email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="flex flex-row flex-wrap  w-4/5 self-center">
                <input
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="password"
                  name="password"
                  placeholder = "Senha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <input
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="password"
                  name="password"
                  placeholder = "Confirmar senha"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div className="flex flex-row flex-wrap  w-4/5 self-center">
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="number"
                  name="cep"
                  placeholder = "CEP"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cep}
                />
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="text"
                  name="estado"
                  placeholder = "Estado"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.estado}
                />
              </div>
              <div className="flex flex-row flex-wrap  w-4/5 self-center">
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="text"
                  name="cidade"
                  placeholder = "Cidade"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cidade}
                />
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="text"
                  name="bairro"
                  placeholder = "Bairro"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bairro}
                />
              </div>
              <div className="flex flex-row flex-wrap  w-4/5 self-center">
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="text"
                  name="ruaOuAvenidaruaOuAvenida"
                  placeholder = "Rua/Avenida"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.ruaOuAvenida}
                />
                <input 
                  className="flex w-auto grow border-2 border-slate-500 rounded-3xl self-center px-2 py-1 mb-4"
                  type="number"
                  name="numero"
                  placeholder = "Número"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.numero}
                />
              </div>
              <input 
                  className="self-center border-2 border-slate-500 rounded-3xl w-4/5 px-2 py-1 mb-4"
                  type="text"
                  name="complemento"
                  placeholder = "Complemento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.complemento}
                />
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
      </div>
  )
};
 
 export default Form;