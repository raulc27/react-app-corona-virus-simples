import React,{Component} from 'react';
<<<<<<< HEAD
import tabela from './tabela';
=======
import api from '../services/api';
import Tab from './tab';
>>>>>>> 0544d743c537f96ed13b333d3d3634da9fa6fe29




<<<<<<< HEAD
export default class Tabela extends Component{


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

        <tabela  coronas={this.state.coronas}   />

    );

}




}
=======
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
>>>>>>> 0544d743c537f96ed13b333d3d3634da9fa6fe29
