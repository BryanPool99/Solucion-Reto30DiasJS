/*
    1.Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule el área de un triángulo (área = 0,5 x b x h).

    Ingrese base: 20
    Ingrese altura: 10
    El área del triángulo es: 100
*/
/*const base=parseFloat(prompt("Ingrese base"));
const altura=parseFloat(prompt("Ingrese altura"));
const areaT=base*altura/2;
document.write("<h1>CALCULO DEL AREA DEL TRIANGULO</h1>")
document.write("<p>Ingrese base :</p>"+base);
document.write("<p>Ingrese altura :</p>"+altura);
document.write("<h2>El area del triangulo es :</h2>"+areaT);
console.log("El area del triangulo es :"+areaT);
*/
/*
    2.Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y calcule el perímetro del triángulo (perímetro = a + b + c)

    Ingrese lado a: 5
    Ingrese lado b: 4
    Ingrese lado c: 3
    El perimetro del triangulo es: 12
*/
/*const ladoA=parseFloat(prompt("Ingrese lado a :"));
const ladoB=parseFloat(prompt("Ingrese lado b :"));
const ladoC=parseFloat(prompt("Ingrese lado c :"));
const perimetro=ladoA+ladoB+ladoC;
document.write("<h1>CALCULO DEL PERIMETRO DEL TRIANGULO</h1>");
document.write("<p>Ingrese lado a: </p>"+ladoA);
document.write("<p>Ingrese lado b: </p>"+ladoB);
document.write("<p>Ingrese lado c: </p>"+ladoC);
document.write("<h2>El perimetro del triangulo es :</h2>"+perimetro);
console.log("El perimetro del triangulo es: "+perimetro);
*/
/*
    3.Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y el perímetro del rectángulo (perímetro = 2 x (largo + ancho))
*/
/*const largo=parseFloat(prompt("Ingrese el largo del rectángulo :"));
const ancho=parseFloat(prompt("Ingrese el ancho del rectángulo :"));
const areaR=largo*ancho;
const perimetroR=2*(largo+ancho);
document.write("<h1>CALCULO DEL AREA y DEL PERIMETRO DEL RECTANGULO</h1>");
document.write("<p>Ingrese el largo del rectángulo :</p>"+largo);
document.write("<p>Ingrese el ancho del rectángulo :</p>"+ancho);
document.write("<h2>El area del rectángulo es :</h2>"+areaR);
document.write("<h2>El perimetro del rectángulo es :</h2>"+perimetroR);
console.log("El area del rectángulo es: "+areaR);
console.log("El perimetro del rectángulo es: "+perimetroR);
*/
/*
    4.Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia de un círculo (c = 2 x pi x r) donde pi = 3.14.
*/
/*const radio=parseFloat(prompt("Ingrese el radio : "));
const areaC=(Math.PI*Math.pow(radio,2)).toFixed(2);
const longitudC=(2*Math.PI*radio).toFixed(2);
document.write("<h1>CALCULO DEL AREA y DE LA LONGITUDO DE LA CIRCUFERENCIA</h1>");
document.write("<p>Ingrese el radio de la circunferencia :</p>"+radio);
document.write("<h2>El area de la circunferencia es :</h2>"+areaC);
document.write("<h2>La longitud de la circunferencia es :</h2>"+longitudC);
console.log("El area de la circunferencia es : "+areaC);
console.log("La longitud de la circunferencia es : "+longitudC);
*/
/*
    5.Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2
*/
let x1=0,y1=-2
//Para saber el punto de interseccion con el eje Y debemos colocar el valor de x=0
let x2=1,y2=0;
//Para saber el punto de interseccion con el eje X debemos colocar el valor de y=0
let m=(y2-y1)/(x2-x1);
console.log("La interseccion X es: "+x2);
console.log("La interseccion Y es: "+y1);
console.log("La pendiente de la recta y=2x-2 es: "+m);

/*
    6.La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)
*/
x1=2;y1=2;
x2=6;y2=10;
const m2=(y2-y1)/(x2-x1);
console.log("La pendiente  es: "+m2);
/*
    7.Compare la pendiente de las dos preguntas anteriores.
*/
console.log(m==m2);
/*
    8.Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.
*/
const a=1,b=6,c=9;
const det=Math.pow(b,2)-(4*a*c);
//USANDO FOMRULA GENERAL
const sol1=(-b+Math.sqrt(det))/(2*a);
const sol2=(-b-Math.sqrt(det))/(2*a);
console.log("Los valores de X para que Y sea 0 son :\n"+sol1+"\n"+sol2);
/*
    9.Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. ¿Calcular el salario de la persona?

    Ingrese horas: 40
    Introduce la tarifa por hora: 28
    Su ganancia semanal es 1120
*/
/*const cantHoras=parseInt(prompt("Ingrese horas: "));
const pagoXHora=parseFloat(prompt("Introduce la tarifa por hora: "));
const ganancia=cantHoras*pagoXHora;
document.write("<h1>CALCULO DEL SALARIO DE UNA PERSONA</h1>");
document.write("<p>Ingrese horas :</p>"+cantHoras);
document.write("<p>Ingrese la tarifa por hora :</p>"+pagoXHora);
document.write("<h2>Su ganancia semanal es : </h2>"+ganancia)
console.log("Su ganancia semanal es : "+ganancia);
*/
/*
    10.Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, diga que su nombre es corto.
*/
    const nombre="Bryan";
    if(nombre.length>7){
        console.log("Su nombre es largo");
    }else{
        console.log("Su nombre es corto");
    }
/*
    11.Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.

    let firstName = "Asabeneh";
    let lastName = "Yetayeh";

    Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.
*/
    const firstName="Bryan";
    const lastName="Arredondo";
    if(firstName.length>lastName.length){
        console.log("Tu nombre,"+firstName+",es mas largo que tu apellido,"+lastName);
    }else{
        console.log("Tu nombre,"+firstName+",es mas corto que tu apellido,"+lastName);
    }
/*
    12.Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

    let myAge = 250;
    let yourAge = 25;

    Soy 225 años mayor que tú.
*/
    let myAge=250;
    let yourAge=23;
    const diferenciaAge=Math.abs(myAge-yourAge);
    console.log("Soy "+diferenciaAge+" años mayor que tú");
/*
    13.Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que el usuario conduzca, si no dígale que espere una cierta cantidad de años.

    
    Introduzca el año de nacimiento: 1995
    Tienes 25 años. Tienes la edad suficiente para conducir.

    Introduzca el año de nacimiento: 2005
    Tienes 15 años. Podrás conducir después de 3 años.
*/
/*    const today=new Date();
    const anio=parseInt(prompt("Introduzca el año de nacimiento:"));
    const anioToday=today.getFullYear();
    const edadActual=anioToday-anio;
    const edadF=18-edadActual;

    document.write("<h1>EDAD PARA CONDUCIR</h1>");
    document.write("<p>Introduzca el año de nacimiento:</p>"+edadActual+"<br>");
    if(edadActual>=18){
        document.write("Tienes "+edadActual+".Tienes la edad suficiente para conducir.");
        console.log("Tienes "+edadActual+".Tienes la edad suficiente para conducir.");
    }else{
        document.write("Tienes "+edadActual+".Podrás conducir después de "+edadF+" años")
        console.log("Tienes "+edadActual+".Podrás conducir después de "+edadF+" años");
    }
    console.log(anioToday);
*/
/*
    14.Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

    Ingrese el número de años de vida: 100
    Viviste 3153600000 segundos.
*/
    /*const numAnios=parseInt(prompt("Ingrese el numero de años de vida"));
    const seg=numAnios*365*24*60*60;
    document.write("<h1>SEGUNDOS DE VIDA</h1>");
    document.write("<p>Ingrese el número de años de vida:</p>"+numAnios);
    document.write("<h2>Viviste "+seg+" segundos.</h2>");
    console.log("Vivistes "+seg+" segundos.");
    */
/*
    15.Cree un formato de hora legible por humanos usando el objeto Date.
*/
    const ahora=new Date();
    const year=ahora.getFullYear();
    const month=ahora.getMonth()+1;
    const date=ahora.getDate();
    const hour=ahora.getHours();
    const minutes=ahora.getMinutes();
    /*
        i.YYYY-MM-DD HH:mm
    */
        console.log(`${year}-${month}-${date} ${hour}:${minutes}`);
    /*
        ii.DD-MM-YYYY HH:mm
    */
        console.log(`${date}-${month}-${year} ${hour}:${minutes}`);
    /*
        iii.DD/MM/YYYY HH:mm
    */
        console.log(`${date}/${month}/${year} ${hour}:${minutes}`);