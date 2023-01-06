//Creando el contenedor
let container=document.createElement("div");
container.className="container";
container.style.width="90%";
container.style.margin="0 auto";
container.style.display="flex";
container.style.flexDirection="column";
container.style.alignItems="center";
container.style.border="2px solid black"//temp
document.body.appendChild(container);
let title=document.createElement("h1");
title.textContent="Number Generator";
let h2=document.createElement("h2");
h2.textContent="Reto de 30 dias de JS:DOM-2";
let autor=document.createElement("h3");
autor.textContent="Autor:Bryan Arredondo";
//Crear container de numbers
let containerNumbers=document.createElement("div");
containerNumbers.className="container-numbers";
containerNumbers.style.width="95%";
containerNumbers.style.border="2px solid black"//temp
container.appendChild(title);
container.appendChild(h2);
container.appendChild(autor);
container.appendChild(containerNumbers);

