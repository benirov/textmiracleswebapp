import React, { useEffect } from 'react';

import Header from './components/Header'
import Spinner from './components/Spinner'
import TextxList from './components/TextxList'
import ModalInformacion from './components/ModalInformacion'
import BotonCargar from './components/BotonCargarMas'

import TextoState from './context/TextoState'

function App() {

  useEffect(() => {

    if(localStorage.getItem('dark-mode') === 'true'){
        document.body.classList.toggle('dark');
    }
    // eslint-disable-next-line
  },[]);

  return (
    <TextoState>
        <Header />
        <Spinner />
        <section className="page-section portfolio" id="portfolio">
            <div className="content-wrapper">
                <TextxList />
            </div>
        </section>
        <ModalInformacion />
        <BotonCargar />
    </TextoState>
    
  );
}

export default App;
