import React,{Component} from 'react';
import api from '../services/api';

export default class Pais extends Component {


    state={
        Pais:{},
        Mundo:{}
    }

    async componentDidMount(){


        const {id}=this.props.match.params;

        const responsePais = await api.get(`/v2/countries/${id}`);
        const responseMundo = await api.get('/v2/all');

        console.log(responsePais.data);

        this.setState({Pais: responsePais.data});
        this.setState({Mundo: responseMundo.data});

       

    }



    render(){

        const {informacao}=this.state;

       
        return(
         
          
            
          <div>
            
                <p>Informações </p>
                <p>{this.state.Pais.country}</p>
                <p>{this.state.Pais.cases}</p>
                <p>{this.state.Mundo.cases}</p>


          </div>
   
         
        );

    }




}

