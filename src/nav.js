import React from 'react';
import Logo from './logo.png';
import './nav.css'
import { MdFavorite, MdNotificationsNone, MdSearch  } from 'react-icons/md';
import { FaShoppingCart  } from 'react-icons/fa';


const Nav = () => {
    return (
        <div className ='container'>
           <nav>
                <a className=" log " href="nil"> <img src = { Logo } alt ='logo' className = 'logo '/>Paysmosmo  </a>
                <form className="dib pa4">
                    <span className="header__searchIcon___1k0ZP db fl   pa1 bg-black-05">  <MdSearch />  </span>
                    <input  className="pa1 searchbar pt1 " type="search" placeholder= "Search for products" aria-label="Search" />
                        
                    <button className="pa1 but" type="submit">SEARCH</button>
                </form>
                   
                <ul className=" dib">
                    <li className="dib grow">
                        <a className="ico " href="#"> < FaShoppingCart size={20} /> </a>
                    </li>
                    <li className="dib">
                        <a className="ico" href="#"> < MdFavorite size={20}/>  </a>
                    </li>
                    <li className="dib">
                        <a className="ico" href="#"> <MdNotificationsNone size={20}/>  </a>
                        </li>
                </ul>
            </nav>

        </div>
       
    )
};

export default Nav