/*
    1.Declara un array vacío.
*/
const arrayEmpty=[];
/*
    2.Declara un array com mas de 5 elementos.
*/
const myarray=["Hola","Mundo",10,58.2,"Bryan"];
/*
    3.Encuentra la longitud de tu array.
*/
console.log(myarray.length);
/*
    4.Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
*/
const ultimoIdx=myarray.length-1
console.log(myarray[0]);
console.log(myarray[ultimoIdx/2]);
console.log(myarray[ultimoIdx]);
/*
    5.Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
*/
const mixedDataTypes=[true,null,10,"Arredondo",{"a":"b"},5.2,myarray];
console.log(mixedDataTypes.length);
/*
    6.Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
*/
const itCompanies=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
/*
    7.Imprima el array usando console.log().
*/
console.log(itCompanies);
/*
    8.Imprima el número de empresas en el array.
*/
const itCompaniesSize=itCompanies.length
console.log(itCompaniesSize);
/*
    9.Imprime la primer empresa , la intermedia y la última empresa
*/
console.log(itCompanies[0],itCompanies[(itCompaniesSize-1)/2],itCompanies[itCompaniesSize-1]);
/*
    10.Imprime cada empresa.
*/
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
/*
    11.Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
*/
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}
/*
    12.Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
*/
const itCompaniesStr=itCompanies.toString();
const complement="son grandes empresas de TI.";
console.log(itCompaniesStr+" "+complement);
/*
    13.Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
*/
const rpta="Faceboo";
if(itCompanies.includes(rpta)){
    console.log(rpta);
}else{
    console.log("La empresa "+rpta+" no existe en el array");
}
/*
    14.Filtre las empresas que tienen más de una 'o' sin el método filter()
*/
let arrayO=[];
for (let i = 0; i < itCompanies.length; i++) {
    if(itCompanies[i].indexOf("o")!==-1 && itCompanies[i].lastIndexOf("o")!==itCompanies[i].indexOf("o")){
        console.log(itCompanies[i]);
    }
}
/*
    15.Ordene el array usando el método sort()
*/
console.log(itCompanies.sort());
/*
    16.Invierte la array usando el método reverse()
*/
console.log(itCompanies.reverse());
/*
    17.Cortar las primeras 3 empresas del array
*/
let newA=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
newA.splice(0,3);
console.log(newA);

/*
    18.Cortar las últimas 3 empresas del array
*/
let array=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
array.splice(array.length-3);
console.log(array); 
/*
    19.Cortar la empresa o empresas intermedias de TI del array
*/
let newArray=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
newArray.splice((newArray.length-1)/2,1);
console.log(newArray);
/*
    20.Eliminar la primera empresa de TI del array
*/
let TI=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
TI.shift();
console.log(TI);
/*
    21.Eliminar la empresa o empresas intermedias de TI del array
*/
let itEm=["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
itEm.splice((itEm.length-1)/2,1);
console.log(itEm);
/*
    22.Elimine la última empresa de TI del array
*/
console.log(itCompanies.pop());
console.log(itCompanies);
/*
    23.Eliminar todas las empresas de TI
*/
let arrayDelete=itCompanies.splice();
console.log(arrayDelete);
