"use strict";

// Primitive Values Example pointe vers l'adresse et non la valeur
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

// Reference Values Example pointe vers l'adresse qui pointe elle meme vers l'adresse dans le "Heap" qui pointe vers la valeur du tableau
const me = {
    name: "John",
    age: 30,
};
const friend = me;
friend.age = 27;
console.log("friend:", friend);
console.log("me:", me);

// Try

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);

const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before Marriage:", jessica);
console.log("After Marriage:", marriedJessica);

// marriedJessica = {} DOESN'T WORK

// Copying Object with "Object.assign({}, objet a copier)"

const jessica2 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before Marriage:", jessica2);
console.log("After Marriage:", jessicaCopy);