document.addEventListener("click", (e) => {
    const carousel = document.querySelector(".__carousel-indicators")

    if (
        !(e.target instanceof HTMLElement) ||
        !carousel?.contains(e.target) ||
        !(e.target instanceof HTMLButtonElement)
    )
        return

    const currentActive = carousel.querySelector(".active")
    if (currentActive) {
        currentActive.classList.remove("active")
        currentActive.removeAttribute("aria-current")
    }

    e.target.classList.add("active")
    e.target.setAttribute("aria-current", "true")
})
