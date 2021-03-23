import './buttonStyles.css';

import React, { Component } from 'react';

import Corona from './components/corona';


class App extends Component{

  state={
      coronas:[]
  }

  componentDidMount(){
    fetch('https://corona.lmao.ninja/v2/countries')
    .then(res=>res.json())
    .then((data)=>{
      this.setState({coronas:data})
    })
    .catch(console.log)
  }



  render(){
    return(
      //jsx..
      <div>
      
      <Corona coronas={this.state.coronas} />
     
    


      </div>
    );
  }
}

export default App;