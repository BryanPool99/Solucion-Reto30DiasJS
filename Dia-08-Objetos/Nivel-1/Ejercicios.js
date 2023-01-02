/*
    1.Crear un objeto vacío llamado dog
*/
let dog={};
/*
    2.Imprime el objeto dog en la consola
*/
console.log(dog);
/*
    3.Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof
*/
dog={
    name:"Logan",
    legs:4,
    color:"black",
    age:2,
    bark:function (){ return "woof woof";}
};
/*
    4.Obtener name, legs, color, age y el valor de bark del objeto dog
*/
console.log(dog.name);
console.log(dog.legs);
console.log(dog.age);
console.log(dog.bark());
/*
    5.Establecer nuevas propiedades al objeto dog: breed, getDogInfo
*/
dog.breed="unique";
dog.getDogInfo="crazy dog";
console.log(dog);