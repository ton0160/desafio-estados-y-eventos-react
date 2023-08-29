import { useState } from 'react';

const Formulario = ({setAlert}) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setconfirmarPassword] = useState("");

  const validarMail = (email) => {
    const mailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return mailValido.test(email);
  };
  
  const validacion = (e) => {
    e.preventDefault();

    if (nombre === "" || email === "" || password === "" || confirmarPassword === "") {
      setAlert({
        error: true,
        msg: "Debes llenar todos los campos",
        color: "alert-danger",
      })
    } else if (!validarMail(email)) {
      setAlert({
        error: true,
        msg: "Debes ingresar un correo válido",
        color: "alert-danger",
      })
    } else if (password !== confirmarPassword) {
      setAlert({
        error: true,
        msg: "Las password no son idénticas",
        color: "alert-danger",
      })
    } else {
      setNombre("")
      setEmail("")
      setPassword("")
      setconfirmarPassword("")
      setAlert({
        error: false,
        msg: "Registro exitoso",
        color: "alert-success",
      })
    }
  };

  return (
    <div className="formulario-container">
        <form onSubmit={validacion} className='p-4 rounded'>
          <div className='form-group'>
            <input 
              placeholder='Nombre'
              type="text"
              name="nombre"
              className="form-control"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>
          <div className='form-group mt-3'>
            <input 
              placeholder='Email'
              type="email"
              name="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='form-group mt-3'>
            <input 
              placeholder='Password'
              type="password"
              name="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className='form-group mt-3'>
            <input 
              placeholder='Confirma tu password'
              type="password"
              name="confirmarPassword"
              className="form-control"
              onChange={(e) => setconfirmarPassword(e.target.value)}
              value={confirmarPassword}
            />
          </div>
          <button type='submit' className='btn btn-success mt-5 w-100'>Registrarse</button>
        </form>
    </div>
  );
}

export default Formulario;