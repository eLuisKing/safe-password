//Botones de los open/close modal
const btnAddMovil = document.getElementById('btn-add-movil');
const btnAddWeb = document.getElementById('btn-add-web');
const btnCancelModal = document.getElementById('cancelar-modal')
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

//Close on modal
btnCancelModal.addEventListener('click',function(){
    hiddenWebAdd.classList.toggle('hidden');

    //Logica boton
    if(btnAddWeb.innerText == 'Nueva'){
        btnAddWeb.classList.remove('bg-secund');
        btnAddWeb.classList.add('bg-red-600');
        btnAddWeb.innerText = 'Cancelar';
    }else{
        btnAddWeb.classList.add('bg-secund');
        btnAddWeb.classList.remove('bg-red-600');
        btnAddWeb.innerText = 'Nueva';
    }
    
})

//Etados de botones open/close and cancelar
btnAddMovil.addEventListener('click',function(){
    if(btnAddMovil.innerText == 'Nueva'){
        btnAddMovil.classList.remove('bg-secund');
        btnAddMovil.classList.add('bg-red-600');
        btnAddMovil.innerText = 'Cancelar';
    }else{
        btnAddMovil.classList.add('bg-secund');
        btnAddMovil.classList.remove('bg-red-600');
        btnAddMovil.innerText = 'Nueva';
    }
});

btnAddWeb.addEventListener('click',function(){
    if(btnAddWeb.innerText == 'Nueva'){
        btnAddWeb.classList.remove('bg-secund');
        btnAddWeb.classList.add('bg-red-600');
        btnAddWeb.innerText = 'Cancelar';
    }else{
        btnAddWeb.classList.add('bg-secund');
        btnAddWeb.classList.remove('bg-red-600');
        btnAddWeb.innerText = 'Nueva';
    }
});

