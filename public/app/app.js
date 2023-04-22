const btnAdd = document.getElementById('btn-add');
const hiddenMovilAdd = document.getElementById('generador-movil');



btnAdd.addEventListener('click',function(){
    hiddenMovilAdd.classList.toggle('hidden');
});