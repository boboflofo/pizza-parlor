# Pizza Parlor

#### By Jonathan Song

#### Website to output pizza combinations and prices based on selection

## Technologies Used

* HTML
* CSS
* JavaScript
* VScode

## Description
Website designed to ask the user for input of select toppings and size. Based on both the toppings and size, the total price of each pizza is displayed, utilizing object properties and prototypes.


## Setup/Installation Requirements

* Navigate to the repository of the named project through this [link](https://github.com/boboflofo/Roboger.git)
* On the top right of the screen, navigate to the **fork** button and fork the repository
* Open a code editor such as VScode and in the terminal git clone the project for editing capabilities
* Personalize and edit directly in your code editor!



## Known Bugs
n/a

## Tests

**Describe Pizza()**

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should initialize a price property in the Pizza object"
Code: console.log(myPizza.price)
Expected Output: 5

**Describe Pizza.determinePrice()**

Test: "It should add to Pizza.price based on the amount of items in the toppings array with each item being amount 5"
Code: Pizza.price if toppings = \["pepperoni"\]
Expected Output: 5

Test: "It should return a multiplied result based on the sizing of the pizza"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza.price = 15

## License
MIT License

Copyright (c) [2023] [Jonathan Song]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Contact jonathan91790@yahoo.com for additional issues


Copyright (c) _11/3/2023_ _Jonathan Song(s)_
