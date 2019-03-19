import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Copy from './copy'
import './index.css';
import First from './first';
import Nav from './nav';
import Mid from './mid';
import Pop from './pop'
import Footer from './footer';
import New from './new';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

ReactDOM.render(<div>
        <First />
        <Nav />
        <Mid />
        <Pop />
        <New />
       <Footer />
       <Copy />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
