import React, {Component} from 'react';
import Corona from './components/corona';
import NavBar from './components/NavBar';


import "./buttonStyles.css";

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
      <NavBar />
      <Corona coronas={this.state.coronas} />
     
    


      </div>
    );
  }
}

export default App;