import './index.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoadingGIF from '../../Assets/Loading.gif';
import Logo from '../../Assets/logo512.png';
import api from '../../services/api';

const Countries = () => {

    const [CountriesData, setCountriesData] = useState([]);
    const [ShowPageWithData, setShowPageWithData] = useState(false);

    async function getCountriesData(sort_param) {
        try {
            const { data } = await api.get(`/v3/covid-19/countries?sort=${sort_param}`);
            setCountriesData(data);
            return true;
        }
        catch (_e) {
            console.log("Error: ", _e);
        }
    }

    const populateCountries = (sort_param) => {
        setShowPageWithData(false);
        setCountriesData([]);
        const result = getCountriesData(sort_param);
        if (result) {
            setShowPageWithData(true);
        }
    }

    return (
        <>
            <div class="container">
                <h1>COVID-19 no Mundo</h1>
                <div class="fb-share-button"
                    data-href="https://pandemia.app.br"
                    data-layout="button"
                    data-size="small">
                    <a target="_blank"
                        href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpandemia.app.br%2F&amp;src=sdkpreparse"
                        class="fb-xfbml-parse-ignore">Compartilhar</a>
                </div>

            </div>

            <div class="container">
                <br />
                <small>Ordernar por...</small><br />
                <button class="btn btn-outline-primary" onClick={() => populateCountries('active')}>Ativos</button>
                <button class="btn btn-outline-primary" onClick={() => populateCountries('deaths')}>Mortes</button>
                <button class="btn btn-outline-primary" onClick={() => populateCountries('recovered')}>Recuperados</button>
                <button class="btn btn-outline-primary" onClick={() => populateCountries('todayCases')}>Casos hoje...</button>
            </div>
            {
                ShowPageWithData === true && CountriesData.length <= 1 && <img src={LoadingGIF} alt="loading" class="loading" />

            }
            {
                ShowPageWithData === false && <img src={Logo} class="prettyImg" />
            }


            <div class="container-fluid">
                <div class="row justify-content-center "  >
                    {ShowPageWithData === true && CountriesData.map(corona => (
                        <div class="card" key={corona.id}>
                            <Link to={`/Pais/${corona.country}`} > <img src={corona.countryInfo.flag} class="card-img-top" alt="{corona.country}" />  </Link>
                            <div class="card-body"  >
                                <h3 class="card-title">{corona.country}</h3>
                                <p class="card-text"><b>Infectados no momento:</b> {Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(corona.active)} </p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><b>Pacientes em estado crítico: </b>{Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(corona.critical)}</li>
                                    <li class="list-group-item"><b>Óbitos hoje: </b>{Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(corona.todayDeaths)}</li>
                                    <li class="list-group-item"><b>Total de óbitos: </b>{Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(corona.deaths)}</li>
                                    <li class="list-group-item"><b>Qtde testes realizados: </b>{Intl.NumberFormat("pt-BR", { style: 'decimal' }).format(corona.tests)}</li>
                                </ul>
                            </div>

                            <div class="card-footer">
                                <small class="text-muted">Atualização de 10 em 10 minutos</small>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </>
    )


}

export default Countries;