/*
    1.Modifique la función userIdGenerator. Declare una función de nombre userIdGeneratedByUser. No toma ningún parámetro pero toma dos entradas usando prompt(). Una de las entradas es la cantidad de caracteres y la segunda entrada es la cantidad de ID que se supone que se generarán.

    userIdGeneratedByUser()
    'kcsy2
    SMFYb
    bWmeq
    ZXOYh
    2Rgxf
    '
    userIdGeneratedByUser()
    '1GCSgPLMaBAVQZ26
    YD7eFwNQKNs7qXaT
    ycArC5yrRupyG00S
    UbGxOFI7UXSWAyKN
    dIV0SSUTgAdKwStr
    '
*/
/*function userIdGeneratedByUser() {
    const cantCaracter=parseInt(prompt("Ingrese la cantidad de caracteres :"));
    const cantIds=parseInt(prompt("Ingrese la cantidad de ids que desea generar :"));
    
    const nums="0123456789",
    letters="abcdefghijklmnñopqrstuvwxyz",
    lettersUpper=letters.toUpperCase(),
    caracteres=nums.concat(letters,lettersUpper);

    for (let j = 0; j < cantIds; j++) {
        const idA=[];
        for (let i = 0; i < cantCaracter; i++) {
            let item=caracteres.charAt(Math.floor(Math.random() * caracteres.length));
            idA.push(item);
        }
        document.write("<h2>el id que se genero es :</h2>"+idA.join(""));
        console.log(idA.join(""));
    }
}
userIdGeneratedByUser();
*/
/*
    2.Escriba una función llamada rgbColorGenerator que genera colores rgb

    rgbColorGenerator()
    rgb(125,244,255)
*/
function rgbColorGenerator() {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator());
/*
    3.Escriba una función arrayOfHexaColors que retorna cualquier cantidad de colores hexadecimales en un array.
*/
function arrayOfHexaColors(maxCant) {
    const hexa=[];
    const values="0123456789ABCDEF";
    const random=Math.floor(Math.random()*maxCant)+1;
    for (let j = 0; j < random; j++) {
        const ArrayHexa=["#"];
        for (let i = 1; i < 7; i++) {
            let rnd=values.charAt(Math.floor(Math.random() * 16));
            ArrayHexa.push(rnd);
        }
        hexa.push(ArrayHexa.join(""));
    }
    return hexa;
}
console.log(arrayOfHexaColors(5));
/*
    4.Escriba una función arrayOfRgbColors que retorna cualquier cantidad de colores RGB en un array.
*/
function arrayOfRgbColors(max) {
    const rgbA=[];
    const random=Math.floor(Math.random()*max)+1;
    for (let i = 0; i < random; i++) {
        let rnd1=Math.floor(Math.random()*255);
        let rnd2=Math.floor(Math.random()*255);
        let rnd3=Math.floor(Math.random()*255);
        rgbA.push(`rgb(${rnd1},${rnd2},${rnd3})`);
    }
    return rgbA;           
}
console.log(arrayOfRgbColors(3));
/*
    5.Escriba una función convertHexaToRgb que convierta el color hexa a rgb y retorna un color rgb.
*/
function convertHexaToRgb(hexa) {
    const red = parseInt(hexa.slice(1, 3), 16);
    const green = parseInt(hexa.slice(3, 5), 16);
    const blue = parseInt(hexa.slice(5, 7), 16);
    return `rgb(${red},${green},${blue})`;
}
console.log(convertHexaToRgb("#7B7263"));
/*
    6.Escriba una función convertRgbToHexa que convierta rgb a color hexa y retorna un color hexa.
*/
function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
  }
function convertRgbToHexa(r,g,b) {
    return `#${ColorToHex(r)}${ColorToHex(g)}${ColorToHex(b)}`.toUpperCase();
}
console.log(convertRgbToHexa(123,114,99));
/*
    7.Escriba una función generateColors que pueda generar cualquier número de colores hexa o rgb.

    console.log(generateColors("hexa", 3)); // ['#a3e12f', '#03ed55', '#eb3d2b']
    console.log(generateColors("hexa", 1)); // '#b334ef'
    console.log(generateColors("rgb", 3)); // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    console.log(generateColors("rgb", 1)); // 'rgb(33,79, 176)'
*/
function arrayHexaColors(Cant) {
    const hexa=[];
    const values="0123456789ABCDEF";
    for (let j = 0; j < Cant; j++) {
        const ArrayHexa=["#"];
        for (let i = 1; i < 7; i++) {
            let rnd=values.charAt(Math.floor(Math.random() * 16));
            ArrayHexa.push(rnd);
        }
        hexa.push(ArrayHexa.join(""));
    }
    return hexa;
}
function arrayRgbColors(cant) {
    const rgbA=[];
    for (let i = 0; i < cant; i++) {
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        rgbA.push(`rgb(${r},${g},${b})`);
    }
    return rgbA;           
}
function generateColors(type,cant) {
    if(type=="hexa"){
      return  arrayHexaColors(cant);
    }else if(type=="rgb"){
        return arrayRgbColors(cant);
    }else{
        return "Solo hay tipo hexa/rgb";
    }
}
console.log(generateColors("hexa", 3));
console.log(generateColors("hexa", 1));
console.log(generateColors("rgb", 3));
console.log(generateColors("rgb", 1)); 
/*
    8.Llame a su función shuffleArray, toma un array como parámetro y devuelve un array mezclada
*/

/*
    9.Llame a su función factorial, toma un número entero como parámetro y devuelve un factorial del número.
*/
function factorial(num) {
    if(num<0){
        return "Debe ser un numero positivo";
    }
    let fact=1;
    for (let i = 1; i <=num; i++) {
        fact*=i;
    }
    return fact;
}
console.log(factorial(10));
/*
    10.Llame a su función isEmpty, toma un parámetro y verifica si está vacío o no.
*/
function isEmpty(arr) {
    if(arr.length!==0){
        return "No esta vacio";
    }
    else return "Esta vacio";
}
const a=[];
console.log(isEmpty(a));
/*
    11.Llame a su función sum, toma cualquier cantidad de argumentos y devuelve la suma.
*/
function sum() {
    let suma=0
    for (let i = 0; i < arguments.length; i++) {
        suma+=arguments[i];
    }
    return suma;
}
console.log(sum(1,2));
/*
    12.Escriba una función llamada sumOfArrayItems, toma un array como parámetro y retorna la suma de todos los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta razonable.

*/
function sumOfArrayItems(arr) {
    let sum=0;
    const type="number";
    for (const i of arr) {
        if(typeof(i)==type){
            sum+=i;
        }
        else{
            return "No se puede realizar la suma porque los elementos no son del tipo number";
        }
    }
    return sum;
}const miArray=[1,2,3,8.5];

console.log(sumOfArrayItems(miArray));
/*
    13.Escribe una función llamada average, toma un array como parámetro y retorna el promedio de los elementos. Compruebe si todos los elementos de la matriz son tipos de números. Si no, dé una respuesta adecuada.
*/
function average(arr) {
    let sum=0;
    const type="number";
    for (const i of arr) {
        if(typeof(i)==type){
            sum+=i;
        }
        else{
            return "No se puede realizar la suma porque los elementos no son del tipo number";
        }
    }
    return (sum/arr.length).toFixed(2);
}
console.log(average(miArray));
/*
    14.Escriba una función llamada modifyArray que tome un array como parámetro y modifique el quinto elemento del array y retorna el array. Si la longitud del array es inferior a cinco, retorna 'elemento no encontrado'.

    console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);

    ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);

    ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']

    console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);

    'Not Found'
*/
function modifyArray(arr) {
    if(arr.length<5){
        return 'Not Found';
    }
    if(typeof(arr[4])=="string"){
        arr[4]=arr[4].toUpperCase();
    }
    else{
        arr[4]=arr[4]*2;
    }
    return arr;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon',6,  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']))
/*
    15.Escribe una función llamada isPrime, que verifica si un número es un número primo.
*/
function isPrime(numero) {
    if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true;
}
console.log(isPrime(8));
console.log(isPrime(37));
/*
    16.Escriba una función que verifique si todos los elementos son únicos en un array.
*/
function unique(arr) {
    for (let i = 0; i <=arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i]==arr[j]) return false;
        }
    }
    return true;
}
console.log(unique([0,1,2,5,3,4,10,9]));
/*
    17.Escriba una función que verifique si todos los elementos de un array son del mismo tipo de datos.
*/
function isSameType(arr) {
    const type=typeof(arr[arr.length-1]);
    let rpta=false;
    for (const item of arr) {
        if(typeof(item)==type){
           rpta=true;
        }else{
            rpta=false;
        }
        return rpta;
    }
}
const arr=[1,2,3,0.5];
const A=["hola","esto","es una prueba",false];
console.log(isSameType(A));
/*
    18.El nombre de las variables de JavaScript no admite caracteres o símbolos especiales, excepto $ o _. Escriba una función isValidVariable que verifique si una variable es válida o inválida.
*/
function isValidVariable(str) {
        for (let i = 0; i < str.length; i++) {
            if(
                (str[i].charCodeAt()>=48 && str[i].charCodeAt()<=57 ||
                (str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90) ||
                (str[i].charCodeAt()>=97 && str[i].charCodeAt()<=122)) ||
                str[i].charCodeAt()==36 ||  str[i].charCodeAt()==95 
            ) {
                console.log(true);
                return "es una variable valida";
            }
            else{
                console.log(false);
                return "es una variable invalida";
            }
        }
}
console.log(isValidVariable("#"));//falta
/*
    19.Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.

    sevenRandomNumbers()[(1, 4, 5, 7, 9, 8, 0)];
*/
function sevenRandomNumbers() {
    const arr=Array(7);
    for (let i = 0; i < 7; i++) {
        let numR=Math.floor(Math.random()*9);
        arr[i]=numR;
    }
    if(unique(arr)) return arr;
    return sevenRandomNumbers();     
}
console.log(sevenRandomNumbers());
/*
    20.Escriba una función llamada reverseCountries, toma el array de países y primero copia el array y retorna el array original invertido 
*/
const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  function reverseCountries(arr) {
    return arr.reverse();
  }
  console.log(reverseCountries(countries));
