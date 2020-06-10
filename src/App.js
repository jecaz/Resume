import React, { Comonent } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';


class App extends Comonent {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
