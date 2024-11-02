document.addEventListener('DOMContentLoaded', ()=>{
    const opcionesToggle = document.getElementById('opcionesToggle');
    const opcionesLista = document.getElementById('opcionesLista');
    
    opcionesToggle.addEventListener('click', ()=>{
        opcionesLista.classList.remove('d-none');
        opcionesLista.classList.add('d-block');
    })
    })
    