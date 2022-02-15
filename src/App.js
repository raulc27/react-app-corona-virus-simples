import './buttonStyles.css';
import 'react-loadingmask/dist/react-loadingmask.css';

import React, { useEffect, useState } from 'react';
import LoadingMask from 'react-loadingmask';

import Corona from './components/corona';

function App(){

    const [coronas, setCoronas] = useState({});
    const [controle,setControle] =useState(true);

  useEffect(()=>{
    fetch('https://corona.lmao.ninja/v2/countries')
      .then(res=>res.json())
      .then((data)=>{
        setCoronas({coronas:data});
      })
      .catch(console.log)
  }, [])

{!!coronas && setControle(false)}

  return(
    //jsx..
  <>
  <LoadingMask loading={controle} text={"loading..."}>

  <Corona coronas={coronas} />
 
 </LoadingMask>
  </>
  )

}

export default App;