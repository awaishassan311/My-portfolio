
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import About from './container/About/About';
import Work from './container/Work/Work';

function App() {
  return (
   <div>
   <Navbar/>
   <Header/>
    <About />
    <Work/>
   </div>
  );
}

export default App;
