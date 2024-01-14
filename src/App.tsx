import './App.css';
import HomeContainer from './components/HomeContainer/HomeContainer';
import TechStack from './components/TechStack/TechStack';
import WorkHistory from './components/WorkHistory/WorkHistory';
import Portfolio from './components/Portfolio/Projects';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react';

function App() {
  const ids = ['home', 'tech-stack', 'work', 'project', 'contact'];
  const [currentDiv, setCurrentDiv] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', OnScroll);
  });

  const OnScroll = () => {
    for (let i = 0; i < ids.length; i++) {
      const ele: any = document.getElementById(ids[i]);
      const scrollY = window.scrollY;
      const distanceFromTop = ele.offsetTop;
      const divHeight = ele.offsetHeight;
      if (
        scrollY + 10 > distanceFromTop &&
        scrollY < distanceFromTop + divHeight
      ) {
        setCurrentDiv(i);
      }
      console.log(i, ele.offsetTop, ele.offsetHeight, window.scrollY);
    }
  };
  return (
    <div className='root-container'>
      <HomeContainer />
      <TechStack />
      <WorkHistory />
      <Portfolio />
      <Contact />
      <div className='scrollers text-white'>
        <div className='d-flex flex-column'>
          <ul>
            <a href={'#' + ids[0]} className='text-decoration-none text-white'>
              <li className={currentDiv == 0 ? 'on-screen-div' : ''}></li>
            </a>
            <a href={'#' + ids[1]} className='text-decoration-none text-white'>
              <li className={currentDiv == 1 ? 'on-screen-div' : ''}></li>
            </a>
            <a href={'#' + ids[2]} className='text-decoration-none text-white'>
              <li className={currentDiv == 2 ? 'on-screen-div' : ''}></li>
            </a>
            <a href={'#' + ids[3]} className='text-decoration-none text-white'>
              <li className={currentDiv == 3 ? 'on-screen-div' : ''}></li>
            </a>
            <a href={'#' + ids[4]} className='text-decoration-none text-white'>
              <li className={currentDiv == 4 ? 'on-screen-div' : ''}></li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
