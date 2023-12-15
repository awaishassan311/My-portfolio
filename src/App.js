
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './container/Work/Work';
import Skills from './container/Skills/Skills';
import Footer from './container/Footer/Footer';
function App() {
  return (
   <div>
   <Navbar/>
   <Header/>
    <About />
    <Work/>
    <Skills/>
  <Footer/>
   </div>
  );
}

export default App;
