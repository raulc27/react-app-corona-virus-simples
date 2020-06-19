import React from 'react';
import {Link} from 'react-router-dom';

import {Card, Container} from 'react-bootstrap';


const Corona = ({coronas})=>{

  coronas = coronas.sort(

    function(a,b)
    {
        return b.cases-a.cases;
    }

  )


  return(
            <>
              <div >
            <center><h1>Casos COVID-19 no Mundo</h1>
            <p>clique na bandeira do país para um resumo</p>
            <p>Para visualizar em tabela, <Link to={`/Tabela`} > clique aqui</Link></p>
            </center>
          
            <div class="container">
            <center>
            <div class="card-rows "  >

               
              

            {coronas
                .map((corona)=>(
                                     
                   
                    <div class="card mb-5" style={{width:'21em'}} >
 
                    <Link to={`/Pais/${corona.country}`} > <img src={corona.countryInfo.flag} class="card-img-top img-fluid" />  </Link>
                    
                    <div class="card-header">
                    <h3 class="card-title">{corona.country}</h3>
                        <p class="card-text"></p>
                      </div>


                        <div class="card-body"  >
                       
                       
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item"><b>Total Diagnosticados: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.cases)}</li>
                            <li class="list-group-item"><b>Infectados agora: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.active)}</li>
                            <li class="list-group-item"><b>Taxa Letalidade: </b>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.deaths/corona.cases)}</li>
                            <li class="list-group-item"><b>Taxa Recuperação: </b>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.recovered/corona.cases)}</li>
                            <li class="list-group-item"><b>Qtde testes realizados: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.tests)}</li>
                            <li class="list-group-item"><b>Mortes hoje: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.todayDeaths)}</li>
                            </ul>

                        </div>

                        <div class="card-footer">
                        <small class="text-muted">Atualização de 10 em 10 minutos</small>
                      </div>
                    
                              {/*}
                                
                                {corona.deaths}
                                {corona.recovered}
                                
                                
                                {corona.todayCases}
                                {corona.todayDeaths}
                                {corona.critical}
                                  
                */}     
                       </div>
                ))}

                </div>
                </center>
                </div>
                
                </div>
               
              
                
              
                
            </>                
                
           
    )
}

export default Corona;









