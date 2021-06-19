import React,{ useContext, Fragment } from 'react';
import './Spinner.css'

//importamos en context de listados de textos
import TextContext from '../context/TextosContext'
const Spinner = () => {

    const textContext = useContext(TextContext);
    const { loadingtext } = textContext;
    return ( 
        <Fragment>
            {!loadingtext ? null : (<div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>)}
        </Fragment>
     );
}
 
export default Spinner;