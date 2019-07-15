import React from 'react';
import Cartegories from './cartegories';
import Whole from './whole'
import Back from './back';
import Pop from'./pop';

import './mid.css'

const Mid = () => {
    return (
        <div>
            <div className="flex-container">
            <div  className ='flex1'>
                {/* <Cartegories /> */}
                <Whole />
            </div>  
            <div className ='flex2 fr' >
                < Back/>
            </div>
            </div>



            </div>
        );
}

export default Mid;