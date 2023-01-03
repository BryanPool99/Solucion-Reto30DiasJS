/*
    1.Comprueba la diferencia de velocidad entre los siguientes bucles: while, for, for of, forEach
*/
let cont=0;
console.time("Uso del while");
while (cont<10) {
    //console.log(cont);
    cont++;
}
console.timeEnd("Uso del while");
console.time("Uso del for regular");
for (let i = 0; i < 10; i++) {
    //console.log(i);
}
console.timeEnd("Uso del for regular");
const arr=[0,1,2,3,4,5,6,7,8,9]
console.time("Uso del for of");
for (const i of arr) {
    //console.log(i);
}
console.timeEnd("Uso del for of");
console.time("Uso del for each ");
arr.forEach(element => {
    //console.log(element);
});
console.timeEnd("Uso del for each ");