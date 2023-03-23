import './App.css'
import About from './components/About';
import FoodMenu from './components/FoodMenu';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="App" data-aos="fade-up">
      <section className="apresentation--container" id="home">
        <Header />
        <Hero />
      </section>

      <About />
      <FoodMenu />
      <Footer />
    </div>
  )
}

export default App
