import React from 'react';

const Noticia = ({noticia}) => {

// Extraer los datos desde la API
const { urlToImage, url, title, description, source } = noticia;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} />
                </div>

                <div className="card-content">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;