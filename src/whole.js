import React from "react";
import Back from './back';
import First from './first';
import Pop from './pop';
import New from './new';
import Footer from './footer';
import Copy from './copy';
import Nav from './nav';
import Fashion from './Fashion';
import './cartegories.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Whole() {
  return (
   
    <Router>
      <First />
      <Nav />
      <div className = ''> <Back />
          <div className = 'pl2'>
        <p className='bg pa3 b w5'> CATEGORIES</p>
          <div  className = 'cart'> 
        <p>
          <Link to="/" className='db ba b--near-white pa3 w5 black'> Home</Link>
        </p>
        <p>
          <Link to="/fashion" className='db ba b--near-white pa3 w5 black'>Fashion</Link>
        </p>
        <p>
          <Link to="/fashion" className='db ba b--near-white pa3 w5 black'>Electronics</Link>
        </p>
        <p>
          <Link to="/fashion" className='db ba b--near-white pa3 w5 black'>Kitchen</Link>
        </p>
        <p>
          <Link to="/fashion" className='db ba b--near-white pa3 w5 black'>Bedroom</Link>
        </p>
        <p>
          <Link to="/fashion" className='db ba b--near-white pa3 w5 black'>Makeup </Link>
        </p>
        <p>
          <Link to="/fashion" className='db ba b--near-white pa3 w5 black'>Accessories</Link>
        </p>
       
      <Route exact path="/" component={Home} />
      <Route path="/fashion" component={ Fashion } />
      
    </div>
    </div>
    </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Pop />
      <New />
      <Footer />
      <Copy />
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}





export default Whole;
