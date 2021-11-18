const img = document.body.querySelector(".img_user")
const information = document.querySelector("#information-box")
const userData = {
  nome: "Ricardo",
  idade: "19 Anos",
  profissão: "Desenvolvedor",
  gmail: "ricardo.br.pi@gmail.com",
}

information.innerHTML += `<p>${userData.nome}</p>`
information.innerHTML += `<p>${userData.idade}</p>`
information.innerHTML += `<p>${userData.profissão}</p>`
information.innerHTML += `<p>${userData.gmail}</p>`

function displayInformation(){
  information.classList.toggle("informationBox--hide")
}

img.addEventListener("click", displayInformation)
