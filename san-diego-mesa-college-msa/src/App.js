
import React, { useEffect } from 'react';
import './App.css';
import Main from './components/main';
import SocialFollow from './SocialFollow';


function App() {
  useEffect(() => {
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    const toggleMenu = () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    };

    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }

    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', toggleMenu);
      }
    };
  }, []);

  return (
    <div className="App">

      <section class="showcase">
        <header>
          <h2 class="logo">Mesa MSA</h2>
          <div class="toggle"></div>
        </header>
        <div>
          <Main />
        </div>
        <div class="overlay"></div>
        <div class="text">
          <h2>  San Diego Mesa  </h2>
          <h3>College MSA</h3>
          <a href="#"> About Us</a>
        </div>

      </section>
      <div class="menu">



        <ul>

          <li><a href="#">Home</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">Contact</a></li>
          <SocialFollow />
        </ul>
      </div>
    </div>
  )
}
export default App;