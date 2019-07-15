import React, { Component } from 'react';
import './new.css';

const pStyle = {
    width: '210px',
    height: '190px',
    display: 'inline-block',
    padding: '20px',
    margin: '32px',
  };
 
class New extends Component {
    constructor(props) {
      super(props);
  
          this.state = {
            items: [],
            visible: 4,
          }
        }
      
        componentDidMount() {
          fetch('http://demo4507124.mockable.io/products')
            .then(response=> response.json())
            .then(users => {this.setState({ items: users})});
        }
      
        
      
        render() {
          return (
              
            <section className="Container  ba b--light-gray ma3 ">
            <div className = ''>
                <h4 className='pa3 new bb b--light-gray'> EXPLORE NEW STUFF</h4>
            </div>    
            <div className="" aria-live="polite">
                {this.state.items.slice(0, this.state.visible).map((item, index) => {
                    return (
                      <div className=" new2  " key ={item.id} style={pStyle}>
                      <div>  <br /> </div>
                        <img src={ require(`./sho.jpg`) } className='dib disp' />
                        <p>{item.name}</p>
                        <p>{item.rating}</p>
                        <p className='newP'>{item.price}</p>
                        <p className='oldP'>{item.old_price}</p>
                        <p>{item.sizes}</p>
                        <p>{item.cartegoryid}</p>
                        <p>{item.description}</p>
                      </div>
                    
                    );
                  })}
            </div>
                
            </section>
          );
      };
    }
      
    

  export default New;



 
  
