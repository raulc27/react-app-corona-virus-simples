import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import LoadingGIF from '../../Assets/Loading.gif';
import Logo from '../../Assets/logo512.png';
import api from '../../services/api';

const Country = (props) => {

    const [Pais, setPais] = useState([]);
    const [Mundo, setMundo] = useState([]);
    const [ShowPageWithData, setShowPageWithData] = useState(false);
    const { id } = props.match.params;

    async function getCountryData() {
        try {
            const { data } = await api.get(`/v3/covid-19/countries/${id}`);
            setPais(data);
            return true;
        }
        catch (_e) {
            console.error("Error: ", _e);
        }
        return false;
    }

    async function getWorldData() {
        try {
            const { data } = await api.get(`/v3/covid-19/all`);
            setMundo(data);
            return true;
        }
        catch (_e) {
            console.error('Error: ', _e);
        }
        return false;
    }

    const getInfo = async () => {
        try{
        const countryData = await getCountryData();
        const worldData = await getWorldData();
        if(!!countryData && !!worldData){
            setTimeout(()=>setShowPageWithData(true),2000);
            return
        }
        setShowPageWithData(false);
     }
     catch(_e){
        console.log(_e);
     }

    }

    useEffect(()=>{
        getInfo();
    },[])

        return (
            <>
            { ShowPageWithData===false &&( <div> <img src={Logo} class="prettyImg" />  <br/> <img src={LoadingGIF} alt="loading" class="loading" /></div>)}

            { ShowPageWithData===true && Pais.length<=10 && <img src={LoadingGIF} alt="loading" class="loading" />}

            { ShowPageWithData===true && (
            <>
            <div class="jumbotron jumbotron-fluid" >
                    <div class="container">
                        <img src={Pais.countryInfo.flag} class="img img-fluid img-responsive" alt="Bandeira de {Pais.country}" />
                    </div>
            </div>
                <div class="container">
                    <div class="card-deck">
                        <div class="card d-none d-sm-block bg-light">
                           {/*   <img class="card-img-top" src={Pais.countryInfo.flag} alt='Dados Mundiais' /> */}
                            <div class="card-header">
                                <h5 class="card-title">{Pais.country}</h5>
                                <p class="card-text"></p>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"><b>Diagnosticados:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Pais.cases)}</li>
                                    <li class="list-group-item"><b>Mortes:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Pais.deaths)}</li>
                                    <li class="list-group-item"><b>Recuperados:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Pais.recovered)}</li>
                                    <li class="list-group-item"><b>Infectados no momento:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Pais.active)}</li>
                                    <li class="list-group-item"><b>Estado Crítico:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Pais.critical)}</li>
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
                                    <li class="list-group-item"><b>Diagnosticados:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Mundo.cases)}</li>
                                    <li class="list-group-item"><b>Mortes:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Mundo.deaths)}</li>
                                    <li class="list-group-item"><b>Recuperados:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Mundo.recovered)}</li>
                                    <li class="list-group-item"><b>Infectados no Momento:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Mundo.active)}</li>
                                    <li class="list-group-item"><b>Estado Crítico:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(Mundo.critical)}</li>
                                </ul>
                                <p class="card-text"><small class="text-muted">Update de 10 em 10min</small></p>
                            </div>
                        </div>
                        <div class="card bg-light" >
                            <div class="card-header">
                                <h5 class="card-title">"{Pais.country}" em relação ao Mundo</h5>
                                <p class="card-text"></p>
                            </div>
                            <div class="card-body">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"></li>
                                    <li class="list-group-item"><b>Diagnosticados:</b> {Intl.NumberFormat("pt-BR", { style: 'percent' }).format(Pais.cases / Mundo.cases)}</li>
                                    <li class="list-group-item"><b>Mortes:</b> {Intl.NumberFormat("pt-BR", { style: 'percent' }).format(Pais.deaths / Mundo.deaths)}</li>
                                    <li class="list-group-item"><b>Recuperados:</b> {Intl.NumberFormat("pt-BR", { style: 'percent' }).format(Pais.recovered / Mundo.recovered)}</li>
                                    <li class="list-group-item"><b>Infectados no Momento:</b> {Intl.NumberFormat("pt-BR", { style: 'percent' }).format(Pais.active / Mundo.active)}</li>
                                    <li class="list-group-item"><b>Estado Crítico:</b> {Intl.NumberFormat("pt-BR", { style: 'percent' }).format(Pais.critical / Mundo.critical)}</li>
                                </ul>
                                <p class="card-text"><small class="text-muted">Update de 10 em 10min</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )}
            </>
        )
    
  
}

export default Country;