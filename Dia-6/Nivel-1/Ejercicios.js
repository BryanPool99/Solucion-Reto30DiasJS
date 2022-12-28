/*
    1.Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
*/
console.log("Usando bucle for :");
for (let i = 0; i <=10; i++) {
   console.log(i);
}
console.log("Usando bucle while :");
i=0
while (i<=10){
    console.log(i);
    i++;
}
console.log("Usando bucle do while :");
i=0;
do {
    console.log(i);
    i++;
} while (i<=10);
/* 
    2.Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
*/
console.log("Usando bucle for :");
for (let i = 10; i >=0; i--) {
   console.log(i);
}
console.log("Usando bucle while :");
i=10;
while (i>=0){
    console.log(i);
    i--;
}
console.log("Usando bucle do while :");
i=10;
do {
    console.log(i);
    i--;
} while (i>=0);
/* 
    3.Itera de 0 a n usando el bucle for
*/
const n=5;
for (let i = 0; i <=n; i++) {
    console.log(i);
}
/* 
    4.Escribe un bucle que haga el siguiente patrón usando console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######
*/
const base=7;
for (let index = 1; index <=base; index++) {
    console.log("#".repeat(index));
}
/* 
    5.Usa un bucle para imprimir el siguiente patrón:
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
*/
const val=10;
for (let i = 0; i <=val; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}
/* 
    6.Usando un bucle imprime el siguiente patrón:
        i    i^2   i^3
        0    0     0
        1    1     1
        2    4     8
        3    9     27
        4    16    64
        5    25    125
        6    36    216
        7    49    343
        8    64    512
        9    81    729
        10   100   1000
*/
console.log(`i\ti^2\ti^3`);
for (let i = 0; i <=val; i++) {
    console.log(`${i}\t${i*i}\t${i* i*i}`);
}
/* 
    7.Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
*/
for (let i = 0; i <=100; i++) {
    if(i%2==0){
        console.log(i);
    }
}
/* 
    8.Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
*/
for (let i = 0; i <=100; i++) {
    if(i%2!==0){
        console.log(i);
    }
}
/* 
    9.Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
*/
for (let i = 2; i <=100; i++) {
    let isPrimo=true;
    let maximoDivisor = Math.floor(Math.sqrt(i));
    for(let divisor=2; divisor <= maximoDivisor; divisor++) {
        if(i%divisor == 0) {
            isPrimo = !isPrimo;
            break;
        }
    }
    if(isPrimo){
        console.log(i);
    }
}
/* 
    10.Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.

    La suma de todos los números de 0 a 100 es 5050.
*/
let sum=0;
for (let i = 0; i <=100; i++) {
    sum+=i;
}
console.log("La suma de todos los números de 0 a 100 es :"+sum);
/* 
    11.Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.

    La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.
*/
let sumP=0;
let sumI=0
for (let i = 0; i <=100; i++) {
    if(i%2==0){
        sumP+=i;
    }else{
        sumI+=i;
    }
    
}
console.log("La suma de todos los pares de 0 a 100 es "+sumP+". Y la suma de todos los impares de 0 a 100 es "+sumI);

/* 
    12.Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array

    [2550, 2500]
*/
const arrayIP=[];
arrayIP.push(sumP);
arrayIP.push(sumI);
console.log(arrayIP);
/* 
    13.Desarrolla un pequeño script que genera una matriz de 5 números aleatorios
*/
const miMatriz=[];
for (let i = 1; i <=5; i++) {
    let numRandom=parseInt(Math.random()*10)
    miMatriz.push(numRandom)
}
console.log(miMatriz);
/* 
    14.Desarrolla un pequeño script que genera una matriz de 5 números aleatorios. Los números debe ser únicos
*/
const myArray=[];
for (let i = 0; i < 5; i++) {
    let numRandom=parseInt(Math.random()*100);
    let isNoRepeat=true;
    while (isNoRepeat) {
        for (let j = 0; j < 5; j++) {
            if(numRandom==myArray[j]){
                isNoRepeat=false;
            }
        }
        if(isNoRepeat){
            myArray.push(numRandom);

        }
    }
}
console.log(myArray);
/* 
    15.Desarrolla un pequeño script que genera un id aleatorio de seis caracteres:

    5j2khz
*/
const num=6;
const arrayLetters=[];
for (let i = 0; i < 6; i++) {
    const numAl=Math.random() * (126 - 33) + 33;
    arrayLetters.push(String.fromCharCode(numAl))
}
const idAl=arrayLetters.join("");
console.log(idAl);