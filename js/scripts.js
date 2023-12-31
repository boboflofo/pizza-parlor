
function Pizza(toppings, size) {
    this.toppings = toppings
    this.size = size
    this.price = 0
}

Pizza.prototype.determinePrice = function () {
    let toppingPrice = this.toppings.length * 5
    this.price += toppingPrice
    if (this.size === "small") {
        return this.price
    } else if (this.size === "medium") {
        this.price *= 1.5
        return this.price
    } else if (this.size === "large") {
        this.price *= 2
        return this.price
    }
}



function handleSubmit(e) {
    e.preventDefault()

    let toppings = []
    const checked = document.querySelectorAll('input[type="checkbox"]:checked')
    toppings = Array.from(checked).map(topping => topping.value)
    const size = document.getElementById("size").value
    const pizza = new Pizza(toppings, size)
    displayPizza(pizza)


}

function displayPizza(pizza) {
    const pizzaDisplay = document.querySelector(".pizza-display")
    const pizzaTitle = document.createElement("h3")
    pizzaTitle.append("Pizza")
    pizzaDisplay.append(pizzaTitle)
    const toppingsTitle = document.createElement("h4")
    toppingsTitle.append("Toppings:")
    pizzaDisplay.append(toppingsTitle)
    const toppingList = document.createElement('ul')
    pizza.toppings.forEach(topping => {
        let listItem = document.createElement("li")
        listItem.append(topping)
        toppingList.append(listItem)
    })
    pizzaDisplay.append(toppingList)
    const priceTitle = document.createElement("h3")
    let price = pizza.determinePrice()
    priceTitle.append("Cost of Pizza: $" + price)
    pizzaDisplay.append(priceTitle)


}


window.addEventListener("load", function () {
    const form = document.querySelector("#pizza-form")
    form.addEventListener("submit", handleSubmit)
})