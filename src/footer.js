import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { MdExpandLess } from 'react-icons/md';

const Footer = () => {
    return(
        <div>
            <div className="row dets pl5 pt5">
		    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12"> 
                <h6 className="pb2"> PAYSMOSMO </h6> 
                <p> Help give out inventory loans to cooperative memners with ease</p>
		    </div>
		    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"> 
                <h6 className='pb3'> Contact </h6>
                <p>Registration</p>
                <p>About Us</p>
                <p>Contact Us</p>
		    </div>
		    <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12"> 
                <h6 className='pb3'> Help</h6>
                <p>Privacy Policy</p>
                <p>How it works</p>
                <p> {`Terms & Conditions`} </p>
		    </div>
		    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <h6 className='pb3 '> Stay Connected</h6>
                <div className='social dib pa1 mr3'> < FaFacebookF /> </div>
                <div className='social dib pa1 '>   <FaTwitter /></div>
		    </div>
		
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <p> Back to top <MdExpandLess /> </p>
		    </div>
            </div>
        </div>
    )
}

export default Footer;