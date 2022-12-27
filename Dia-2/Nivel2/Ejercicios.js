/*
    1.Usando console.log() imprima la siguiente declaración:
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
*/
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
/*
    2.Usando console.log() imprima la siguiente cita de la Madre Teresa:
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
*/
console.log(' "Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead." ');
/*
    3.Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
*/
const dato='10';
console.log(parseInt(dato)==10);
/*
    4.Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
*/
const date=Math.round(parseFloat('9.8'));
console.log(date==10);
/*
    5.Verifique si 'on' se encuentra tanto en Python como en la jerga
*/
const one='Python';
const dos='jerga';
const val='on';
console.log(one.includes(val) && dos.includes(val));
/*
    6.Espero que este curso no esté lleno de jerga. Compruebe si jargon está en la oración.
*/
const sentence='Espero que este curso no esté lleno de jerga';
const value='jargon'
console.log(sentence.includes(value));
/*
    7.Genere un número aleatorio entre 0 y 100 inclusive.
*/
const numAleatorio=Math.floor(Math.random()*(100+1));
console.log(numAleatorio);
/*
    8.Genere un número aleatorio entre 50 y 100 inclusive.
*/
const min=50,max=100;
console.log(Math.floor((Math.random()*(max-min+1))+min));
/*
    9.Genere un número aleatorio entre 0 y 255 inclusive.
*/
const minim=0,maxi=255;
console.log(Math.floor((Math.random()*(max-min+1))+min));
/*
    10.Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
*/
const word='JavaScript'
const len=word.length;
const indiceAleatorio=Math.floor(Math.random()*(len));
console.log(indiceAleatorio);
console.log(word[indiceAleatorio]);
/*
    11.Use console.log() y caracteres de escape para imprimir el siguiente patrón.
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
*/
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");
const pF="1\t1\t1\t1\t1";
const sF="2\t1\t2\t4\t8";
const tF="3\t1\t3\t9\t27";
const cF="4\t1\t4\t16\t64";
const qF="5\t1\t5\t25\t125";
console.log(pF+"\n"+sF+"\n"+tF+"\n"+cF+"\n"+qF);
/*
    12.Usa substr para separar la frase porque porque porque de la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
*/
const frase="No puedes terminar una oración con porque porque porque es una conjunción";
const substr="porque";
const indexOf=frase.indexOf(substr);
const lastIndexOf=frase.lastIndexOf(substr)+substr.length;
console.log(indexOf,lastIndexOf);
console.log(frase.substr(indexOf,lastIndexOf-indexOf));