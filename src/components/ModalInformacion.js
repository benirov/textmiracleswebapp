import React, { useContext, Fragment, useEffect } from 'react';
import Modal from 'react-modal';

import { setBackgroudModal } from  '../helpers'

//importamos en context de listados de textos
import TextContext from '../context/TextosContext'

const ModalInformacion = () => {


    const textContext = useContext(TextContext);
    const { textDetail, openModalInfo, closeModal } = textContext;

    useEffect(() => {
        console.log('textDetail', textDetail);
        if(textDetail){
            setTimeout(() => {
                setBackgroudModal(textDetail.image);
                document.querySelector(".ModalDetalleInfo").focus();
            },100)
        }
        

    },[textDetail])

    

    return (
        <Fragment>
        { !textDetail ? null : (
            <Modal
                isOpen={openModalInfo}
                ariaHideApp={false}
                contentLabel="Example Modal"
                onRequestClose={() => {closeModal(false)}}
                className={
                        ""
                        }
        >
        <div className="imagenModal scrollbar ModalDetalleInfo">
            <div className="col-12 text-right">
                <p className="closemodalp" title="Close" onClick={() => {closeModal(false)}}>x</p>
            </div>
            <div><h2 className="news-card__title titleModal">{textDetail.title}</h2></div>
            <div><small className="infoModal">{`${textDetail.author} | ${textDetail.genero}`}</small></div>
            <br/>
            <div className="textoModal poema">{textDetail.texto}</div>
            <div className="col-12 text-right">
                <button  className="CLoseButton" title="Close" onClick={() => {closeModal(false)}}>Cerrar</button>
            </div>
        </div>
        </Modal>)

        }
        </Fragment>);
}
 
export default ModalInformacion;