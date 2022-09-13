import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [nome, setNome] = React.useState(""); 
  const [email, setEmail] = React.useState(""); 
  const [user, setUser] = React.useState({}); 

  React.useEffect(()=>{
    console.log(user);
  },[user])

  const addUser = async (nome, email) =>  {
    await fetch(`${process.env.REACT_APP_API_BACKEND_URL}/clientes`, {
       method: 'POST',
       body: JSON.stringify({
          nome: nome,
          email: email,
       }),
       headers: {
          'Content-type': 'application/json; charset=UTF-8',
       },
    })
       .then((response) => response.json())
       .then((data) => {
          setUser((user) => [data, ...user]);
       })
       .catch((err) => {
          console.log(err.message);
       });
 };   
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(addUser(nome, email));
 };  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-5xl font-bold underline">
          Edit <code>src/App.js</code> and save to reload.
        </p>
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control text-sm font-medium text-gray-900" value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input type="text" className="ml-3 form-control text-sm font-medium text-gray-900" value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button type="submit" className="ml-3">Adicionar User</button>
         </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {!user.id ? user.id : null}
        </a>
      </header>
    </div>
  );
}

export default App;
