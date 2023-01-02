/*
    1.Escriba un código que pueda calificar a los estudiantes de acuerdo con sus puntajes:
    80-100, A
    70-79, B
    60-69, C
    50-59, D
    0-49, F
*/
    const puntaje=parseFloat(prompt("Ingrese su puntaje(0-100)"));
    if(puntaje>=80 && puntaje<=100){
        alert("Su calificacion es A");
    }else if(puntaje>=70 && puntaje<=79){
        alert("Su calificacion es B");
    }
    else if(puntaje>=60 && puntaje<=69){
        alert("Su calificacion es C");
    }
    else if(puntaje>=50 && puntaje<=59){
        alert("Su calificacion es D");
    }
    else if(puntaje>=0 && puntaje<=49){
        alert("Su calificacion es F");
    }else{
        alert("El rango de puntajes solo es de 0-100");
    }
/*
    2.Consulta si la temporada es Otoño, Invierno, Primavera o Verano. Si la entrada del usuario es :
    Septiembre, Octubre o Noviembre, la temporada es Otoño.
    Diciembre, Enero o Febrero, la temporada es Invierno.
    Marzo, Abril o Mayo, la temporada es Primavera
    Junio, Julio o Agosto, la temporada es Verano
*/
    const month=prompt("Ingrese el mes que desea:");
    switch(month.toLowerCase()){
        case "septiembre":case "octubre":case "noviembre" :alert("La temporada es OTOÑO");break;
        case "diciembre":case "enero":case "febrero" :alert("La temporada es INVIERNO");break;
        case "marzo":case "abril":case "mayo" :alert("La temporada es PRIMAVERA");break;
        case "junio":case "julio":case "agosto" :alert("La temporada es VERANO");break;
        default:alert("Ingrese un mes valido!!");
    }
/*
    3.Compruebe si un día es un día de fin de semana o un día laborable. Su script tomará el día como entrada.
    ¿Qué día es hoy? Sábado
    El sábado es fin de semana.

    ¿Qué día es hoy? sábAdo
    El sábado es fin de semana.

    ¿Qué día es hoy? Viernes
    El viernes es un día laborable.

    ¿Qué día es hoy? ViErNes
    El viernes es un día laborable.
*/
const day=prompt("¿Que dia es hoy?");
switch (day.toLowerCase()) {
    case "sabado":case "domingo":alert("El "+day+" es fin de semana"); break;

    default:alert("El "+day+" es un dia laborable"); break;
}