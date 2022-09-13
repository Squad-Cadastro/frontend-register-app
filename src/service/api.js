export const addUser = async (nome, email) => {
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
          return (user) => [data, ...user];
       })
       .catch((err) => {
          console.log(err.message);
       });
 };   
 