const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
/*
    1.Stringify el objeto estudiantes con sólo las propiedades firstName, lastName y skills
*/
const text=JSON.stringify(
    student,["firstName","lastName","skills"],4
);
console.log(text);