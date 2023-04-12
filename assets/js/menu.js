document.querySelector(".hamburguer").addEventListener("click",mostrar_menu)

function mostrar_menu(){
    console.log("mostrar menu")
    document.querySelector(".menu").classList.toggle("show-menu")
}