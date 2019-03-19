import React from 'react';
import Cartegories from './cartegories';
import Back from './back';
import './mid.css'

const Mid = () => {
    return (
            <div className="flex-container ">
            <div  className ='flex1'>
                <Cartegories />
            </div>  
            <div className ='flex2 fr' >
                < Back/>
            </div>
            </div>
        );
}

export default Mid;