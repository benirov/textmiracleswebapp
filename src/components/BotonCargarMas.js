import React, {useState, useContext} from 'react';
import './botonCargarMas.css'

//importamos en context de listados de textos
import TextContext from '../context/TextosContext'
const BotonCargar = () => {

    const textContext = useContext(TextContext);
    const { paginaactual, totalpaginas, getText, ShowSpinner, loadingtext } = textContext;

    const [incrementarpaginaactual, guardarIncrementarPaginaActual] = useState(paginaactual);

    if(incrementarpaginaactual === totalpaginas) return null;

    const BotonCargarMas = () => {
        var Pagina = paginaactual;
        Pagina = Pagina+1;
        ShowSpinner(true);
        getText(Pagina);
    }

    const BotonCargarMenos = () => {
        var Pagina = paginaactual;
        Pagina = Pagina-1;
        ShowSpinner(true);
        getText(Pagina);
    }

    if(loadingtext) return null;

    return ( 
            <div className="col-md-12 text-center p-5">
             {(paginaactual === 1) ? null : (
                <button onClick={BotonCargarMenos} type="button" className="btn btn-primary btn-circle btn-md" title="Anterior"><i className="fas fa-arrow-circle-left"></i></button>)}
                {(paginaactual === totalpaginas) ? null : (
                <button onClick={BotonCargarMas} type="button" className="btn btn-primary btn-circle btn-md" title="Siguiente"><i className="fas fa-arrow-circle-right"></i></button> )}
            </div>
     );
}
 
export default BotonCargar;