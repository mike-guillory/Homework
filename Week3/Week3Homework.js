const toppings = ["Italian Sausage", "Pineapple", "Green Peppers", "Black Olives"];

function listToppings(toppingsList){

  let lastItem = toppingsList.length -1;

  toppingsList[lastItem] = `and ${toppingsList[lastItem]}`;

  return(toppingsList);
}

function greetCustomer(toppingsList) {

  let topping;
  const ourToppings = [];

  // Creating a new list so that listToppings() doesn't change the Global toppings[]
  for(topping of toppingsList){
    ourToppings.push(topping);
  }
  listToppings(ourToppings);

  let greeting = "Welcome to Mike's Pizza. Our toppings are:";

  for (topping of ourToppings) {
     if(!(topping == ourToppings[ourToppings.length - 1])){
       greeting += ` ${topping},`;
     }
     else{
       greeting += ` ${topping}!`;
     }
  }
  console.log(greeting);
}

function getPizzaOrder(size, crust, ...toppingsList) {

  const orderArray = [size, crust];

  if (toppingsList.length !== 0) {

    let customerToppingsArray = [];
    let topping;
    const last = toppingsList.length - 1;
    listToppings(toppingsList);

    for (topping of toppingsList) {
      if(topping !== toppingsList[last]){
        customerToppingsArray += `${topping}, `;
      }
      else{
        customerToppingsArray += `${topping}`;
      }
    }

    orderArray.push(customerToppingsArray);

    console.log(`One ${size}, ${crust} crust pizza with ${customerToppingsArray} coming up!`);

  }
  else {
    console.log(`One ${size}, ${crust} crust cheese pizza coming up!`);
  }
  return orderArray;
}

function preparePizza(orderArray) {
  console.log("Cooking pizza...");
  //Creates an array while returning it
  return {
    size: orderArray[0],
    crust: orderArray[1],
    toppings: orderArray[2]
  };
}

function servePizza(pizza) {
  if (!pizza.toppings) {
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust} crust cheese pizza. Enjoy!`);
  }
  else {
    console.log(`Order up! Here's your ${pizza.size}, ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`);
  }
  return pizza;
}

greetCustomer(toppings);
// const orderArray = getPizzaOrder("large", "thin", "Italian Sausage", "Green Peppers", "Pineapple");
// const orderObject =  preparePizza(orderArray);
// servePizza(orderObject);
servePizza(preparePizza(getPizzaOrder("large", "thin", "Italian Sausage", "Green Peppers", "Pineapple")));
