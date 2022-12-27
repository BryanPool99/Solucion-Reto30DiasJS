/*
    1.Cree un formato de hora legible por humanos usando el objeto Date. La hora y el minuto deben ser siempre dos dígitos (7 horas deben ser 07 y 5 minutos deben ser 05)
*/
/*
        i.YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
    const ahora=new Date();
    const year=ahora.getFullYear();
    const month=ahora.getMonth()+1;
    const date=ahora.getDate();
    const hour=ahora.getHours();
    const minutes=ahora.getMinutes();
    let hourStr=hour.toString();
    let minutesStr=minutes.toString();
    console.log(minutesStr.length);
    if(hourStr.length<2 || minutesStr.length<2){
        console.log(`${year}-${month}-${date} 0${hourStr}:0${minutesStr}`);
    }else{
        console.log(`${year}-${month}-${date} ${hourStr}:${minutesStr}`);
    }
    