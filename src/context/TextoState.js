import React, { useReducer } from 'react';
import TareaContext from './TextosContext'
import TareaReducer from './TextosReducer'

//importamos los types a usar
import { 
    GET_TEXTS,
    LOADING_TEXTS,
    GET_TEXTDETAIL,
    CLOSE_MODAL,
    ERROR_GET_TEXT,
    SET_INFO_PAGES
 } from '../types/index.js'

import clienteAxios from '../api/axios'

const TextoState = props => {

    //definimos el state snicial
    const initialState = {
        texts : [],
        textDetail : null,
        paginaactual : 1,
        totalpaginas : null,
        errortexts: false,
        loadingtext: false,
        openModalInfo: false,
        errorgettext: false
    }

    //crear dispatch y state y pasarselo al reducer
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //emepzamos a definir las series de funciones que dispararan el state

    //obtener los textos
    const getText = async paginaactual => {

        // ShowSpinner(true);
        try {
            const resultado = await clienteAxios.get(`/api/textviews/${paginaactual}`);
            // console.log('resultado', resultado.data.textview);
            dispatch({
                type: GET_TEXTS,
                payload: resultado.data.textview
            });
            dispatch({
                type: SET_INFO_PAGES,
                payload: resultado.data
            });
        } catch (error) {
            // ShowSpinner(false);
            dispatch({
                type: ERROR_GET_TEXT,
            });
        }


    }

     //obtener detalle de  textos
     const getTextDetail = async id => {

        try {
            const resultado = await clienteAxios.get(`/api/textview/getbyid/${id}`);
            
            dispatch({
                type: GET_TEXTDETAIL,
                payload: resultado.data.textview
            });
        } catch (error) {
            // ShowSpinner(false);
        }


    }

    //mostrar spinner
    const ShowSpinner = value => {
        dispatch({
            type: LOADING_TEXTS,
            payload: value
        })
    }

    //cerrar modal
    const closeModal = value => {
        dispatch({
            type: CLOSE_MODAL,
            payload: value
        })
    }

    //cerrar modal
    const setError = value => {
        dispatch({
            type: ERROR_GET_TEXT,
        })
    }
    return (
        <TareaContext.Provider
            value={{
                texts : state.texts,
                paginaactual : state.paginaactual,
                totalpaginas : state.totalpaginas,
                textDetail: state.textDetail,
                errortexts : state.errortexts,
                loadingtext: state.loadingtext,
                openModalInfo: state.openModalInfo,
                errorgettext: state.errorgettext,
                getText,
                ShowSpinner,
                getTextDetail,
                closeModal,
                setError
            }}
        >
        {props.children}
        </TareaContext.Provider>
    )
}

export default TextoState;

