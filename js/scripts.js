// ESQUERDA DIREITA SEGUE
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