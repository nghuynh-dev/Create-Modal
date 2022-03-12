var btnOpen = document.querySelector('.open-modal-btn');
var btnClose = document.querySelector('.modal__footer button');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.model__header i');

function toggleModal(){
    // console.log(this)
    modal.classList.toggle('hide')
}

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
// modal.addEventListener('click', toggleModal);
modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
});