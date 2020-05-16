import React from 'react';

const Noticia = ({noticia}) => {

// Extraer los datos desde la API
const { urlToImage, url, title, description, source } = noticia;

const imagen = (urlToImage) ? 
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
: null;

    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver noticia completa</a>
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;