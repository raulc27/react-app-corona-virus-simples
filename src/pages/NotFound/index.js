import React from 'react';
import "./index.css";
import Logo from '../../Assets/logo512.png';

const NotFound = () => {

    return(
        <>
        <p>Serviço não encontrado, você digitou o endereço corretamente ? Visite a página inicial</p>
        <img src={Logo} class="prettyImg" />
        </>
    )
}

export default NotFound;