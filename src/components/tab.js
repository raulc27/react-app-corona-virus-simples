import React from 'react';
import {Link} from 'react-router-dom';



const tab = ({coronas})=>{ 
    
    
    coronas = coronas.sort(
        function(a,b){
            return b.cases-a.cases;
        }
    )




    return(

        <div >
      <center><h1>Casos COVID-19 no Mundo</h1>
      <p>clique na bandeira do país para um resumo</p>
      </center>
    
      <div class="container">
         
          <table class="table table-striped table-hover table-responsive-xs table-sm table-wrapper-scroll-y">
          <thead>
              <tr>
                  <th>Bandeira</th>
             {/*     <th  >País</th> */}

                  <th >Diagnosticados</th>
                  {/*      <th  >Mortes</th> */}
                  {/*   <th  >Recuperados</th> */}
                  <th>Letalidade</th>
                  <th>Recuperação</th>
                  {/*    <th  >Diag. hoje</th> */}
                  {/*    <th  >Mortes últimas 24h</th> */}
                  {/*   <th  >Estado crítico</th>       */}            
              </tr>
          </thead>

          <tbody>

      {coronas
          .map((corona)=>(
            
              
                      <tr>  
                          <td><Link to={`/Pais/${corona.country}`} ><img src={corona.countryInfo.flag} class="image img-responsive img-rounded img-thumbnail" width="33%" /></Link></td>
                         {/*} <td  ><b>{corona.country}</b></td> */}
                          <td >{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.cases)}</td>
                     {/*     <td  >{corona.deaths}</td> */}
                     {/*     <td  >{corona.recovered}</td> */}
                          <td>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.deaths/corona.cases)}</td>
                          <td>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.recovered/corona.cases)}</td>
                     {/*     <td  >{corona.todayCases}</td> */}
                     {/*     <td  >{corona.todayDeaths}</td> */}
                      {/*    <td  >{corona.critical}</td> */}
                         
                          
                      </tr>

            


       
          ))}
          </tbody>

          <tfoot>
              <tr>
                  
                  <th>Bandeira</th>
                 {/* <th  >País</th> */}
                  <th >Diagnosticados</th>
               {/*   <th  >Mortes</th> */}
               {/*   <th  >Recuperados</th> */}
                  <th>Letalidade</th>
                  <th>Recuperação</th>
                {/*  <th  >Diag. hoje</th> */}
                {/*  <th  >Mortes últimas 24h</th> */}
                {/*  <th  >Estado crítico</th> */}
                



              </tr>
          </tfoot>
    </table>
  </div>
        
  </div>

    )

}

export default tab;

