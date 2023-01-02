/*
    1.crear un set vacío
*/
const miSet=new Set();
console.log(miSet);
/*
    2.Crear un set que contenga de 0 a 10 utilizando el bucle
*/
for (let i = 0; i <=10; i++) {
    miSet.add(i)
}
console.log(miSet);
/*
    3.Eliminar un elemento de set
*/
miSet.delete(5);
console.log(miSet);
/*
    4.Limpia set
*/
miSet.clear();
console.log(miSet);
/*
    5.Crear un set de 5 elementos string a partir de un array
*/
const arr=["Hola","mundo","Esto","son","Set"];
const miSetStrings=new Set();
for (const i of arr) {
    miSetStrings.add(i);
}
console.log(miSetStrings.size);
console.log(miSetStrings);
/*
    6.Crear un map de países y el número de caracteres de un país
*/
const arrCountries=[["Peru","Lima"],["Chile","Santiago"],["Colombia","Bogota"],["Argentina","Buenos Aires"],["Ecuador","Quito"]];
const miMapOfCountries=new Map(arrCountries);
console.log(miMapOfCountries);
const newMap=new Map();
for (const [country,capital] of arrCountries) {
    newMap.set(country,country.length);
}
console.log(newMap);