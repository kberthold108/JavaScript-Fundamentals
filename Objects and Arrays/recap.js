// Variable declaration

let x = 4 // good
x = 3 // bad
const xd = 2 // good 
var g = 4 //bad

// Data structures
const arr = [];
const map = {};
const set = new Set();
const str = "";
console.log(str);
// Array

const arr1 = [2, 3, 6, 10, 4, 5, 7];

for(let x of arr1); // for each loop

for(let x = 0; x < 4; x++); // for loop



// Array functions
// filter - filter(value, Index,) 
const filtered = arr1.filter((val) => val %2 === 0);
console.log(filtered);


// sort - Sort string array descending and ascending (2 examples)
const sorted = arr1.sort(function(a, b) {return a - b})
console.log(sorted)
sorted2 = arr1.sort((a, b) => b - a)
console.log(sorted)


// slice - What is slice doing (give examples)
const sliced = arr1.slice(3, 5)
console.log(sliced)
const sliced2 = arr1.slice(1, 4)
console.log(sliced2)

// splice - What is splice doing (give examples)
const spliced = arr1.splice(0, 5)
console.log(spliced)
console.log(arr1)


// map - [{age: 23, name: Andrey}, {age: 18, name: Kenneth}, {age: 43, name: Test}] - [23, 18, 43], [Andrey, Kenneth, Test], age < 40 [23, 18]
let map1 = [{age: 23, name: "Andrey"}, {age: 18, name: "Kenneth"}, {age: 43, name: "Test"}]

let mapAge2 = []

let mapAge = map1.map(val => {
    return {legalAge: val.age, nameAndAge: `${val.age}${val.name}`}
})
let mapName = map1.map(val => val.name)
const ageLessThan40 = map1.map(val => {
    if (val.age < 40) {
        return val.age;
    }
})
console.log(mapAge)
console.log(mapName)
console.log(ageLessThan40)


// forEach - What is forEach doing (example)
let testArr = []
arr1.forEach(val => console.log(val))
arr1.filter(val => val > 5).forEach(val => console.log(val))


// reduce - What is reduce doing?
testArray = [0, 1, 2, 3, 4]
const test2 = testArray.reduce((acc, curr) => acc + curr, 0);
console.log(test2)

let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

// To have an object with grouped people by age
const groupedBy = people.reduce((acc, cur) => {
    // Check if the age exists on the accumulator
    const { age } = cur;

    if (!acc[age]) {
        acc[age] = [];
    }

    acc[age].push(cur);
    // If doesnt exist - create the key (age), initialize an array and push the object to the array
    // If it exists - get the age, push the object to the array

    return acc;
}, {});

console.log(groupedBy);

/* {
    20: [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 }]
    21: [{ name: 'Alice', age: 21 }],
} 
*/
// pop - 
// shift - 
// indexOf -


// console.log(arr1.pop())
// console.log(arr1.shift())
// console.log(arr1.includes(6))