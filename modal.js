const openModalBtn = document.querySelector(".button__add")
const formModal = document.querySelector(".modal__container")
const closeModal = document.querySelector(".modal__close")

openModalBtn.addEventListener("click",()=>{
    formModal.classList.remove("hidden")
})

const closeModalEvent = ()=>{
    formModal.classList.add("hidden")
}
closeModal.addEventListener("click",(event)=>{
    event.preventDefault();
    closeModalEvent();

})