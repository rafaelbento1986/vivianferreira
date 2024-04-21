// BOTÃO VER MAIS e VER MENOS

function vermais(){
    let pontos=document.getElementById("pontos");
    let maisTexto=document.getElementById("mais");
    let btnVermais=document.getElementById("btnVerMais");


    if(pontos.style.display === "none"){
      pontos.style.display="inline";
      maisTexto.style.display="none";
      btnVermais.innerHTML="Ver mais";


    }else{
      pontos.style.display="none";
      maisTexto.style.display="inline";
      btnVermais.innerHTML="Ver menos";
    }
}

// ESQUERDA DIREITA

let myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

let elements = document.querySelectorAll('.leftsegue')

elements.forEach((element) => myObserver.observe(element))

// DARK MODE

const changeThemeBtn = document.querySelector("#change-theme");

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark mode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Save or remove dark mode from localStorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
