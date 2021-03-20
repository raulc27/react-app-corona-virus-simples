import React,{Component} from 'react';
import tabela from './tabela';




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