/*
    1.Escribe un programa que diga el número de días en un mes.

    Introduce un mes: Enero
    Enero tiene 31 días.

    Introduce un mes: ENERO
    enero tiene 31 dias

    Introduce un mes: Febrero
    Febrero tiene 28 días.

    Introduce un mes: FEbrero
    Febrero tiene 28 días.
*/
const mes=prompt("Ingrese el mes:");
switch (mes.toLowerCase()) {
    case "enero" : case "marzo" : case "mayo":
    case "julio" : case "agosto" : case "octubre":
    case "diciembre":alert(mes.toLowerCase()+" tiene 31 dias");break;
    case "febero" :alert(mes.toLowerCase()+" tiene 28 dias");break;
    case "abril" :case "junio":
    case "septiembre":case "noviembre":alert(mes.toLowerCase()+" tiene 30 dias");break;
    default: alert("Digite correctamente el mes");break;
}