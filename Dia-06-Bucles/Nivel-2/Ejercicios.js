/*
    1.Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios:
        fe3jo1gl124g
        xkqci4utda1lmbelpkm03rba
*/
const len=Math.random() * 20;
const arrayLetters=[];
for (let i = 0; i < len; i++) {
    const numAl=Math.random() * (126 - 33) + 33;
    arrayLetters.push(String.fromCharCode(numAl))
}
const idAl=arrayLetters.join("");
console.log(idAl);
/*
    2.Escribe un script que genere un número hexadecimal aleatorio.
        '#ee33df'
*/
const values=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const n=7;
const ArrayH=["#"];
for (let i = 1; i <n; i++) {
    let idxRnd=parseInt((Math.random()*(values.length)));
    ArrayH.push(values[idxRnd]);
}
const numHeax=ArrayH.join("").toLowerCase();
console.log(numHeax);

/*
    3.Escribe un script que genere un número de color rgb aleatorio.
    rgb(240,180,80)
*/
const rgb="rgb";
const nums=[];
for (let i = 0; i < 3; i++) {
    const rnd=parseInt(Math.random() *(255));
    nums.push(rnd)
}
const val=nums.join(",");
const rpta=rgb.concat("(",val,")")
console.log(rpta);
/*
    4.Usando el array countries anterior, crea un array como el siguiente.

    ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
*/
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Iceland",
    "Japan",
    "Kenya",
];
const countriesUpper=[];
for (const country of countries) {
    countriesUpper.push(country.toUpperCase())
}
console.log(countriesUpper);
/*
    5.Usando el array countries anterior, crea un array para saber la longitud de cada país.
    [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
const lenCountries=[];
for (const len of countries) {
    lenCountries.push(len.length)
}
console.log(lenCountries);
/*
    6.Utiliza el array countries para crear la siguiente array de arrays

        [
            ['Albania', 'ALB', 7],
            ['Bolivia', 'BOL', 7],
            ['Canada', 'CAN', 6],
            ['Denmark', 'DEN', 7],
            ['Ethiopia', 'ETH', 8],
            ['Finland', 'FIN', 7],
            ['Germany', 'GER', 7],
            ['Hungary', 'HUN', 7],
            ['Ireland', 'IRE', 7],
            ['Iceland', 'ICE', 7],
            ['Japan', 'JAP', 5],
            ['Kenya', 'KEN', 5]
        ]
*/
const codeCountries=[];
for (const codeCountry of countriesUpper) {
    codeCountries.push(codeCountry.slice(0,3))
}
console.log(countries);
console.log(codeCountries);
console.log(lenCountries);
const ArrayCountries=[];
for (let i = 0; i < lenCountries.length; i++) {
    var newA=[countries[i],codeCountries[i] ,lenCountries[i]];
    ArrayCountries.push(newA)
}
console.log(ArrayCountries);
/*
    7.En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

    ['Finland','Ireland', 'Iceland']
*/
const LandCountries=[];
const restCountries=[];
for (const country of countries) {
    if(country.includes("land")){
        LandCountries.push(country);
    }else{
        restCountries.push(country)
    }
}
console.log(LandCountries);
console.log('Todos estos países no tienen la palabra land');
console.log(restCountries);
/*
    8.En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

    ['Albania', 'Bolivia','Ethiopia']
*/
const IaCountries=[];
const CountriesNoIa=[];
for (const country of countries) {
    let idx=country.length-1
    if(country.substring(idx-1)=="ia"){
       IaCountries.push(country)
    }else{
        CountriesNoIa.push(country)
    }
}
console.log(IaCountries);
console.log('Todos estos países no tienen la palabra land');
console.log(CountriesNoIa);
/*
    9.Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

    Ethiopia
*/
let max=0
for (const i of countries) {
    let len=i.length;
    var item;
    if(len>max){
        max=len;
        item=i;
    }
}
console.log(item);
/*
    10.Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

    ['Japan', 'Kenya']
*/
const lenC=5;
const arrayL5=[]
for (const i of countries) {
    let lenI=i.length;
    var item;
    if(lenI==lenC){
        arrayL5.push(i)
    }
}
console.log(arrayL5);
/*
    11.Encuentra la palabra más larga en el array webTechs
*/
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];
let maxNum=0
for (const i of webTechs) {
    let len=i.length;
    var item;
    if(len>max){
        max=len;
        item=i;
    }
}
console.log(item," con "+max+" letras");
/*
    12.Utiliza el array de webTechs para crear la el siguiente array de arrays:

    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
const webTechsLen=[]
for (const i of webTechs) {
    webTechsLen.push(i.length);
}
console.log(webTechsLen);
const ArrayOfArray=[];
for (let i = 0; i < webTechs.length; i++) {
    var arrayN=[webTechs[i],webTechsLen[i]];
    ArrayOfArray.push(arrayN);
}
console.log(ArrayOfArray);
/*
    13.Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
*/
const mernStack=["MongoDB","Express","React","Node"];
const MERN=[];
for (const item of mernStack) {
    MERN.push(item[0]);
}
const MERN_Str=MERN.join("");
console.log(MERN_Str);
/*
    14.Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
*/
const miArray= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for (const i of miArray) {
    console.log(i);
}
/*
    15.Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
*/
const Frutas=['banana', 'orange', 'mango', 'lemon'];
const FrutasReverse=[];
for (let i = Frutas.length-1; i >=0; i--) {
    FrutasReverse.push(Frutas[i])
}
console.log(FrutasReverse);
/*
    16.Imprime todos los elementos del array como se muestra a continuación:

    const fullStack = [
        ["HTML", "CSS", "JS", "React"],
        ["Node", "Express", "MongoDB"],
    ];
    HTML
    CSS
    JS
    REACT
    NODE
    EXPRESS
    MONGODB
*/
const fullStack = [
    ["HTML", "CSS", "JS", "React"],
    ["Node", "Express", "MongoDB"],
];
const newFullStack=fullStack[0].concat(fullStack[1]);
console.log(newFullStack);
for (const iterator of newFullStack) {
    console.log(iterator.toUpperCase());
}
