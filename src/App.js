import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

// Definir categoria y noticias
const [categoria, guardarCategoria] = useState('');


  return (
    <Fragment>
      <Header 
       titulo='Buscador de Noticias' 
      />

      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
