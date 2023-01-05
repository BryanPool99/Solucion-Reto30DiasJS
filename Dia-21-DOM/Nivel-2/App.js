
/*
    1.Cambiar el estilo de cada párrafo mediante JavaScript (ej, color, fondo, borde, tamaño de la fuente, familia de la fuente)
*/
const parrafos=document.querySelectorAll("p");
parrafos[0].style.color="Green";
parrafos[0].style.backgroundColor="#147edc";
parrafos[0].style.border="2px solid black";
parrafos[0].style.fontSize="23px";
parrafos[0].style.fontFamily="fantasy";

parrafos[1].style.color="#45789d";
parrafos[1].style.backgroundColor="#ef581";
parrafos[1].style.border="2px solid green";
parrafos[1].style.fontSize="10px";
parrafos[1].style.fontFamily="serif";

parrafos[2].style.color="rgb(123,45,78)";
parrafos[2].style.backgroundColor="#789";
parrafos[2].style.border="2px solid red";
parrafos[2].style.fontSize="15px";
parrafos[2].style.fontFamily="cursive";

parrafos[3].style.color="hsl(15, 45%, 53%)";
parrafos[3].style.backgroundColor="#abc456";
parrafos[3].style.border="3px solid gray";
parrafos[3].style.fontSize="30px";
parrafos[3].style.fontFamily="monospace";
/*
    2.Seleccione todos los párrafos y haga un bucle a través de cada uno de los elementos y dé al primer y tercer párrafo un color verde, y al segundo y cuarto párrafo un color rojo
*/
for (let i = 0; i < parrafos.length; i++) {
    if(i%2==0){
        parrafos[i].style.color="green";
    }
    else{
        parrafos[i].style.color="red";
    }
}
/*
    3.Establecer textContent, id y class a cada párrafo
*/
parrafos[0].textContent="Cambien el contendio del primer parrafo";
parrafos[0].setAttribute("id","p-1");
parrafos[0].setAttribute("class","p");

parrafos[1].textContent="Segundo parrafo cambiado";
parrafos[1].setAttribute("id","p-2");
parrafos[1].setAttribute("class","p");

parrafos[2].textContent="Contenido nuevo en tercer parrafo";
parrafos[2].setAttribute("id","p-3");
parrafos[2].setAttribute("class","p");

parrafos[3].textContent="Cambio de texto en el ultimo parrafo";
parrafos[3].setAttribute("id","p-4");
parrafos[3].setAttribute("class","p");