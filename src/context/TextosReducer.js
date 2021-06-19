import { 
    GET_TEXTS,
    GET_TEXTDETAIL,
    LOADING_TEXTS,
    CLOSE_MODAL,
    ERROR_GET_TEXT,
    SET_INFO_PAGES
 } from '../types/index.js'

export default (state, action) => {
    switch (action.type) {
        case GET_TEXTS:
            return {
                ...state,
                texts:  action.payload,
                textDetail: null,
                loadingtext: false,
                openModalInfo: false,
            }

        case GET_TEXTDETAIL:
            return {
                ...state,
                textDetail: action.payload,
                openModalInfo: true,
                loadingtext: false,
            }

        case LOADING_TEXTS:
            return {
                ...state,
                loadingtext: action.payload
            }

        case CLOSE_MODAL:
            return {
                ...state,
                openModalInfo: action.payload,
                textDetail: null,
            }
        case ERROR_GET_TEXT:
            return {
                ...state,
                errorgettext: true,
                texts: [],
                textDetail: null,
                loadingtext: false,
            }
        case SET_INFO_PAGES:
            return {
                ...state,
                paginaactual: Number(action.payload.current),
                totalpaginas: Number(action.payload.pages)
            }
            
    
        default:
            return state;
    }
}