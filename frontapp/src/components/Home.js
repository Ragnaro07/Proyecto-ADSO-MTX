import React from 'react';
import Navbar from './Navbar';
import portadaVideo from '../assets/video/SmartCity_portada.mp4';
import '../assets/css/style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <header>
        <div className='banner-container'>
          <video className='banner-video' autoPlay loop muted>
            <source src={portadaVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='texto_banner'>
          <h1>Smart Meterin METREX</h1>
          <br />
        </div>
      </header>
    </div>
  );
};

export default Home;
