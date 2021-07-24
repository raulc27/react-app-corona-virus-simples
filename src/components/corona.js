import React from 'react';
import { Link } from 'react-router-dom';


const Corona = ({coronas})=>{

  coronas = coronas.sort(

    function(a,b)
    {
        return b.active-a.active;
    }

  )


  return(
            <>


                <div class="container">
              <h1>Casos COVID-19 no Mundo</h1>
              <small>Ordem por quantidade de infectados no momento.</small>
               <p>Para visualizar em tabela, <Link to={`/Tabela`} > clique aqui</Link></p>
               <div class="fb-share-button" 
               data-href="https://pandemia.app.br" 
               data-layout="button" 
               data-size="small">
                 <a target="_blank" 
                 href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpandemia.app.br%2F&amp;src=sdkpreparse" 
                 class="fb-xfbml-parse-ignore">Compartilhar</a>
                 </div>

               </div>
          
            <div class="container-fluid">
          
                  
            <div class="row justify-content-center "  >

               
              

            {coronas
                .map((corona)=>(
                                     
                   
                    <div class="card"  >
 
                    <Link to={`/Pais/${corona.country}`} > <img src={corona.countryInfo.flag} class="card-img-top" alt="{corona.country}" />  </Link>
                   
                        <div class="card-body"  >
                        <h3 class="card-title">{corona.country}</h3>
                        <p class="card-text"><b>Infectados no momento:</b> {Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.active)} </p>
                      

                            <ul class="list-group list-group-flush">
                          
                            <li class="list-group-item"><b>Pacientes em estado crítico: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.critical)}</li>

                            <li class="list-group-item"><b>Óbitos hoje: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.todayDeaths)}</li>
                                                  
                            <li class="list-group-item"><b>Total de óbitos: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.deaths)}</li>
                         
                            <li class="list-group-item"><b>Qtde testes realizados: </b>{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.tests)}</li>
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
                    <small>Carregando...</small>
                </div>
        
                     
              </>  
           
    )
}

export default Corona;









