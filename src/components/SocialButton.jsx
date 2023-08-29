
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialButton = ({facebook, github, linkedin}) => {
  return (
    <>
      <div className='cuadro-redes'>
        <div className='cuadro-iconos'>
          <FontAwesomeIcon icon={facebook}/>
        </div>
        <div className='cuadro-iconos'>
          <FontAwesomeIcon icon={github}/>
        </div>
        <div className='cuadro-iconos'>
          <FontAwesomeIcon icon={linkedin}/>
        </div>
      </div>
      <p className='mt-5'>O usa tu correo electrónico para registrarte</p>
    </>
  );
}

export default SocialButton;
