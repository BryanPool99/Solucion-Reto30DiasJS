//Variables
let firstName = "Asabeneh";
let lastName = "Yetayeh";
let country = "Finland";
let city = "Helsinki";

const PI = Math.PI;
const gravity = 9.81;
// arrays
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
const languages = ["Amharic", "Arabic", "English", "French", "Spanish"];
const skills = ["HTML", "CSS", "JavaScript", "React", "Python"];
const fruits = ["banana", "orange", "mango", "lemon"];
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];
// función que devuelve el nombre completo de una persona
const printFullName = (firstName, lastName) => firstName + " " + lastName;

// función que calcula el cuadrado de un número
const square = (n) => n * n;

// una función que genera colores hexa al azar
const hexaColor = () => {
  const str = "0123456789abcdef";
  let hexa = "#";
  let index;
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length);
    hexa += str[index];
  }
  return hexa;
};

// una función que muestra la fecha y la hora
const showDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const dateMonthYear = date + "." + month + "." + year;
  const time = hours + ":" + minutes;
  const fullTime = dateMonthYear + " " + time;
  return fullTime;
};
//Bucles
for (let i = 0; i < 5; i++) {
    console.log();
  }
  
  // declaración de una variable array
  const namesArray = ["Asabeneh", "Mathias", "Elias", "Brook"];
  
  // iteración de un array mediante un bucle for regular
  let len = namesArray.length;
  for (let i = 0; i < len; i++) {
    console.log(namesArray[i].toUpperCase());
  }
  
  // iteración de un array mediante for of
  for (const name of namesArray) {
    console.log(name.toUpperCase());
  }
  
  // iteración de un array mediante forEach
  namesArray.forEach((name) => name.toUpperCase());
  //Objeto
  // declarando el objeto literal
  const person = {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
    age: 250,
    country: "Finland",
    city: "Helsinki",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node",
      "MongoDB",
      "Python",
      "D3.js",
    ],
    isMarried: true,
  };
  // iterar a través de las claves del objeto
  for (const key in person) {
    console.log(key);
  }
  //condicionales
// if else
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
} else {
  console.log(`${num} is a negative number`);
}
//  3 is a positive number
// if else if else if else

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}
// Switch Más Ejemplos
let dayUserInput = "monday";
let day = dayUserInput.toLowerCase();

switch (day) {
  case "monday":
    console.log("Today is Monday");
    break;
  case "tuesday":
    console.log("Today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("It is not a week day.");
}
// ternario

let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
//Clases
// definir la clase
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }