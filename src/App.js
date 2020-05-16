import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

// Definir categoria y noticias
const [categoria, guardarCategoria] = useState('');
const [noticias, guardarNoticias] = useState([]);

useEffect(() => {
  const consultarAPI = async () => {
    const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=a185d48fb5e94ff0ba6685754794de1e`;

    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    guardarNoticias(noticias.articles);
    
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
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
