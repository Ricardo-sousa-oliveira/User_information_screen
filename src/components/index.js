const img = document.body.querySelector(".img_user")
const information = document.querySelector(".information_box")
const userData = {
  nome: "Ricardo",
  iade: 20,
}

function information_user(){
  information.classList.add("translate")
}

img.addEventListener("click", information_user)