import './TechStack.css';
import AngularLogo from '../../assets/logos/AngularLogo';
import BootstrapLogo from '../../assets/logos/BootstrapLogo';
import JavaLogo from '../../assets/logos/JavaLogo';
import ReactLogo from '../../assets/logos/ReactLogo';
import SpringLogo from '../../assets/logos/SpringLogo';

const TechStack = () => {
  return (
    <div
      id='tech-stack'
      className='tech-stack-container d-flex flex-column justify-content-center align-items-center'
    >
      <div>
        <h2 className='text-white'>TECH STACK</h2>
      </div>
      <div className='d-flex tech-wrapper align-items-center'>
        <div className='d-flex flex-column align-items-center'>
          <div className='logo-box'>
            <AngularLogo />
          </div>
          <h5 className='text-center text-white mt-2 mb-0'>Angular</h5>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <div className='logo-box'>
            <ReactLogo />
          </div>
          <h5 className='text-center text-white mt-2 mb-0'>React</h5>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <div className='logo-box'>
            <JavaLogo />
          </div>
          <h5 className='text-center text-white mt-2 mb-0'>Java</h5>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <div className='logo-box'>
            <SpringLogo />
          </div>
          <h5 className='text-center text-white mt-2 mb-0'>Spring Boot</h5>
        </div>
        <div className='d-flex flex-column align-items-center'>
          <div className='logo-box'>
            <BootstrapLogo />
          </div>
          <h5 className='text-center text-white mt-2 mb-0'>Bootstrap</h5>
        </div>
      </div>
      <div className='tech-stack-footer'>
        <a href='mailto:hsahu615@gmail.com'>
          <button type='button' className='btn cbtn-dark rounded-pill'>
            Send Me an Mail
          </button>
        </a>
      </div>
    </div>
  );
};

export default TechStack;
