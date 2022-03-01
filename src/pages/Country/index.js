import React, { useEffect, useRef, useState } from 'react';

import api from '../../services/api';

const Country = (props) => {

    const [Pais, setPais] = useState([]);
    const [Mundo, setMundo] = useState([]);
    const {id} = props.match.params;

    async function getCountryData(){
    try{
        const {data:{data=[]}} = await api.get(`/v2/countries/${id}`);
        return data;
    }
    catch(_e){
        console.error("Error: ", _e);
    }
    }

    async function getWorldData(){
        try{
          const {data:{data=[]}} = await api.get(`/v2/all`);
          return data;
        }
        catch(_e){
            console.error('Error: ',_e);
        }
    }
}

export default Country;