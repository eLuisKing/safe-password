//Botones de los open/close modal
const btnAddMovil = document.getElementById('btn-add-movil');
const btnAddWeb = document.getElementById('btn-add-web');
const btnCancelModal = document.getElementById('cancelar-modal')
const hiddenMovilAdd = document.getElementById('generador-movil');
const hiddenWebAdd = document.getElementById('modal-generador');

//Botones generadores
const btnGenMovil = document.querySelector('#gen-pass-movil');
const btnGenWeb = document.querySelector('#gen-pass-web');
const btnDoneMovil = document.querySelector('#done-movil');
const btnDoneWeb = document.querySelector('#done-modal');

//Inputs
const inputNameMovil = document.querySelector('#name-movil');
const inputMailMovil = document.querySelector('#mail-movil');
const inputPassMovil = document.querySelector('#pass-movil');
const inputNameWeb = document.querySelector('#name-web');
const inputMailWeb = document.querySelector('#mail-web');
const inputPassWeb = document.querySelector('#pass-web');


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

//Creamos el arrelo y traemos la info actual
let data = [];
data = JSON.parse(localStorage.getItem('todo'));

//Funciones generadores
btnGenMovil.addEventListener('click',function(){
    //Insertamos los datos al arreglo
    if(inputPassMovil.value == ""){
        inputPassMovil.value = genPass();
        data.push({
            nombre: inputNameMovil.value,
            mail: inputMailMovil.value,
            password: inputPassMovil.value
        })

        //Insertamos al localstorage
        localStorage.setItem('todo',JSON.stringify(data));

        btnGenMovil.classList.toggle('hidden');
        btnDoneMovil.classList.toggle('hidden');
        btnDoneMovil.addEventListener('click',doneGenMovil);

    }
})


function doneGenMovil(){
    btnDoneMovil.classList.toggle('hidden');
    btnGenMovil.classList.remove('hidden');
    inputNameMovil.value = "";
    inputMailMovil.value = "";
    inputPassMovil.value = "";
}


btnGenWeb.addEventListener('click',function(){
    //Insertamos los datos al arreglo
    if(inputPassWeb.value == ""){
        inputPassWeb.value = genPass();
        data.push({
            nombre: inputNameWeb.value,
            mail: inputMailWeb.value,
            password: inputPassWeb.value
        })

        //Insertamos al localstWeb
        localStorage.setItem('todo',JSON.stringify(data));

        btnGenWeb.classList.toggle('hidden');
        btnDoneWeb.classList.toggle('hidden');
        btnCancelModal.classList.toggle('hidden');
        btnDoneWeb.addEventListener('click',doneGenWeb);

    }
})

function doneGenWeb(){
    btnGenWeb.classList.toggle('hidden');
    btnDoneWeb.classList.toggle('hidden');
    btnCancelModal.classList.toggle('hidden');
    inputNameWeb.value = "";
    inputMailWeb.value = "";
    inputPassWeb.value= "";
}



console.log(data);