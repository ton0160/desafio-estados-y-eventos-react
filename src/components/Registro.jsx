import React, { useState } from 'react';

import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {
  const [alert, setAlert] = useState({
    error: "", msg: "", color: ""
  });

  return (
    <>
      <h1 className='mb-5'>Crea una cuenta</h1>
      <SocialButton
        facebook={faFacebook}
        github={faGithub}
        linkedin={faLinkedinIn}
      />
      <Formulario setAlert={setAlert}/>
      {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
    </>
  );
}

export default Registro;