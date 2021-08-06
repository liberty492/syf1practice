import './App.css';
import Home from './Home.js'
import About from './About.js'
import Services from './Services'
import Navbar from './Navbar'
import Footer from './Footer'
import {BrowserRouter as Routings,Route, Router} from 'react-router-dom'
import Hooks1 from './Hooks1'


function App()
{
  return(
  <Routings>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/services" component={Services}/>
    <Route path="/footer" component={Footer}/>
    <Route path="/hooks" component={Hooks1}/>
  </Routings>
  );

      
}

export default App;
