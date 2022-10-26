import axios from "axios";

const api = axios.create({
  baseURL: "http://backendregisterjavaapp-env.eba-cuqnykim.us-east-1.elasticbeanstalk.com",
  
});

export default api;
// http://backendregisterjavaapp-env.eba-cuqnykim.us-east-1.elasticbeanstalk.com/clientes
// http://localhost:8080"
// http://localhost:8080/cep/
