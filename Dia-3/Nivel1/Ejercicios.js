/*
    1.Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, use el operador typeof para verificar diferentes tipos de datos.
*/
let firstName="Bryan";
let lastName="Arredondo";
let country="Perú";
let city="Arequipa";
let age=23;
let isMarried=false;
let year=2023;
console.log(typeof(firstName),typeof(age),typeof(isMarried));
/*
    2.Verifique si typeof '10' es igual a 10
*/
let booleano=typeof('10')==10
console.log(booleano);
/*
    3.Verifique si parseInt('9.8') es igual a 10
*/
let num=parseInt('9.8')==10;
console.log(num);
/*
    4.Verifique cualquier valor booleano true o false.
*/
    /*
        i.Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
    */
    let isDev=true,isVerb=false,isOld=false;
    console.log(isDev || isOld || isVerb);
    /*
        ii.Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
    */
    console.log(isDev && isOld || isVerb);
/*
    5.Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()
*/
    /*
        i.4 > 3
    */
    console.log(4>3);
    /*
        ii.4 >= 3
    */
    console.log(4>=3);
    /*
        iii.4 < 3
    */
    console.log(4<3);
    /*
        iv.4 <= 3
    */
    console.log(4<=3);
    /*
        v.4==4
    */
    console.log(4==4);
    /*
        vi.4===4
    */
    console.log(4===4);
    /*
        vii.4 != 4
    */
    console.log(4!=4);
    /*
        viii.4 !== 4
    */
    console.log(4!==4);
    /*
        ix.4 != '4'
    */
    console.log(4!='4');
    /*
        x.4 == '4'
    */
    console.log(4=='4');
    /*
        xi.4 === '4'
    */
    console.log(4==='4');
    /*
        xii.Encuentre la longitud de Python y jargon y haga una declaración de comparación falsa.
    */
    const Python='Python'.length;
    const jargon='jargon'.length;
    console.log(Python!=jargon);
/*
    6.Calcule primero el resultado de las siguientes expresiones sin usar console.log(). Después de decidir el resultado, confirmelo usando console.log()    
*/
    /*
        i.4 > 3 && 10 < 12
    */
    console.log(4 > 3 && 10 < 12);
    /*
        ii.4 > 3 && 10 > 12
    */
    console.log(4 > 3 && 10 > 12);
    /*
        iii.4 > 3 || 10 < 12
    */
    console.log(4 > 3 || 10 < 12);
    /*
        iv.4 > 3 || 10 > 12
    */
    console.log(4 > 3 || 10 > 12);
    /*
        v.!(4 > 3)
    */
    console.log(!(4 > 3));
    /*
        vi.!(4 < 3)
    */
    console.log(!(4 < 3));
    /*
        vii.!(false)
    */
    console.log(!(false));
    /*
        viii.!(4 > 3 && 10 < 12)
    */
    console.log(!(4 > 3 && 10 < 12));
    /*
        ix.!(4 > 3 && 10 > 12)
    */
    console.log(!(4 > 3 && 10 > 12));
    /*
        x.!(4 === '4')
    */
    console.log(!(4 === '4'));
    /*
        xi.No hay 'on' tanto en dragon como en python
    */
    console.log(!("dragon".includes("on")) && ("python".includes("on")));
/*
    7.Utilice el objeto Date para realizar las siguientes actividades
*/
    const hoy=new Date();
    /*
        i.¿Qué año es hoy?
    */
    console.log(hoy.getFullYear());
    /*
        ii.¿Qué mes es hoy con un número?
    */
    console.log(hoy.getMonth()+1);
    /*
        iii.¿Qué fecha es hoy?
    */
    console.log(hoy.getDate());
    /*
        iv.¿Qué día es hoy con un número?
    */
    console.log(hoy.getDay());
    /*
        v.¿Cuál es la hora actual?
    */
    console.log(hoy.getHours());
    /*
        vi.¿Cuántos minutos hay actualmente?
    */
    console.log(hoy.getMinutes());
    /*
        vii.Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
    */
    console.log(hoy.getTime());