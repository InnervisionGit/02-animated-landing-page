import React, { useEffect, useRef } from 'react';
import './App.css';
import gsap from 'gsap';
import GitHubIcon from '@material-ui/icons/GitHub';

function App() {
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ defaults: { ease: 'power1.out' } });
    tl.current.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
    tl.current.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
    tl.current.to('.intro', { y: '-100%', duration: 1 }, '-=1.2');
    tl.current.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
    tl.current.fromTo(
      '.big-text',
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      '-=1'
    );
    tl.current.to('.home', { x: '0%', duration: 0.33, stagger: 0.1 });
    tl.current.to('.contact', { x: '0%', duration: 0.33, stagger: 0.1 });
    tl.current.to('.about', { x: '0%', duration: 0.33, stagger: 0.1 });
    tl.current.fromTo(
      'a',
      { opacity: 0 },
      { opacity: 1, duration: 5, delay: 0.3 }
    );
  });

  return (
    <div className='App'>
      <main>
        <section className='landing'>
          <nav>
            <h1 id='logo'>Above</h1>
            <ul className='nav-links'>
              <li className='home'>Home</li>
              <li className='contact'>Contact</li>
              <li className='about'>About</li>
            </ul>
          </nav>
          <a href='https://github.com/InnervisionGit/02-animated-landing-page'>
            <h3 className='link'>
              <GitHubIcon />
              &nbsp; InnervisionGit &nbsp;
              <GitHubIcon />
            </h3>
          </a>
          <h2 className='big-text'>Stay Above</h2>
        </section>
      </main>
      <div className='intro'>
        <div className='intro-text'>
          <h1 className='hide'>
            <span className='text'>Creating innovation</span>
          </h1>
          <h1 className='hide'>
            <span className='text'>for today</span>
          </h1>
          <h1 className='hide'>
            <span className='text'>and the future</span>
          </h1>
        </div>
      </div>
      <div className='slider'></div>
    </div>
  );
}

export default App;
