let container=document.createElement("div");
container.className="container";
container.style.width="90%";
container.style.margin="0 auto";
container.style.display="flex";
container.style.flexDirection="column";
container.style.alignItems="center";
container.style.fontFamily="fangsong";
container.style.textAlign="center";
document.body.appendChild(container);
//creacion del h1
let title=document.createElement("h1");
container.appendChild(title);
//ceacion de la etiqueta span para el año
let anhio=document.createElement("span");
anhio.textContent="2023";
title.textContent="Bryan Arredondo Solucion en ";
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
title.appendChild(anhio);
//creando el h2
let h2=document.createElement("h2");
h2.textContent="Reto 30DaysOfJavaScript"
h2.style.fontSize="20px";
h2.style.fontWeight="300";
h2.style.textDecoration="underline";
container.appendChild(h2)
//creando un div para la fecha
let fecha=document.createElement("div");
fecha.className="fecha";
fecha.style.display="flex";
fecha.style.alignItems="center";
fecha.style.justifyContent="center";
fecha.style.borderRadius="5px";
fecha.style.width="12rem";
fecha.style.fontSize="15px";
fecha.style.padding="10px";
fecha.style.margin="1rem";
fecha.style.background=rgbColorGenerator();
setInterval(() => {
    fecha.style.background=rgbColorGenerator();
}, 1000);
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
container.appendChild(fecha);
//contenedor main de los retos
let containerRetos=document.createElement("div");
containerRetos.className="contenedor-retos";
containerRetos.style.border="2px solid brown";
containerRetos.style.width="90%";
containerRetos.style.display="flex";
containerRetos.style.flexDirection="column";
containerRetos.style.alignItems="center";
container.appendChild(containerRetos);
const ObjRetos={
    reto:["30 dias de Python","30 dias de JS","30 dias de HTML y CSS","30 dias de React","30 dias de ReactNative","30 dias de FullStack","30 dias de Analisis de datos","30 dias de Machine Learning"],
    temario:{
        Python:["Python","Flask","Numpy","Pandas","Statics","API","MongoDB"],
        JavaScript:["JavaScript","ES6","Promise","async and await","DOM"],
        HTM_CSS:["CSS","Flex","Grid","Css Animation"],
        React:[],
        ReacNative:[],
        FullStack:[],
        Analisis_De_Datos:[],
        Machine_Learning:[]
    },
    estado:["Done","Ongoing","Coming","Coming","Coming","Coming","Coming","Coming"]
}
for (let i = 0; i < ObjRetos.reto.length; i++) {
    let cardRetos=document.createElement("div");
    cardRetos.style.width="90%";
    cardRetos.style.margin="1rem";
    cardRetos.style.padding="1rem";
    cardRetos.style.display="flex";
    cardRetos.style.justifyContent="space-between";
    cardRetos.style.alignItems="center";
    cardRetos.style.borderRadius=".5rem";
    containerRetos.appendChild(cardRetos);

    let reto=document.createElement("div");
    reto.className="reto";
    reto.textContent=ObjRetos.reto[i];
    reto.style.width="30%";
    reto.style.textDecoration="underline";
    reto.style.textAlign="left"
    cardRetos.appendChild(reto);

    let lista=document.createElement("details");
    lista.style.width="20%";
    cardRetos.appendChild(lista);

    let summary=document.createElement("summary");
    summary.textContent=(Object.keys(ObjRetos.temario)[i]);
    summary.style.fontWeight="900";
    summary.style.cursor="Pointer";
    summary.style.textAlign="left";
    lista.appendChild(summary);
    for (let j = 0; j < Object.values(ObjRetos.temario)[i].length; j++) {
        let temas=document.createElement("p");
        temas.textContent=(Object.values(ObjRetos.temario)[i][j]);
        temas.style.textAlign="left";
        lista.appendChild(temas);
    }
    let estado=document.createElement("div");
    estado.className="estado";
    estado.textContent=ObjRetos.estado[i];
    estado.style.width="20%";
    cardRetos.appendChild(estado);
    if(i==1){
        cardRetos.style.background="#FDDB3A";
    }
    if(i==0){
        cardRetos.style.background="#21BF73";
    }
    if(i>1){
        cardRetos.style.background="#FD5E53";
    }
}