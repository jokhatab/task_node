// task 1
// 1
const person ={
    fname : "ahmed",
    lname : "hossam",
    age: 20,
    city:"alex"
}
console.log(person)
console.log(" ")

// 2
const personjson =JSON.stringify(person)
console.log(personjson)
console.log(" ")

// 3
const fs =require ("fs")
const X = fs.writeFileSync("personstorge.json" , personjson)
console.log(" ")
// 4
const x =fs.readFileSync("personstorge.json")
// 5
const personobj =JSON.parse(personjson)
console.log(personobj)
console.log(" ")
// 6
person.fname = "adel ahmed";
person.age = 40;
person.city = "cairo";
console.log(" ")

// 7
var personJSON = JSON.stringify(person);
console.log(" ")
// 8
fs.writeFileSync("person.json", personJSON);

// // task 2
// //  1
// const persons = [
//     { id: 1, fname: "John", lname: "Doe", age: 25, city: "New York" ,},
//     { id: 2, fname: "Jane", lname: "Smith", age: 30, city: "London" ,},
//     { id: 3, fname: "Tom", lname: "Wilson", age: 35, city: "Paris" ,},
//     { id: 4, fname: "Emily", lname: "Johnson", age: 40, city: "Berlin" ,},
//     { id: 5, fname: "Michael", lname: "Brown", age: 45, city: "Tokyo" ,},
//     { id: 6, fname: "Sophia", lname: "Davis", age: 50, city: "Sydney" ,},
//     { id: 7, fname: "Oliver", lname: "Taylor", age: 55, city: "Toronto" }
//   ];
//   console.log(persons)
//   console.log(" ")
// //   2
//   const filteredPersons = persons.filter(person => person.id !== 4 && person.id !== 6);
//   console.log(filteredPersons)
//   console.log(" ")
// //  3
// const personInfoList = persons.map(person => "${person.fname} ${person.lname} - ${person.city}");

// //  4
// var person = persons[4];
// console.log(person.id + " " + person.fname + " " + person.lname + " " + person.age + " " + person.city);
