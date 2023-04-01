const pizzaPlace = "Mike's Pizza";
let numberOfToppings = 15;

console.log(pizzaPlace);
console.log(typeof pizzaPlace);
console.log(numberOfToppings);
console.log(typeof numberOfToppings);
console.log(`${pizzaPlace} offers ${numberOfToppings} toppings.`)

if(numberOfToppings < 10){
    console.log("Quality, not quantity.");
}
else if(numberOfToppings > 10){
    console.log("A whole lot of pizza.");
}

for(let i = 1; i <= numberOfToppings; ++i){
    if(i % 2 == 0){
    	console.log(i);
    };
}
