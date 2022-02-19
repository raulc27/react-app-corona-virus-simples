import './buttonStyles.css';

import React, { Component } from 'react';
import LoadingMask from 'react-loadingmask';

import Corona from './components/corona';


class App extends Component{

  state={
      coronas:[],
      controle: true,
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
        <LoadingMask loading={this.state.controle} text={"loading..."}>
      <Corona coronas={this.state.coronas} />
      </LoadingMask>
     
    


      </div>
    );
  }
}

export default App;