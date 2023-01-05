const firsP=document.querySelector("p");
console.log(firsP.innerHTML);
//Obtener cada uno de los párrafos usando document.querySelector('#id') mediante su id
const fP=document.querySelector("#p-1");
console.log(fP);
const sP=document.querySelector("#p-2");
console.log(sP);
const tP=document.querySelector("#p-3");
console.log(tP);
const foP=document.querySelector("#p-4");
console.log(foP);
//Obtener todos los p como nodeList usando document.querySelectorAll(tagname) por su nombre de etiqueta
const allP=document.querySelectorAll(".parrafo");
console.log(allP);
//Recorrer nodeList y obtener el contenido del texto de cada párrafo
allP.forEach((e)=>console.log(e.innerHTML));
//Establecer un textContent para el párrafo del cuarto párrafo,Fourth Paragraph
foP.textContent="Este es el cuarto parrafo";
console.log(foP);
//Establezca los atributos id y class para todos los párrafos utilizando diferentes métodos de establecimiento de atributos
allP[0].setAttribute("class","NuevaClase");
allP[3].setAttribute("id","NuevoIdP4");
