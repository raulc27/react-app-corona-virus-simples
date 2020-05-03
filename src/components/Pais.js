import React,{Component} from 'react';
import NavBar from './NavBar';
import api from '../services/api';

export default class Pais extends Component {


    state={
        Pais:{},
        Mundo:{}
    }

    async componentDidMount(){


        const {id}=this.props.match.params;

        const responsePais = await api.get('/v2/countries/${id}');
        const responseMundo = await api.get('/v2/all');

        this.setState({Pais: responsePais.data});
        this.setState({Mundo: responseMundo.data});

       

    }



    render(){

        const {informacao}=this.state;

        return(
         
            
          <div>
            
            <p>{informacao.Pais.country}</p>
            <p>{informacao.Pais.cases}</p>
            <p>{informacao.Mundo.cases}</p>


          </div>
   
         
        );

    }




}

