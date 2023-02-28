const container = document.querySelector(".container")
const btnregistrarse=document.getElementById("sign-up-btn")
const btninciarsesion=document.getElementById("sign-in-btn")
btnregistrarse.addEventListener("click" , ()=>{ 
    container.classList.add("sign-up-mode")})
btninciarsesion.addEventListener("click",()=>{
    container.classList.remove("sign-up-mode")})