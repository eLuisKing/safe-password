const btnAdd = document.getElementById('btn-add-movil');
const hiddenMovilAdd = document.getElementById('generador-movil');



btnAdd.addEventListener('click',function(){
    hiddenMovilAdd.classList.toggle('hidden');
});