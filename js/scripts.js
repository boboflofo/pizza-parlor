function Pizza(toppings, size) {
    this.toppings = toppings
    this.size = size
    this.price = 0
}

Pizza.prototype.determinePrice = function() {
    let toppingPrice = this.toppings.length * 5
    this.price += toppingPrice
    let sizePricing = toppingPrice 
}