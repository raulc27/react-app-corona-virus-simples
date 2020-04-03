import React, {Component} from 'react';
import Corona from './components/corona';

class App extends Component{


  state={
    coronas:[]
  }

  componentDidMount(){
    fetch('https://corona.lmao.ninja/countries')
    .then(res=>res.json())
    .then((data)=>{
      this.setState({coronas:data})
    })
    .catch(console.log)
  }

  render(){
    return(
      //jsx..
      <Corona coronas={this.state.coronas} />
    );
  }
}

export default App;