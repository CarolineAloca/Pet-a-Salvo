console.log("ACHOOUUUU")

let btnDark = document.getElementById('btnDark')

btnDark.addEventListener('click', function (el) {

  let darkMode = document.querySelector('header').style.backgroundColor = "#9370DB"
  let corpo1 = document.querySelector('.beneficios').style.backgroundColor = "rgb(41,41,41)"
  let corpo2 = document.querySelector('.mapa').style.background = "linear-gradient(rgb(41,41,41), rgb(41,41,41))"
  let corpo3 = document.querySelector('.principal	').style.backgroundColor = "rgb(41,41,41)"
  let corpo4 = document.querySelector('main').style.backgroundColor = "rgb(41,41,41)"
  let corpo5 = document.querySelector('footer').style.backgroundColor = "#9370DB"


  let textos = document.querySelector('body').style.color = "white"
  let textos2 = document.querySelectorAll('a').forEach(el => { el.style.color = "white" })

})