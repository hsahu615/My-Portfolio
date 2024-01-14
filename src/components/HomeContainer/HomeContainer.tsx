import { useState, useEffect } from 'react';
import './HomeContainer.css';

const HomeContainer = () => {
  const qualities = [
    'Full-Stack Developer',
    '2yr Experienced',
    'Responsible and Reliable',
  ];
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prev) => (prev + 1) % qualities.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id='home'
      className='home-container d-flex flex-column justify-content-center align-items-center'
    >
      <h3 className='text-white text-center'>Simple and Elegant</h3>
      <div className='name-box p-4'>
        <h2 className='name-text text-center'>HIMANSHU</h2>
      </div>
      <div>
        <h2 className='text-white subtitle'>{qualities[currIndex]}</h2>
      </div>
      <div>
        <p className='self-description'>
          I am a Full-Stack developer with 2 years of experience, If you're
          looking for a dedicated developer who can transform your ideas into
          remarkable web applications, I'd love to connect !
        </p>
      </div>
      <div>
        <a href='#tech-stack'>
          <button type='button' className='btn cbtn-dark p-3 px-5'>
            Get Started
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeContainer;
