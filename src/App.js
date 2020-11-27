import React from 'react';
import './App.css';
import gsap from 'gsap';

function App() {
  const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });
  tl.to('.text', { y: '0%', duration: 1, stagger: 0.25 });
  tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 });
  tl.to('.intro', { y: '-100%', duration: 1 }, '-=1');
  tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo('.big-text', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=1');
  return (
    <div className='App'>
      <main>
        <section className='landing'>
          <nav>
            <h1 id='logo'>Above</h1>
            <ul className='nav-links'>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
            </ul>
          </nav>
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
