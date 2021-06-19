import React, {useContext} from 'react';

import { obtenerVistaPreviaTexto } from  '../helpers'

//importamos en context de listados de textos
import TextContext from '../context/TextosContext'

const Text = ({text}) => {

    const textContext = useContext(TextContext);
    const { getTextDetail } = textContext;
    return ( 
        <div className="news-card">
            <a href="#" className="news-card__card-link"></a><img src={text.image} alt={text.title} className="news-card__image" />
            <div className="news-card__text-wrapper">
                <h2 className="news-card__title">{text.title}</h2>
                <div className="row">
                    <div className="col-6 news-card__post-date text-left">{text.author}</div>
                    <div className="col-6 news-card__post-date text-right">{text.genero}</div>
                </div>
                <div className="news-card__details">
                    <p className="news-card__excerpt">{obtenerVistaPreviaTexto(text.texto)}</p>
                    <button className="news-card__read-more" href="!#" onClick={() => getTextDetail(text._id)}>Leer mas <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
     );
}
 
export default Text;