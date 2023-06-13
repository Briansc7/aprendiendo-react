import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const enviarForm = (evento) => {
    evento.preventDefault();
    console.log("los datos enviados son: ", userInfo);
    //llamado a la api y mandamos datos
  };

  const handleChange = (evento) => {
    console.log(evento.target.value);
    console.log(evento.target.name);

    setUserInfo({ ...userInfo, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Estoy en Login</h1>
      <Link to="/">Volver a Home</Link>
      <div>
        <form action="" onSubmit={enviarForm}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
