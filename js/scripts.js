function Pizza(toppings, size) {
    this.toppings = toppings
    this.size = size
    this.price = 0
}

Pizza.prototype.determinePrice = function() {
    let toppingPrice = this.toppings.length * 5
    this.price += toppingPrice
    if (size === "small") {
        return this.price
    } else if (size === "medium") {
        this.price *= 1.5
        return this.price
    } else if (size === "large") {
        this.price *= 2
        return this.price
    }
}

function handleSubmit() {
    let toppings = []
    const checked = document.querySelectorAll('input[type="checkbox"]:checked')
    toppings = Array.from(checked).map(topping => topping.value)
    const size = document.querySelector("#size").value
    const pizza = new Pizza(toppings,size)


}

function displayPizza(pizza) {
    let toppingList = document.querySelector
    pizza.toppings.forEach(topping => {
        text += " " + topping
    })
    document.querySelector(".pizza-type")


}


window.addEventListener("load", function() {
    const form = document.querySelector("#pizza-form")
    form.addEventListener("submit", handleSubmit)
})