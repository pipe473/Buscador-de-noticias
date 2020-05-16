import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

// Definir categoria y noticias
const [categoria, guardarCategoria] = useState('');

useEffect(() => {
  const consultarAPI = async () => {

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
