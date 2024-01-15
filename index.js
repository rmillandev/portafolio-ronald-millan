const btnNav = document.querySelector(".hamburger"),    
      menu = document.querySelector(".menu__items"),
      sections = document.querySelectorAll("section"),
      li = document.querySelectorAll("li")

// Funciones
const section = (id) => {
    const section = document.getElementById(id)
    const offset = 130
    const topPosition = section.offsetTop - offset
    window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
    })
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            li.forEach(link => {
                link.classList.remove("active")
                if(entry.target.id === link.dataset.nav){
                    link.classList.add("active")
                }
            })

        }
    })
}, {  rootMargin: "-40% 0px -40% 0px" })

sections.forEach((e) => observer.observe(e))

// Eventos
li.forEach((e) => e.addEventListener("click", () =>  {
    menu.classList.remove("is-active")
    btnNav.classList.toggle("is-active")
}))


btnNav.addEventListener("click", () => {
    btnNav.classList.toggle("is-active")
    menu.classList.toggle("is-active")
})


document.addEventListener("click", (e) => {
    const target = e.target
    
    if(target.matches("#sobre-mi-item")) section("sobre-mi")

    if(target.matches("#skills-item")) section("skills")

    if(target.matches("#formacion-item")) section("formacion")

    if(target.matches("#proyectos-item")) section("proyectos")

    if(target.matches(".btn-cerrar")) response.classList.remove("active")
})