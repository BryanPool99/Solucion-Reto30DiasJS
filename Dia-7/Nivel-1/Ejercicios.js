/*
    1.Declare una función fullName e imprima su nombre completo.
*/
function fullName() {
    console.log("Bryan Pool Arredondo Ovalle");
}
fullName();
/*
    2.Declare una función fullName y ahora toma firstName, lastName como parámetro y retorna su nombre completo.
*/
function fullName(firstName,lastName){
    return firstName+" "+lastName;
}
console.log(fullName("Bryan","Arredondo"));
/*
    3.Declare una función addNumbers que toma dos parámetros y retorna la suma de ambos.
*/
function addNumbers(x,y) {
    return x+y;
}
console.log(addNumbers(1,5));
/*
    4.El área de un rectángulo se calcula de la siguiente manera: area = length x width. Escribe una función areaOfRectangle que calcule el área de un rectángulo.
*/
function areaOfRectangle(length,width) {
    const areaR=length*width;
    return areaR;
}
console.log(areaOfRectangle(5,2));
/*
    5.El perímetro de un rectángulo se calcula de la siguiente manera: perimeter= 2x(length + width). Escribe una función perimeterOfRectangle que calcule el perímetro de un rectángulo.
*/
function perimeterOfRectangle(length,width) {
    const perimeter=2*(length+width);
    return perimeter;
}
console.log(perimeterOfRectangle(1,2));
/*
    6.El volumen de un prisma rectangular se calcula de la siguiente manera: volume = length x width x height. Escribe una función volumeOfRectPrism que calcule el volumen de un prisma.
*/
function volumeOfRectPrism(length,width,height) {
    const volume=length*width*height;
    return volume;
}
console.log(volumeOfRectPrism(5,4,6));
/*
    7.El área de un círculo se calcula de la siguiente manera: area = π x r x r. Escribe una función areaOfCircle que calcule el área de un círculo.
*/
function areaOfCircle(radio) {
    const areaC=(Math.PI*radio*radio).toFixed(2);
    return areaC;
}
console.log(areaOfCircle(5));
/*
    8.La circunferencia de un círculo se calcula de la siguiente manera: circumference = 2πr. Escribe una función circumOfCircle que calcule la circunferencia de un círculo.
*/
function circumOfCircle(radio) {
    const circumference=(2*Math.PI*radio).toFixed(2);
    return circumference;
}
console.log(circumOfCircle(10));
/*
    9.La densidad de una sustancia se calcula de la siguiente manera:density= mass/volume. Escribe una función density que calcule la densidad de una sustancia.
*/
function density(mass,volume) {
    const densidad=mass/volume;
    return densidad.toFixed(2);
}
console.log(density(2,5));
/*
    10.La velocidad se calcula dividiendo el total de la distancia recorrida por un objeto en movimiento entre el tiempo total. Escribe una función que calcule la velocidad de un objeto en movimiento, speed.
*/
function velocidad(distancia,tiempo) {
    const vel=distancia/tiempo;
    return vel.toFixed(2);
}
console.log(velocidad(5,2));
/*
    11.El peso de una sustancia se calcula de la siguiente manera: weight = mass x gravity. Escribe una función weight que calcule el peso de una sustancia.
*/
function peso(mass,gravity=9.81) {
    const weight=mass*gravity;
    return weight.toFixed(2);
}
console.log(peso(82));
/*
    12.La temperatura en °C se puede convertir a °F usando esta fórmula: °F = (°C x 9/5) + 32. Escribe una función convertCelsiusToFahrenheit que convierta °C a °F.
*/
function convertCelsiusToFahrenheit(C) {
    const F=(C*9/5)+32;
    return F;
}
console.log(convertCelsiusToFahrenheit(28));
/*
    13.El índice de masa corporal (IMC) se calcula de la siguiente manera: imc = peso en Kg / (altura x altura) en m2. Escribe una función que calcule imc. El IMC se utiliza para definir de forma amplia diferentes grupos de peso en adultos de 20 años o más. Compruebe si una persona tiene un peso bajo, peso normal, con sobrepeso u obeso según la información que se proporciona a continuación.

    Se aplican los mismos parámetros de grupos tanto a hombres como a mujeres.
    Peso bajo: IMC inferior a 18,5
    Peso normal: IMC de 18,5 a 24,9
    Sobrepeso: IMC de 25 a 29,9
    Obeso: IMC es 30 o más
*/
function IMC(peso,altura) {
    const imc=(peso/(altura*altura)).toFixed(2);
    if(imc<18.5){
        console.log("Peso bajo,su IMC es: ",imc);
    }else if(imc>=18.5 && imc<=24.9){
        console.log("Peso normal,su IMC es: ",imc);
    }
    else if(imc>=25 && imc<=29.9){
        console.log("Sobrepeso,su IMC es: ",imc);
    }else{
        console.log("Obeso,su IMC es: ",imc);
    }
}
IMC(69,1.60)
/*
    14.Escribe una función llamada checkSeason, toma un parámetro de mes y retorna la estación: Otoño, Invierno, Primavera o Verano.
*/
function checkSeason(month) {
    switch(month.toLowerCase()){
        case "septiembre":case "octubre":case "noviembre" :return("La temporada es OTOÑO");break;
        case "diciembre":case "enero":case "febrero" :return("La temporada es INVIERNO");break;
        case "marzo":case "abril":case "mayo" :return("La temporada es PRIMAVERA");break;
        case "junio":case "julio":case "agosto" :return("La temporada es VERANO");break;
        default:return("Ingrese un mes valido!!");
    }
}
console.log(checkSeason("octubre"));
/*
    15.Math.max retorna su argumento más grande. Escriba una función findMax que tome tres argumentos y devuelva su máximo sin usar el método Math.max.

    console.log(findMax(0, 10, 5));
    10;
    console.log(findMax(0, -10, -2));
    0;
*/
function findMax() {
    let max=0
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
    return max
}
console.log(findMax(0, 10, 1));
console.log(findMax(0, -10, -2));