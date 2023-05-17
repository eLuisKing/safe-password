//Botones de los open/close modal
const btnAddMovil = document.getElementById('btn-add-movil');
const btnAddWeb = document.getElementById('btn-add-web');
const hiddenMovilAdd = document.getElementById('generador-movil');
const hiddenWebAdd = document.getElementById('modal-generador');


//Boton de open/close generador en movil
btnAddMovil.addEventListener('click',function(){
    hiddenMovilAdd.classList.toggle('hidden');
});

//Boton de open/close generador en web modal
btnAddWeb.addEventListener('click', function(){
    hiddenWebAdd.classList.toggle('hidden');
});

//Aqui ocultamos el modal si la pantalla es menor a 800px(Movil)
window.addEventListener('resize',function(){
    if(innerWidth<800){
        hiddenWebAdd.classList.add('hidden');
    };
});