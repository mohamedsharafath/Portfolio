import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Testimonials/>
    </main>
    
    </>
  );
}

export default App;
