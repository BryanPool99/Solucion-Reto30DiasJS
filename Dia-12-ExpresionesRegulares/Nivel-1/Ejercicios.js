/*
    1.Calcula los ingresos anuales totales de la persona a partir del siguiente texto. 'Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes'.
*/
const text='Gana 4000 euros de sueldo al mes, 10000 euros de bonificación anual, 5500 euros de cursos online al mes';
const patron=/\d+/g;
const numbers=text.match(patron);
console.log(numbers);
const ingresos=numbers.reduce((acc,valA)=>acc+parseInt(valA),0);
console.log(ingresos);
/*
    2.La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas.

    points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
    sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
    distance = 12;
*/
const frase='La posición de algunas partículas en el eje horizontal x -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extrae estos números y encuentra la distancia entre las dos partes más lejanas';

const patt=/-?\d/g;
const points=frase.match(patt);
console.log(points);
const sortedPoints=points.sort((a,b)=>a-b);
console.log(sortedPoints);
let distMax=0;
const valI=sortedPoints[0];
for (let i = 1; i < sortedPoints.length; i++) {
    if(Math.abs(valI-sortedPoints[i])>distMax){
        distMax=Math.abs(valI-sortedPoints[i]);
    }
}
console.log(distMax);
/*
    3.Escribir un patrón que identifique si una cadena es una variable JavaScript válida

    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
*/
function is_valid_variable(str) {
    if (!/^[a-zA-Z_$]/.test(str)) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        // Si encuentra un carácter que no es una letra, un dígito o un guión bajo o un signo de dólar, devuelva false
        if (!/[a-zA-Z0-9_$]/.test(str[i])) {
            return false;
        }
    }
    return true;
}
console.log(is_valid_variable("first_name"));
console.log(is_valid_variable("first-name"));
console.log(is_valid_variable("1first_name"));
console.log(is_valid_variable("firstname"));