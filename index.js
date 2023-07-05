// cara baru ES6
// import coffeeStock from "./state.js";

// import { promisify } from "util";

// import gradeCalculations from "./gradeCalculations.js";

// cara lama
const {coffeeStock} = require('./state');

const { promisify } = require('util');

const {gradeCalculations} = require('./gradeCalculations');

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

// promise function
// function getUsers(isOffline) {
//   // return a promise object
//   return new Promise((resolve, reject) => {

//     // simulate network delay
//     setTimeout(() => {
//       const users = ['John', 'Jack', 'Abigail'];
    
//       if (isOffline) {
//         reject(new Error('cannot retrieve users due offline'));
//         return;
//       }

//       resolve(users);
//     }, 3000);
//   });
// }

// getUsers(false)
//   .then(users => console.log(users))
//   .catch(err => console.log(err.message));
 
// promify from node.js
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ['John', 'Jack', 'Abigail'];
     if (isOffline) {
      callback(new Error('cannot retrieve users due offline'), null);
      return;
    }
 
    callback(null, users);
  }, 3000);
}
 
// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then(users => console.log(users))
  .catch(err => console.log(err.message));
 
getUsersPromise(true)
  .then(users => console.log(users))
  .catch(err => console.log(err.message)); 

test('it should return exact average', () => {
    const listValueOfExams = [80, 100, 100, 80];
    expect(gradeCalculations.averageExams(listValueOfExams)).toEqual(90);
})

test('it should handle non-number ', () => {
  const listValueOfExams = [80, 'a', '100', 80];
  expect(() => averageExams(listValueOfExams)).toThrow();
})