import React from 'react';
import { Link } from 'react-router-dom';



const tab = ({coronas})=>{ 
    
    
    coronas = coronas.sort(
        function(a,b){
            return b.todayDeaths-a.todayDeaths;
        }
    )


    const dataAtual = new Date();
    const horas = dataAtual.getHours();
    const minutos = dataAtual.getMinutes();

      const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth()+1;
    const ano = dataAtual.getFullYear();

    //const horaCerta=horas+"h"+minutos;



    return(

      
        <div >

      <center><h1>Óbitos por COVID-19</h1>
      <p>Ordenando por fatos ocorridos desde 00h de hoje <b>({dia+" / "+mes+" / "+ano})</b></p>
    
    <p class="small">O seu horário no momento: <b>{horas}h</b> e {minutos} minutos </p>
       
    
      <p>clique no nome do país para um resumo</p>
      </center>
    
      <div class="container">
         
          <table class="table   table-striped table-hover table-responsive-xs table-sm table-wrapper-scroll-y">
          <thead>
              <tr>
                 {/*  <th>Bandeira</th> */}
                 <th  >País</th> 
                 <th  >Óbitos hoje</th> 


                  <th >Em estado crítico</th>
                  {/*      <th  >Mortes</th> */}
                  {/*   <th  >Recuperados</th> */}
                  <th>Letalidade</th>
                  <th>Recuperação</th>
                  {/*    <th  >Diag. hoje</th> */}
                  {/*   <th  >Estado crítico</th>       */}            
              </tr>
          </thead>

          <tbody>

      {coronas
          .map((corona)=>(
            
              
                      <tr>  
                    {/*}      <td><Link to={`/Pais/${corona.country}`} ><img src={corona.countryInfo.flag} class="image img-responsive img-rounded img-thumbnail" width="33%" /></Link></td> */}
                          <td  ><Link to={`/Pais/${corona.country}`} ><b>{corona.country}</b></Link></td> 
                          <td  >{corona.todayDeaths}</td> 

                          <td >{Intl.NumberFormat("pt-BR",{style:'decimal'}).format(corona.critical)}</td>
                     {/*     <td  >{corona.deaths}</td> */}
                     {/*     <td  >{corona.recovered}</td> */}
                          <td>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.deaths/corona.cases)}</td>
                          <td>{Intl.NumberFormat("pt-BR",{style:'percent'}).format(corona.recovered/(corona.cases-corona.deaths))}</td>
                     {/*     <td  >{corona.todayCases}</td> */}
                      {/*    <td  >{corona.critical}</td> */}
                         
                          
                      </tr>

            


       
          ))}
          </tbody>

          <tfoot>
              <tr>
                  
                 {/*} <th>Bandeira</th> */}
                  <th  >País</th> 
                  <th  >Mortes últimas 24h</th> 

                  <th >Diagnosticados</th>
               {/*   <th  >Mortes</th> */}
               {/*   <th  >Recuperados</th> */}
                  <th>Letalidade</th>
                  <th>Recuperação</th>
                {/* <th  >Diag. hoje</th> */}
                {/*  <th  >Estado crítico</th> */}
                



              </tr>
          </tfoot>
    </table>
  </div>
        
  </div>

    )

}

export default tab;

