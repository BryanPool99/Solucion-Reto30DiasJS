/*
    1.Obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

    Ingrese su edad: 30
    Tiene la edad suficiente para conducir.

    Ingrese su edad:15
    Te faltan 3 años para conducir.
*/
    const edad=parseInt(prompt("Ingrese su edad :"));
    if(edad>=18){
        alert('Tiene la edad suficiente para conducir');
    }else{
        alert('Te faltan'+(18-edad)+" años para conducir");
    }
    
/*
    2.Compara los valores de myAge y yourAge usando if... else. Según la comparación, registre el resultado en la consola indicando quién es mayor (tú o yo). Utilice prompt(“Ingrese su edad:”) para obtener la edad como entrada.

    Ingrese su edad: 30
    Eres 5 años mayor que yo.
*/
    const myAge=23;
    const yourAge=parseInt(prompt("Ingrese su edad :"));
    const dif=Math.abs(myAge-yourAge);
    if(myAge>yourAge){
        alert("Soy "+(dif)+" años mayor que tú");
    }else{
        alert("Eres "+(dif)+" años mayor que yo");
    }
    
/*
    3.Si a es mayor que b, devuelve 'a es mayor que b'; de lo contrario, 'a es menor que b'. Trate de implementarlo de maneras diferentes

    Usando if else
    operador ternario.

    4 es mayor que 3
*/
    //Usando if else
    const a=4;
    const b=3;
    if(a>b){
        console.log(a+" es mayor que "+b);
    }else if(a==b){
        console.log(a+" y "+b+" son iguales");
    }else{
        console.log(a+" es menor que "+b);
    }
    //Usando operador ternario.
    (a>b) ? console.log(a+" es mayor que "+b) :((a==b) ? console.log(a+" y "+b+" son iguales"):console.log(a+" es menor que "+b));
/*
    4.Los números pares son divisibles por 2 y el resto es cero. ¿Cómo verificar si un número es par o no usando JavaScript?

    Ingrese un número: 2
    2 es un número par

    Ingrese un número: 9
    9 es un número impar
*/
    const num=parseInt(prompt("Ingrese un número :"));
    if(num%2==0){
        alert(num+" es un número par");
    }else{
        alert(num+" es un número impar");
    }