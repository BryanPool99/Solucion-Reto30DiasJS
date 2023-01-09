//creacion del container principal
const container=document.createElement("div");
container.className="container";
container.style.width="100vw";
container.style.minHeight="100vh";
container.style.backgroundImage="url(./Img/bg.webp)";
container.style.backgroundRepeat="no-repeat";
container.style.backgroundSize="cover";
container.style.backgroundPosition="center"
container.style.display="flex";
container.style.flexDirection="column";
container.style.alignItems="center";
container.style.justifyContent="center";
container.style.color="#F0EAEA";
document.body.appendChild(container);
//Creacion del titulo
const title=document.createElement("h1");
title.className="title";
title.textContent="calcular el peso de un objeto en un planeta";
title.style.textAlign="center";
title.style.width="90%";
title.style.textTransform="uppercase";
title.style.margin="2rem";
container.appendChild(title);
//creando div que contenga  el input el select y el boutton
const box=document.createElement("div");
box.className="box-input";
box.style.padding=".5rem";
box.style.width="75%";
box.style.display="flex";
box.style.flexWrap="wrap";
box.style.justifyContent="space-evenly";
box.style.alignItems="center";
container.appendChild(box);
//creando elemento input
const inputNum=document.createElement("input");
inputNum.className="input-number";
inputNum.placeholder="Ingrese la masa en kg";
inputNum.style.padding="1rem";
inputNum.style.margin="1rem";
box.appendChild(inputNum);
//creando la lista de planetas
const planets=[
    {
        name:"--Seleccione un planeta--",
    },
    {
        name:"Mercurio",
        gravity:3.7,
        img:"url(./Img/mercurio.png)"
    },
    {
        name:"Venus",
        gravity:8.87,
        img:"url(./Img/venus.png)"
    },
    {
        name:"Tierra",
        gravity:9.8,
        img:"url(./Img/tierra.png)"
    },
    {
        name:"Marte",
        gravity:3.71,
        img:"url(./Img/marte.png)"
    },
    {
        name:"Júpiter",
        gravity:24.79,
        img:"url(./Img/jupiter.png)"
    },
    {
        name:"Saturno",
        gravity:10.4,
        img:"url(./Img/saturno.png)"
    },
    {
        name:"Urano",
        gravity:8.87,
        img:"url(./Img/urano.png)"
    },
    {
        name:"Neptuno",
        gravity:11.15,
        img:"url(./Img/neptuno.png)"
    }
];
const list=document.createElement("select");
list.name="planet";
list.style.textAlign="left";
list.style.padding="1rem";
list.style.borderRadius="3px";
list.style.margin="1rem";
for (let i = 0; i < planets.length; i++) {
    let option=document.createElement("option");
    option.value=planets[i].name;
    option.textContent=planets[i].name;
    option.style.backgroundColor="#9A9A9B";
    list.appendChild(option);
}
box.appendChild(list);
//creando button
const btn=document.createElement("button");
btn.textContent="Calcular Peso";
btn.style.textAlign="center";
btn.style.border="none";
btn.style.padding="1rem";
btn.style.margin="1rem";
btn.style.borderRadius="5px";
btn.style.backgroundColor="#9A9A9B";
btn.style.color="white";
btn.style.fontWeight="bold";
btn.style.cursor="pointer";
box.appendChild(btn);
//creando div para info del planeta
const info=document.createElement("div");
info.className="info";
info.style.borderRadius="8px";
info.style.width="98%";
info.style.margin="1.5rem";
info.style.padding=".1rem";
info.style.backgroundColor="rgb(57 57 56 / 55%)";
info.style.display="flex";
info.style.flexWrap="wrap";
info.style.alignItems="center";
info.style.justifyContent="space-evenly";
container.appendChild(info);
//ceando una etiqueta img que sera hijo de div info
let img=document.createElement("div");
img.className="img";
img.style.width="30rem";
img.style.height="30rem";
img.style.backgroundImage="url(./Img/tierra.png)";
img.style.backgroundSize="cover";
img.style.backgroundPosition="center";
info.appendChild(img);
//creacion de un div donde se encuentre la respuesta
let description=document.createElement("div");
description.className="description";
description.style.width="30rem";
description.style.height="15rem";
description.style.marginTop="1rem";
description.style.backgroundColor="rgb(57 57 56 / 55%)";
description.style.borderRadius="8px";
description.style.display="none";
description.style.flexDirection="column";
description.style.alignItems="center";
description.style.justifyContent="center";
info.appendChild(description);
//crenado un div
let frase=document.createElement("div");
frase.className="frase";
let planet=document.createElement("span");
description.appendChild(frase);
//creando contendor para el peso de un objeto
let weight=document.createElement("div");
weight.className="weight";
weight.style.width="10rem";
weight.style.height="10rem";
weight.style.borderRadius="50%";
weight.style.backgroundColor="rgb(57 57 56 / 80%)";
weight.style.display="none";
weight.style.flexDirection="column";
weight.style.alignItems="center";
weight.style.justifyContent="center";
weight.style.fontWeight="bold";
weight.style.fontSize="25px";
description.appendChild(weight);
//responsivo
if(screen.width<375){
    img.style.height="17rem";
    info.style.width="90%";
}
else{
    img.style.width="23rem";
}
//envento
btn.addEventListener("click",()=>{
    console.log("clcik");
    if (inputNum.value.length==0 || (!/^[0-9]+$/.test(inputNum.value))) {
        img.style.display="none";
        description.style.display="flex";
        description.style.marginBottom="1rem";
        description.style.height="5rem";
        frase.textContent="La masa es requerida(digitela en número)";
        frase.style.fontWeight="bold";
        frase.style.fontSize="25px";
        frase.style.textAlign="center";
        weight.style.display="none";
    }
    else if(list.value===planets[0].name){
        weight.style.display="none";
        img.style.display="none";
        description.style.display="flex";
        description.style.marginBottom="1rem";
        description.style.height="5rem";
        frase.style.fontWeight="bold";
        frase.style.fontSize="25px";
        frase.textContent="Escoge un planeta de las opciones";
        frase.style.textAlign="center";
    }else{
        info.style.width="90%";
        img.style.display="flex";
        img.style.width="17rem";
        img.style.height="17rem";
        description.style.display="flex";
        description.style.height="15rem";
        frase.style.margin="1rem";
        frase.style.textAlign="center";
        weight.style.display="flex";
        frase.textContent=list.value;
        for (let i = 1; i < planets.length; i++) {
            if(frase.textContent==planets[i].name){
                let peso=parseFloat(planets[i].gravity)*parseFloat(inputNum.value);
                let span=document.createElement("span");
                span.textContent=(planets[i].name).toUpperCase();
                span.style.fontWeight="bold";
                frase.innerText="El peso del objeto en el planeta ";
                frase.appendChild(span);
                weight.textContent=peso.toFixed(2)+" N.";
                img.style.backgroundImage=planets[i].img;
            }
        }
    }
})
