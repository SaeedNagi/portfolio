// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { createBrowserRouter, RouterProvider } from 'react-router';
function App() {
  return (
    <div>
       <Navbar/>
       <Home/>
       <About/>
       <Services/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
