var filterButtons = document.querySelectorAll(".filter_buttons button")
var filterablecards = document.querySelectorAll(".filterable_cards .card")
var filtercards = e => {
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")
    filterablecards.forEach(card => {
        card.classList.add("hide")
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide")
        }
    })
}
filterButtons.forEach(button => button.addEventListener("click", filtercards))




