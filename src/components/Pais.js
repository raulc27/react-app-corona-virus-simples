import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';
import NavBar from './NavBar';

export default class Pais extends Component {

// state "gambiarra"!!!!
    state={
        Pais:{

              "countryInfo": {
                "_id":"",
                "iso2":"",
                "iso3":"",
                "lat": "",
                "long":"",
                "flag":"" 
              }
   
        
        }
        
        ,     
        
        Mundo:{}
    }

    async componentDidMount(){


        const {id}=this.props.match.params;

        const responsePais = await api.get(`/v2/countries/${id}`);
        const responseMundo = await api.get('/v2/all');

        //console.log(responsePais.data);

        this.setState({Pais: responsePais.data});
        this.setState({Mundo: responseMundo.data});

        

        
     

    }
  


    render(){

        const {Pais, Mundo}=this.state;
        //if(!Pais) return null;
        //if(!Mundo) return null;


       

        return(
         
         
        
          <>
          <NavBar/>
          <div class="jumbotron jumbotron-fluid" >
              <div class="container">
                
                <h1 class="display-4"> <img src={Pais.countryInfo.flag} class="img img-fluid" alt="Bandeira de {Pais.country}" />&nbsp;"{Pais.country}" </h1>
           
                <p class="lead mt-3">Comparando dados <b>COVID-19</b> de <b>"{Pais.country}"</b> com o mundo.</p>
                <p>Esta <b>app</b> consulta uma api internacional e muitos nomes/dados não estão no formato <b>pt-br</b>.</p>
                <p class="d-sm-none">Para uma comparação detalhada, consulte em uma tela desktop</p>
              </div>
          </div>
            

          <div class="container">

          <div class="card-deck">

              <div class="card d-none d-sm-block bg-light">
              {/*  <img class="card-img-top" src={Pais.countryInfo.flag} alt='Dados Mundiais' /> */}
              <div class="card-header">
                    <h5 class="card-title">{Pais.country}</h5>
                    <p class="card-text"></p>
                  </div>
          
          
                <div class="card-body">
                
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item"></li>
                  <li class="list-group-item"><b>Diagnosticados:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Pais.cases)}</li>
                  <li class="list-group-item"><b>Mortes:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Pais.deaths)}</li>
                  <li class="list-group-item"><b>Recuperados:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Pais.recovered)}</li>
                  <li class="list-group-item"><b>Infectados no momento:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Pais.active)}</li>
                  <li class="list-group-item"><b>Estado Crítico:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Pais.critical)}</li>
              </ul>
              
                  <p class="card-text"><small class="text-muted">Update de 10 em 10min</small></p>
                </div>
            
            </div>

            <div class="card d-none d-sm-block bg-light" >
            {/* <img class="card-img-top" src='' alt='Dados Mundiais' /> */}

            <div class="card-header">            
                <h5 class="card-title">Mundo</h5>
                <p class="card-text"></p>
              </div>

            <div class="card-body">
                     

                         
              <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item"><b>Diagnosticados:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Mundo.cases)}</li>
                <li class="list-group-item"><b>Mortes:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Mundo.deaths)}</li>
                <li class="list-group-item"><b>Recuperados:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Mundo.recovered)}</li>
                <li class="list-group-item"><b>Infectados no Momento:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Mundo.active)}</li>
                <li class="list-group-item"><b>Estado Cŕitico:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(Mundo.critical)}</li>
            </ul>



              <p class="card-text"><small class="text-muted">Update de 10 em 10min</small></p>
            </div>
        
        </div>




        <div class="card bg-light" >
        {/* <img class="card-img-top" src='' alt='Dados Mundiais' /> */}
        
        <div class="card-header">
            <h5 class="card-title">"{Pais.country}" em relação ao Mundo</h5>
            <p class="card-text"></p>
          </div>
          

        <div class="card-body">

          
                     
          <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>
            <li class="list-group-item"><b>Diagnosticados:</b> {Intl.NumberFormat("pt-BR",{style:'percent'}).format(Pais.cases/Mundo.cases)}</li>
            <li class="list-group-item"><b>Mortes:</b> {Intl.NumberFormat("pt-BR",{style:'percent'}).format(Pais.deaths/Mundo.deaths)}</li>
            <li class="list-group-item"><b>Recuperados:</b> {Intl.NumberFormat("pt-BR",{style:'percent'}).format(Pais.recovered/Mundo.recovered)}</li>
            <li class="list-group-item"><b>Infectados no Momento:</b> {Intl.NumberFormat("pt-BR",{style:'percent'}).format(Pais.active/Mundo.active)}</li>
            <li class="list-group-item"><b>Estado Cŕitico:</b> {Intl.NumberFormat("pt-BR",{style:'percent'}).format(Pais.critical/Mundo.critical)}</li>
        </ul>



          <p class="card-text"><small class="text-muted">Update de 10 em 10min</small></p>
        </div>
    
    </div>

            

          </div>
          
           
          <Link to={`/`} ><button class="btn btn-dark input-lg mt-5 mb-1" > <b>Voltar para página inicial</b> </button>  </Link>


       
          </div>

          

          </>



          

         
          
   
         
        );

    }




}

