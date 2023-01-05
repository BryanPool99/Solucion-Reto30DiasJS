const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};

/*
    1.Cambiar el array de habilidades a JSON usando JSON.stringify()
*/
const text=JSON.stringify(skills);
console.log(text);
/*
    2.Stringify la variable de la edad
*/
const textAge=JSON.stringify(age);
console.log(textAge);
/*
    3.Stringify la variable isMarried
*/
const textIsMarried=JSON.stringify(isMarried);
console.log(textIsMarried);
/*
    4.Stringify el objeto estudiante
*/
const textObjStudent=JSON.stringify(student,'',4);
console.log(textObjStudent);