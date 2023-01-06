//contenedor principal
const container=document.querySelector("div");
container.style.margin="0 auto"
container.style.display="flex";
container.style.flexDirection="Column";
container.style.alignItems="center";
container.style.width="70%";
container.style.textAlign="center";
container.style.fontFamily="sans-serif";
//Cmabio de color cada 1 segundo en el año
const anhio=document.querySelector("span");
anhio.style.fontSize="5rem";
function rgbColorGenerator() {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
anhio.style.color=rgbColorGenerator();
setInterval(() => {
    anhio.style.color=rgbColorGenerator();
}, 1000);

//dando estilos al h2
const h2=document.querySelector("h2");
h2.style.fontSize="20px";
h2.style.fontWeight="300";
h2.style.textDecoration="underline";
//Creando la fecha usando <p></p>
const fecha=document.querySelector("p");
fecha.style.borderRadius="5px";
fecha.style.width="12rem";
fecha.style.fontSize="15px";
fecha.style.padding="10px";
fecha.style.background=rgbColorGenerator();
setInterval(() => {
    fecha.style.background=rgbColorGenerator();
}, 1000);
const now=new Date();
const month=now.getMonth()+1;
const day=now.getDate();
const year=now.getFullYear();
const hour=now.getHours();
const minutes=now.getMinutes();
let second=now.getSeconds();
let mes,dia,hora,min,seg;
switch (month) {
    case 1:mes="Enero";break;
    case 2:mes="Febrero";break;
    case 3:mes="Marzo";break;
    case 4:mes="Abril";break;
    case 5:mes="Mayo";break;
    case 6:mes="Junio";break;
    case 7:mes="Julio";break;
    case 8:mes="Agosto";break;
    case 9:mes="Septiembre";break;
    case 10:mes="Octubre";break;
    case 11:mes="Noviembre";break;
    case 12:mes="Diciembre";break;
    default:mes="";break;
}
(day<10) ? dia="0"+day : dia=day;
(hour<10) ? hora="0"+hour : hora=hour;
(minutes<10) ? min="0"+minutes : min=minutes;
(second<10) ? seg="0"+second : seg=second;
let stringFecha=`${mes} ${dia},${year} ${hora}:${min}:${seg}`;
fecha.textContent=stringFecha;  
setInterval(() => {
    const now=new Date();
    const month=now.getMonth()+1;
    const day=now.getDate();
    const year=now.getFullYear();
    const hour=now.getHours();
    const minutes=now.getMinutes();
    let second=now.getSeconds();
    let mes,dia,hora,min,seg;
    switch (month) {
        case 1:mes="Enero";break;
        case 2:mes="Febrero";break;
        case 3:mes="Marzo";break;
        case 4:mes="Abril";break;
        case 5:mes="Mayo";break;
        case 6:mes="Junio";break;
        case 7:mes="Julio";break;
        case 8:mes="Agosto";break;
        case 9:mes="Septiembre";break;
        case 10:mes="Octubre";break;
        case 11:mes="Noviembre";break;
        case 12:mes="Diciembre";break;
        default:mes="";break;
    }
    (day<10) ? dia="0"+day : dia=day;
    (hour<10) ? hora="0"+hour : hora=hour;
    (minutes<10) ? min="0"+minutes : min=minutes;
    (second<10) ? seg="0"+second : seg=second;
    let stringFecha=`${mes} ${dia},${year} ${hora}:${min}:${seg}`;
    fecha.textContent=stringFecha;  
}, 1000);

//Dando estilos a la lista
const containerLista=document.querySelector("ul");
containerLista.style.listStyle="none";
containerLista.style.width="70%";
containerLista.style.textAlign="Left";
containerLista.style.display="flex";
containerLista.style.flexDirection="Column";
//Dando estilos a cada li
const lista=document.querySelectorAll("li");
lista[0].style.background="#21BF73";
lista[1].style.background="#FDDB3A";
lista.forEach((e)=>{
    e.style.border="2px solid black";
    e.style.width="90%";
    e.style.borderRadius="5px";
    e.style.padding="1rem";
    e.style.margin="0.1rem"
    e.style.fontFamily="cursive";
});
for (let i = 2; i < lista.length; i++){
   lista[i].style.background="#FD5E53";
}

