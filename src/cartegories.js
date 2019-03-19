import React from 'react';
import './cartegories.css'


const Cartegories = () => {
    return (
        <div className = 'pl4'>
            <p className='bg pa3 b'> CATEGORIES</p>
            <div  className = 'cart'> 
            <div className='ba b--near-white pa3 '>
            <a className='db'> Men's Wears  </a>
            </div>
            <a className='db ba b--near-white pa3'> Fashion </a> 
            <a className='db ba b--near-white pa3'> Electronics</a>
            <a className='db ba b--near-white pa3'> Kitchen </a>
            <a className ='db ba b--near-white pa3'> Bedroom Makeover </a>
            <a className ='db ba b--near-white pa3'> Makeup for Women </a>
            <a className='db ba b--near-white pa3'> Accesories</a>
            <a className='db ba b--near-white pa3 pa3 '> Cars and Automobile </a>
            </div>
    </div>

    )
}

export default Cartegories;