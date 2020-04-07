import React from 'react';


const Corona = ({coronas})=>{

  


    return(

              <div >
            <center><h1>Casos COVID-19 no Mundo</h1></center>
          
            <div class="container">
               
                <table class="table table-striped table-hover table-responsive-xs table-sm table-wrapper-scroll-y">
                <thead>
                    <tr>
                        <th>Bandeira</th>
                        <th >País</th>
                        <th >Diagnosticados</th>
                        <th >Mortes</th>
                        <th >Recuperados</th>
                        <th>Letalidade</th>
                        <th>Recuperação</th>
                        <th >Diag. hoje</th>
                        <th >Mortes últimas 24h</th>
                        <th >Estado crítico</th>
                        <th>Casos/milhão</th>
                        <th>Mortes/milhão</th>
                       


                    </tr>
                </thead>
                <tbody>

            {coronas.map((corona)=>(
                                     

                            <tr>  
                                <td><img src={corona.countryInfo.flag} class="image img-responsive img-rounded img-thumbnail" width="33%" /></td>
                                <td><b>{corona.country}</b></td>
                                <td>{corona.cases}</td>
                                <td>{corona.deaths}</td>
                                <td>{corona.recovered}</td>
                                <td>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.deaths/corona.cases)}</td>
                                <td>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.recovered/corona.cases)}</td>
                                <td>{corona.todayCases}</td>
                                <td>{corona.todayDeaths}</td>
                                <td>{corona.critical}</td>
                                <td>{corona.casesPerOneMillion}</td>
                                <td>{corona.deathsPerOneMillion}</td>
                                
                            </tr>

                    


             
                ))}
                </tbody>

                <tfoot>
                    <tr>
                        <th></th>
                        <th>País</th>
                        <th>Total Diagnosticados</th>
                        <th>Total Mortes</th>
                        <th>Total Recuperados</th>
                        <th>Detectados hoje</th>
                        <th>Mortes últimas 24h</th>
                        <th>Estado cŕitico</th>
                        <th>Casos por milhão</th>
                        <th>Mortes por milhão</th>



                    </tr>
                </tfoot>
          </table>
        </div>
              
        </div>
    )
}

export default Corona;


/*



   <div class="card col-sm-4 col-xs-4 mb-3"  >
                    <div class="card-body">
                        <img src={corona.countryInfo.flag} class="card-img-top"/>
                        <h5 class="card-title" align="center">{corona.country}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text">Total Contaminados: {corona.cases}</p>
                        <p class="card-text">Total Mortes: {corona.deaths}</p>
                        <p class="card-text">Total Recuperados: {corona.recovered}</p>
                        
                        <p class="card-text">Casos Hoje: {corona.todayCases}</p>
                        <p class="card-text">Mortes Hoje: {corona.todayDeaths}</p>
                        <p class="card-text">Em estado crítico: {corona.critical}</p>

                    </div>

                    </div>
                    */



