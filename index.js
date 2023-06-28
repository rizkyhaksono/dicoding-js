// cara baru ES6
import coffeeStock from "./state.js";

// cara lama
// const {coffeeStock} = require('./state');

// const makeCoffee = (type, miligram) => {
//     if (coffeeStock[type] >= miligram) {
//         console.log("Kopi berhasil dibuat");
//     } else {
//         console.log("Kopi gagal dibuat");
//     }
// }

// makeCoffee("robusta", 100);

const displayStock = stock => {
  for (const type in stock) {
    console.log(type);
  }
}
   

console.log(displayStock(coffeeStock));

console.log(coffeeStock.isMakeCoffee);
console.log(coffeeStock.coffeeStock);

const json = '{ bad json }';
 
try {
  const user = JSON.parse(json);
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}