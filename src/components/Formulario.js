import React from 'react';
import styles from './Formulario.module.css';
import useSelect from '../hooks/useSelect';


const Formulario = () => {

    // Opciones de los valores que lee la API
    const OPCIONES = () => [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocio' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'Science', label: 'Ciencia' },
        { value: 'Sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },
    ]

// Utilizar custom hook
const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Encuentra Noticias por categoría</h2>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />

                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Formulario;