Describe Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should initialize a price property in the Pizza object"
Code: console.log(myPizza.price)
Expected Output: 5

Describe Pizza.determinePrice()

Test: "It should add to Pizza.price based on the amount of items in the toppings array"
Code: Pizza.price if toppings = \["pepperoni"\]
Expected Output: 5