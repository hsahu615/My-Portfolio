import { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocation,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitForm = () => {
    console.log(form);
  };

  return (
    <div
      id='contact'
      className='contact-container d-flex flex-column justify-content-center align-items-center'
    >
      <div className='d-flex row m-0 w-100 justify-content-center'>
        <div className='left-contact col-4'>
          <h2 className='text-white  mb-5'>CONTACT ME</h2>
          <div className='d-flex contact-content align-items-center'>
            <div className='contact-icon me-3'>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <a
              href='https://in.linkedin.com/in/sahu-himanshu'
              target='_blank'
              className='text-decoration-none'
            >
              linkedin/sahu-himanshu
            </a>
          </div>
          <div className='d-flex contact-content align-items-center'>
            <div className='contact-icon me-3'>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <a href='tel:9887772749' className='text-decoration-none'>
              9887772749
            </a>
          </div>
          <div className='d-flex contact-content align-items-center'>
            <div className='contact-icon me-3'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <a
              href='mailto:hsahu615@gmail.com'
              className='text-decoration-none'
            >
              hsahu615@gmail.com
            </a>
          </div>
          <div className='d-flex contact-content align-items-center'>
            <div className='contact-icon me-3'>
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <a
              href='https://github.com/hsahu615'
              target='_blank'
              className='text-decoration-none'
            >
              github.com/hsahu615
            </a>
          </div>
          <div className='d-flex contact-content align-items-center'>
            <div className='contact-icon me-3'>
              <FontAwesomeIcon icon={faLocation} />
            </div>
            <a className='text-decoration-none'>Jaipur, Rajasthan</a>
          </div>
        </div>
        <div className='right-contact col-5'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}
          >
            <div className='mb-4'>
              <input
                type='text'
                className='form-control bg-transparent'
                placeholder='Name'
                name='name'
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className='mb-4'>
              <input
                type='email'
                name='email'
                className='form-control bg-transparent'
                placeholder='Email'
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className='mb-4'>
              <textarea
                rows={4}
                name='message'
                className='form-control bg-transparent'
                placeholder='Message'
                onChange={(e) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
              />
            </div>
            <button type='submit' className='btn cbtn-dark w-100'>
              SEND ME
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
