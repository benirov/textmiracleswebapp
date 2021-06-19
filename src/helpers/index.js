export const obtenerVistaPreviaTexto = (texto) => {
    if(texto){
        return texto.substr(0, 110)+"..."
    }
    
}

export const SwitchDarkMode = (e) =>{
    const btnSwitch = document.querySelector('#switch');
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');

        // Guardamos el modo en localstorage.
        if(document.body.classList.contains('dark')){
            localStorage.setItem('dark-mode', 'true');
        } else {
            localStorage.setItem('dark-mode', 'false');
        }
}

export const setBackgroudModal = image =>{

    // if(document.querySelector(".imagenModal")){
        console.log(image,'image');
        document.querySelector(".ReactModal__Content--after-open").style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('"+image+"')";
    // }

}