import React, {useContext, useEffect, Fragment} from 'react';

import Text from './Text'

//importamos en context de listados de textos
import TextContext from '../context/TextosContext'
const TextList = () => {

    const textContext = useContext(TextContext);
    const { texts, paginaactual, getText,ShowSpinner, errorgettext } = textContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {

        ShowSpinner(true);
        getText(paginaactual);

        // eslint-disable-next-line
    }, [])

    return ( 
        <Fragment>
        {errorgettext ? <p class="alert alert-danger mt-5">Error Obteniendo Información</p> : 
        (
            texts.map(text => (
                <Text 
                    key={text._id}
                    text={text}
                />
            ))
        )}
        </Fragment>
     );
}
 
export default TextList;