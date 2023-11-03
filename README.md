Describe Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should initialize a price property in the Pizza object"
Code: console.log(myPizza.price)
Expected Output: 5

Describe Pizza.determinePrice()

Test: "It should add to Pizza.price based on the amount of items in the toppings array with each item being amount 5"
Code: Pizza.price if toppings = \["pepperoni"\]
Expected Output: 5

Test: "It should return a multiplied result based on the sizing of the pizza"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza.price = 15

Describe pizzaSelection() 

Test: "It should store pizza objects within the selection object"
Code: const pizzas = new pizzaSelection()
Expected Output: pizzas.selection = {pizza}
