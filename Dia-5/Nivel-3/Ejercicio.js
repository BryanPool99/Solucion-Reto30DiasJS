/*
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

- Ordene el array y encuentre la edad mínima y máxima
- Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
- Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
- Encuentre el rango de las edades (max menos min)
- Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
*/
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let arraySort=ages.sort((a,b)=>a-b);
console.log(arraySort);
const min=arraySort[0];
console.log("Edad minima:",min);
const max=arraySort[ages.length-1];
console.log("Edad maxima :",max);
const mIdx=parseInt(arraySort.length/2);
if(arraySort.length %2 ==0){
    console.log("Edad media es:",(arraySort[mIdx]+arraySort[mIdx+1])/2);
}
else{
    console.log("Edad media es:",(arraySort[mIdx]));
}
let sum=0;
for (let i = 0; i < arraySort.length; i++) {
    sum+=arraySort[i];
}
promedio=(sum/arraySort.length).toFixed(2);
console.log("La edad promedio es:",(promedio));
const range=max-min;
console.log("El rango de las edad es :",range);
console.log(Math.abs(min-promedio)==Math.abs(max-promedio));
