import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

// Definir categoria y noticias
const [categoria, guardarCategoria] = useState('');
const [noticias, guardarNoticias] = useState([]);

useEffect(() => {
  const consultarAPI = async () => {
    const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=a185d48fb5e94ff0ba6685754794de1e`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    console.log(noticias.articles);
    
  }
  consultarAPI();
}, [categoria]);


  return (
    <Fragment>
      <Header 
       titulo='Buscador de Noticias' 
      />

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
      </div>
    </Fragment>
  );
}

export default App;
