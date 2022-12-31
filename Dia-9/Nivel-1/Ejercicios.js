const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
/*
    1.Explique la diferencia entre forEach, map, filter, and reduce.
*/
//forEach :Sirve para iterar arrays.
//map :Modifica los elementos de un array  y devuevle un nuevo array.
//filter :Filtra elementos que tienen una condicion asimismo devuleve un nuevo array
//reduce :Sirve mas que todo para acumuladores.
/*
    2.Defina una función callback antes de utilizarla en forEach, map, filter o reduce.
*/
//Funcion callback :es una funcion que se puede pasar como parametro a otra funcion.
/*
    3.Utiliza forEach para mostrar con console.log cada país del array de países.
*/
countries.forEach((country)=> console.log(country));
/*
    4.Utiliza forEach para mostrar con console.log cada nombre del array de nombres.
*/
names.forEach((name)=>console.log(name))
/*
    5.Utiliza forEach para mostrar con console.log cada número del array de números.
*/
numbers.forEach((num)=>console.log(num))
/*
    6.Utiliza map para crear un nuevo array cambiando cada país a mayúsculas en el array de países.
*/
const countriesUpperCase=countries.map((country)=>country.toUpperCase());
console.log(countriesUpperCase);
/*
    7.Utilice map para crear un array de longitudes de países a partir del array de países.
*/
const countriesLen=countries.map((element)=>element.length);
console.log(countriesLen);
/*
    8.Usa map para crear un nuevo array cambiando cada número al cuadrado en el array de números.
*/
const numbersSquare=numbers.map((n)=>n*n);
console.log(numbersSquare);
/*
    9.Utilice map para cambiar cada nombre a mayúsculas en el array de nombres.
*/
const namesUpper=names.map((name)=>name.toUpperCase());
console.log(namesUpper);
/*
    10.Utilice map para asignar el array de productos a sus correspondientes precios.
*/
const arrPrice=products.map((obj)=>obj.price)
console.log(arrPrice);
/*
    11.Utilice filter para filtrar los países que contienen land.
*/
const countriesLand=countries.filter((country)=>country.includes("land") || country.includes("Land"))
console.log(countriesLand);
/*
    12.Utilice filter para filtrar los países que tienen seis caracteres.
*/
const countriesLenSix=countries.filter((country) => country.length===6 )
console.log(countriesLenSix);
/*
    13.Utilice filter para filtrar los países que contengan seis letras o más en el array de países.
*/
const countriesLenMoreSix=countries.filter((country) => country.length>=6 );
console.log(countriesLenMoreSix);
/*
    14.Utilice filter para filtrar los países que empiezan por "E";
*/
const countriesStartWithE=countries.filter((country)=> country.startsWith("E"));
console.log(countriesStartWithE);
/*
    15.Utilice filter para filtrar sólo los precios con valores.
*/
const prices=products.filter( p=>p.price).map(p=>p.price);
console.log(prices);
/*   16.Declara una función llamada getStringLists que toma un array como parámetro y devuelve un array sólo con elementos string.
*/
function getStringLists(arr){
    return arr.filter((e)=> typeof(e)==="string")
}
const array=[1,5,6,"fol","fdfsd0","prueba",false]
console.log(getStringLists(array));
/*
    17.Usa reduce para sumar todos los números del array de números.
*/
const sumNumbers=numbers.reduce((acc,valActual)=>acc+valActual,0)
console.log(sumNumbers);
/*
    18.Utiliza reduce para concatenar todos los países y producir esta frase: Estonia, Finland, Sweden, Denmark, Norway, y IceLand son países del norte de Europa
*/
const frase=countries.reduce((acc,valActual)=>acc+", "+valActual)
console.log(frase.concat(" son países del norte de Europa"));
/*
    19.Explique la diferencia entre some y every
*/
//some:Verifica que algunos cumplan la codicion tmabein devuevle un boolean
//every:Verifica que todos cumplan con una condicion y devuelve un boolean
/*
    20.Utilice some para comprobar si la longitud de algunos nombres es superior a siete en el array de nombres.
*/
const areSomeNamesLenMoreSeven=names.some((name)=>name.length>7);
console.log(areSomeNamesLenMoreSeven);
/*
    21.Utilice every para comprobar si todos los países contienen la palabra land.
*/
const areEveryCountriesContainLand=countries.every((country)=>country.includes("land"));
console.log(areEveryCountriesContainLand);
/*
    22.Explique la diferencia entre find y findIndex.
*/
//find:retorna el primer elemento que cumpla la condicion.
//findIndex:Retorna el indice del primero elemento que cumpla una condicion dada.
/*
    23.Utilice find para encontrar el primer país que contenga sólo seis letras en el array de países.
*/
const firstCountryLenSix=countries.find((contry)=>contry.length===6);
console.log(firstCountryLenSix);
/*
    24.Utilice findIndex para encontrar la posición del primer país que contenga sólo seis letras en el array de países.
*/
const firstIndexOfCountryLenSix=countries.findIndex((country)=>country.length===6);
console.log(firstIndexOfCountryLenSix);
/*
    25.Utilice findIndex para encontrar la posición de Norway si no existe en el array obtendrá -1.
*/
const indexOfNorway=countries.findIndex((country)=>country==="Norway");
console.log(indexOfNorway);
/*
    26.Utilice findIndex para encontrar la posición de Russia si no existe en el array obtendrá -1.
*/
const indexOfRussia=countries.findIndex((country)=>country==="Russia");
console.log(indexOfRussia);

