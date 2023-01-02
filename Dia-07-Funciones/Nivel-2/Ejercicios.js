/*
    1.La ecuación lineal se calcula de la siguiente manera: ax + by + c = 0. Escribe una función que calcule el valor de una ecuación lineal, solveLinEquation.
*/
function solveLinEquation(a,c) {
    //Para euacion lineal el valor de y es 0
    const x=-c/a;
    return x;
}
console.log(solveLinEquation(2,-8));
/*
    2.La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.

    console.log(solveQuadratic()); // {0}
    console.log(solveQuadratic(1, 4, 4)); // {-2}
    console.log(solveQuadratic(1, -1, -2)); // {2, -1}
    console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
    console.log(solveQuadratic(1, 0, -4)); //{2, -2}
    console.log(solveQuadratic(1, -1, 0)); //{1, 0}
*/
function solveQuadEquation(a,b,c) {
    if (arguments.length==0) {
        return 0;
    }else{
        const det=Math.pow(b,2)-(4*a*c);
        const x1=((-b+Math.sqrt(det))/(2*a)).toFixed(2);
        const x2=((-b-Math.sqrt(det))/(2*a)).toFixed(2);
        if(det==0){
            return "{"+x1+"}";
        }else if(det<0){
            return ("La ecuacion tiene soluciones imaginarias(i)");
        }else{
            return "{"+x1+","+x2+"}";
        }
    }
}
console.log(solveQuadEquation());
console.log(solveQuadEquation(1,7,12));
/*
    3.Declare una función llamada printArray. Toma un array como parámetro e imprime cada valor del array.
*/
function printArray(array) {
    for (const i of array) {
        console.log(i);
    }
}
const miArray=["hola",2,false];
printArray(miArray);
/*
    4.Declare una función llamada showDateTime que muestre la hora en este formato: 01/08/2020 04:08 usando el objeto Date.

    showDateTime()
    08/01/2020 04:08
*/
function showDateTime() {
    const now=new Date();
    const day=now.getDate();
    const month=now.getMonth()+1;
    const year=now.getFullYear();
    const hours=now.getHours();
    const minutes=now.getMinutes();
    console.log(`${month}/${day}/${year} ${hours}:${minutes}`);
}
showDateTime();
/*
    5.Declare una función llamada swapValues. Esta función intercambia el valor de x a y.

    swapValues(3, 4); // x => 4, y=>3
    swapValues(4, 5); // x = 5, y = 4
*/
function swapValues(x,y) {
    const valX=y,valY=x;
    return `x => ${valX}, y => ${valY}`;
}
console.log(swapValues(3, 4));
console.log(swapValues(4, 5));
/*
    6.Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).

    console.log(reverseArray([1, 2, 3, 4, 5]));//[5, 4, 3, 2, 1]
    console.log(reverseArray(["A", "B", "C"]));//['C', 'B', 'A']
*/
function reverseArray(arr) {
    const arrReverse=[];
    for (let i = arr.length-1; i >=0; i--) {
        arrReverse.push(arr[i]);
    }
    return arrReverse;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray(["A", "B", "C"]));
/*
    7.Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.
*/
function capitalizeArray(arr) {
    const newA=[];
    for (const item of arr) {
        if(typeof(item)!=="string"){
            break;
        }
        let cap=item.charAt(0).toUpperCase() + item.slice(1);
        newA.push(cap);
    }
    return newA;
}
console.log(capitalizeArray(["alianza","lima",false]));
/*
    8.Declare una función llamada addItem. Toma un elemento de paŕametro y retorna un array después de agregar el un elemento.
*/
const newArray=[];
function addItem(item) {
    newArray.push(item);
    return newArray;
}
console.log(addItem(1));
console.log(addItem(2));
console.log(addItem("hola"));
console.log(addItem(false));
/*
    9.Declare una función llamada removeItem. Toma como parámetro un index y retorna un array después de eleminar el elemento con ese index.
*/
const numbers = [1, 2, 3, 4, 5];
function removeItem(idx,arr) {
    if (idx<arr.length) {
        arr.splice(idx,1);
    } else {
        console.log("index no valido");
    }
    return arr;
}
console.log(removeItem(1,numbers));
/*
    10.Declare una función llamada sumOfNumbers. Toma un número como parámetro y suma todos los números en ese rango.
*/
function sumOfNumbers(num) {
    let sum=0
    for (let i = 0; i <=num; i++) {
        sum+=i;
    }
    return sum;
}
console.log(sumOfNumbers(10));
/*
    11.Declare una función llamada sumOfOdds. Toma un parámetro numérico y suma todos los números impares en ese rango.
*/
function sumOfOdds(num) {
    let sumI=0
    for (let i = 1; i <=num; i+=2) {
        sumI+=i;
    }
    return sumI;
}
console.log(sumOfOdds(8));
/*
    12.Declare una función llamada sumOfEven. Toma un parámetro numérico y suma todos los números pares en ese rango.
*/
function sumOfEven(num) {
    let sumP=0
    for (let i = 0; i <=num; i+=2) {
        sumP+=i;
    }
    return sumP;
}
console.log(sumOfEven(8));
/*
    13.Declare una función llamada evensAndOdds . Toma un entero positivo como parámetro y cuenta el número de pares e impares.

    evensAndOdds(100);
    El número de impares son 50.
    El número de pares es 51.
*/
function evensAndOdds (n) {
    let contI=0,contP=0;
    for (let i = 0; i <=n; i++) {
        if(i%2==0) contP++;
        else contI++;
    }
    return `El número de impares son ${contI}.\nEl número de pares es ${contP}.`
}
console.log(evensAndOdds(100));
/*
    14.Escriba una función que tome cualquier número de argumentos y retorne la suma de los argumentos

    sum(1, 2, 3); // -> 6
    sum(1, 2, 3, 4); // -> 10
*/
function sum() {
    let sum=0;
    for (let i = 0; i < arguments.length; i++) {
        sum+=arguments[i];
    }
    return `-> ${sum}`;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
/*
    15.Escriba una función randomUserIp que genere una ip de usuario aleatoria.
*/
function randomUserIp() {
    let rnd1=Math.floor(Math.random()*255);
    let rnd2=Math.floor(Math.random()*255);
    let rnd3=Math.floor(Math.random()*255);
    let rnd4=Math.floor(Math.random()*255);
    return `${rnd1}.${rnd2}.${rnd3}.${rnd4}`
}
console.log(randomUserIp());
/*
    16.Escriba una función randomMacAddress que genere una dirección mac aleatoria.
*/
function randomMacAddress() {
    return "XX:XX:XX:XX:XX:XX".replace(/X/g, function() {
        return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16))
      });
}
console.log(randomMacAddress());
/*
    17.Declare una función llamada randomHexaNumberGenerator. Cuando se llama a esta función, genera un número hexadecimal aleatorio. La función retorna el número hexadecimal.

    console.log(randomHexaNumberGenerator());
    '#ee33df'
*/
function randomHexaNumberGenerator() {
    const ArrayHexa=["#"];
    const values="0123456789ABCDEF";
    for (let i = 1; i < 7; i++) {
       let rnd=values.charAt(Math.floor(Math.random() * 16));
       ArrayHexa.push(rnd);
    }
    return ArrayHexa.join("");
}
console.log(randomHexaNumberGenerator());
/*
    18.Declare una función llamada userIdGenerator. Cuando se llama a esta función, genera un id de siete caracteres. La función devuelve el id.

    console.log(userIdGenerator());
    41XTDbE
*/
function userIdGenerator() {
    const nums="0123456789",
    letters="abcdefghijklmnñopqrstuvwxyz",
    lettersUpper=letters.toUpperCase(),
    caracteres=nums.concat(letters,lettersUpper),
    idA=[];
    for (let i = 0; i < 7; i++) {
        let item=caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        idA.push(item);
    }
    return idA.join("");
}
console.log(userIdGenerator());