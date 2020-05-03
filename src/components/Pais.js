import React,{Component} from 'react';
import api from '../services/api';

export default class Pais extends Component {


    state={
        Pais:[],
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

       
        return(
         
         
        
          <>
          
          <div class="jumbotron jumbotron-fluid" >
              <div class="container">
                
                <h1 class="display-4">Informações de "{Pais.country}" </h1>
                <p class="lead">Comparando dados COVID-19 de "{Pais.country}" com o mundo.</p>
                <p>Esta <b>app</b> consulta uma api, e muitos dados estão em formato internacional.</p>
              </div>
          </div>
            

          <div class="container">

          <div class="card-deck">
              <div class="card">
              {/*<img class="card-img-top" src='' alt='Dados Mundiais' /> */}
                <div class="card-body">
                  <h5 class="card-title">{Pais.country}</h5>
                  <p class="card-text"></p>
                
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item"></li>
                  <li class="list-group-item"><b>Diagnosticados:</b> {Pais.cases}</li>
                  <li class="list-group-item"><b>Mortes:</b> {Pais.deaths}</li>
                  <li class="list-group-item"><b>Recuperados:</b> {Pais.recovered}</li>
                  <li class="list-group-item"><b>Infectados no momento:</b> {Pais.active}</li>
                  <li class="list-group-item"><b>Estado Crítico:</b> {Pais.critical}</li>
              </ul>
                  
                  <p class="card-text"><small class="text-muted">Update de 10 em 10min</small></p>
                </div>
            
            </div>

            <div class="card" >
            {/* <img class="card-img-top" src='' alt='Dados Mundiais' /> */}
            <div class="card-body">
              <h5 class="card-title">Mundo</h5>
              <p class="card-text">
              </p>
              <p class="card-text"></p>
                         
              <ul class="list-group list-group-flush">
                <li class="list-group-item"></li>
                <li class="list-group-item"><b>Diagnosticados:</b> {Mundo.cases}</li>
                <li class="list-group-item"><b>Mortes:</b> {Mundo.deaths}</li>
                <li class="list-group-item"><b>Recuperados:</b> {Mundo.recovered}</li>
                <li class="list-group-item"><b>Infectados no Momento:</b> {Mundo.active}</li>
                <li class="list-group-item"><b>Estado Cŕitico:</b> {Mundo.critical}</li>
            </ul>



              <p class="card-text"><small class="text-muted">Update de 10 em 10min</small></p>
            </div>
        
        </div>




        <div class="card" >
        {/* <img class="card-img-top" src='' alt='Dados Mundiais' /> */}
        <div class="card-body">
          <h5 class="card-title">"{Pais.country}" em relação ao Mundo</h5>
          <p class="card-text">
          </p>
          <p class="card-text"></p>
                     
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
          
           

          


       
          </div>


          </>



          

         
          
   
         
        );

    }




}

