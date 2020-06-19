import React,{Component} from 'react';
import api from '../services/api';
import Tab from './tab';




import "../buttonStyles.css";

class Tabela extends Component{

  state={
    coronas:[]
  }
  
/*

  componentDidMount(){
    fetch('https://corona.lmao.ninja/v2/countries')
    .then(res=>res.json())
    .then((data)=>{
      this.setState({coronas:data})
    })
    .catch(console.log)
  }
*/

async componentDidMount(){

	const response = await api.get('/v2/countries');

	this.setState({coronas: response.data});

}


  render(){
    return(
      //jsx..
      
	  <div>
     
      <Tab coronas={this.state.coronas} />
	  </div>
		


     
    );
  }
}

export default Tabela;