import React, { Component } from 'react';


const pStyle = {
    width: '210px',
    height: '190px',
    display: 'inline-block',
    padding: '20px',
    margin: '25px',
  };

class Pop extends Component {
    constructor(props) {
      super(props);
  
          this.state = {
            items: [],
            visible: 4,
          };
        }
        
      
        componentDidMount() {
          fetch('http://demo4507124.mockable.io/categories')
            .then(response=> response.json())
            .then(users => {this.setState({ items: users})});
        }
      
        
      
        render() {
          return (
            <section className="Container  ba b--light-gray ma4">
            <div className = ''>
            <h4 className='pa3 new bb b--light-gray' > EXPLORE POPULAR CARTEGORIES</h4>
           
                </div>
                
                
              <div className="" >
                {this.state.items.slice(0, this.state.visible).map((item, index) => {
                     
                    return (
                      <div className="new2" key ={item.id} style={pStyle}>
                      <div> <br/> </div> 
                        <img src={ require(`./acc.jpg`) } className=' db '/>
                        <p className='pa3'>{item.name}</p> 
                      </div>
                    );
                     
                  })}
                </div>
            
              </section>
              
          );
      };
    }
      
    

  export default Pop;
  