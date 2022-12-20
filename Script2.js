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