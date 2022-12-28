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

/*
    7.En el array countries anterior, verifica si hay un país que contenga la palabra 'land'. Si hay países que contienen 'land', imprimelo cono array. Si no hay ningún país que contenga la palabra'land', imprima 'Todos estos países no tienen la palabra land'.

    ['Finland','Ireland', 'Iceland']
*/

/*
    8.En el array countries anterior, verifica si hay un país que termina con una subcadena (substring) 'ia'. Si hay países que terminan con 'ia', imprimelo como un array. Si no hay ningún país que contenga la palabra 'ia', imprime 'Estos países no terminan con ia'.

    ['Albania', 'Bolivia','Ethiopia']
*/

/*
    9.Usando el array countries anterior, encuentre el país que contiene la mayor cantidad de caracteres.

    Ethiopia
*/

/*
    10.Usando el array countries anterior, encuentre el país que contiene sólo 5 caracteres.

    ['Japan', 'Kenya']
*/

/*
    11.Encuentra la palabra más larga en el array webTechs
*/

/*
    12.Utiliza el array de webTechs para crear la el siguiente array de arrays:

    [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/

/*
    13.Una aplicación creada con MongoDB, Express, React y Node se denomina MERN stack app. Crea el acrónimo MERN usando el array mernStack
*/

/*
    14.Iterar a través del array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] usando el bucle for o el bucle for of e imprime los elementos.
*/

/*
    15.Este es un array de frutas, ['banana', 'orange', 'mango', 'lemon'] invierte el orden usando un bucle sin usar el método reverse().
*/

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