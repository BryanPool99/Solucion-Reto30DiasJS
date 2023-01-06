//Creando el contenedor
let container=document.createElement("div");
container.className="container";
container.style.width="90%";
container.style.margin="0 auto";
container.style.display="flex";
container.style.flexDirection="column";
container.style.alignItems="center";
container.style.fontFamily="cursive";
document.body.appendChild(container);
//creando el h1
let title=document.createElement("h1");
title.textContent="Generador de números";
title.style.textAlign="center";
title.style.color="#21BF73"
container.appendChild(title);
//creando el h2
let h2=document.createElement("h2");
h2.textContent="Reto de 30 dias de JS:DOM-2";
h2.style.textAlign="center";
h2.style.textDecoration="underline";
h2.style.margin="0";
h2.style.fontWeight="300";
container.appendChild(h2);
//creando el h3
let autor=document.createElement("h3");
autor.textContent="Autor:Bryan Arredondo";
autor.style.textDecoration="underline";
autor.style.margin="0";
autor.style.fontWeight="300";
container.appendChild(autor);
//Creando container input
let containerInput=document.createElement("div");
containerInput.className="container-input";
containerInput.style.width="75%";
containerInput.style.padding="1rem";
container.appendChild(containerInput);
//Creando elemento error
let error=document.createElement("div");
error.className="error";
error.textContent="Error debe ingresar un número";
error.style.color="#FD5E53";
error.style.fontSize="14px";
error.style.display="none";
containerInput.appendChild(error);
//creando container para input y button
let generator=document.createElement("div");
generator.className="container-generator";
generator.style.display="flex";
generator.style.justifyContent="space-between";
generator.style.alignItems="center";
containerInput.appendChild(generator);
//creando input
let input=document.createElement("input");
input.style.width="65%";
input.style.margin=".5rem 0";
input.style.padding="1rem";
input.style.fontSize="20px";
input.style.border="2px solid #21BF73";
input.placeholder="Ingrese la cantidad (en numero) que desea generar";
generator.appendChild(input);
//creando button
let btnGenerator=document.createElement("button");
btnGenerator.textContent="Generar Numeros";
btnGenerator.classList="btnGenerator";
btnGenerator.style.width="25%";
btnGenerator.style.padding="1rem";
btnGenerator.style.border="none";
btnGenerator.style.borderRadius=".5rem";
btnGenerator.style.color="white";
btnGenerator.style.backgroundColor="#21BF73";
btnGenerator.style.fontSize="15px";
btnGenerator.style.fontWeight="900";
btnGenerator.style.cursor="pointer";
generator.appendChild(btnGenerator);
//Crear container de numbers
let containerNumbers=document.createElement("div");
containerNumbers.className="container-numbers";
containerNumbers.style.width="80%";
containerNumbers.style.display="flex";
containerNumbers.style.flexWrap="wrap";
containerNumbers.style.alignItems="center";
containerNumbers.style.justifyContent="center";
containerNumbers.style.margin="2rem";
container.appendChild(containerNumbers);

//Uso de los EventsListeners
btnGenerator.addEventListener("click",()=>{
    while (containerNumbers.firstChild) {
        containerNumbers.removeChild(containerNumbers.firstChild);
    }
    if (input.value.length==0 || (!/^[0-9]+$/.test(input.value))) {
        error.style.display="block";
    }
    else{
        error.style.display="none";
    }
    for (let i = 0; i <input.value; i++) {
        var number=document.createElement("div");
        number.className="number";
        number.textContent=i;
        number.style.width="15%";
        number.style.height="6rem";
        number.style.display="flex";
        number.style.flexWrap="wrap";
        number.style.alignItems="center";
        number.style.justifyContent="center";
        number.style.fontSize="35px";
        number.style.fontWeight="900"
        number.style.margin="5px";
        number.style.textAlign="center";
        number.style.color="white";
        if(i%2==0){
            number.style.backgroundColor="#21BF73";
        }
        else{
            number.style.backgroundColor="#FDDB3A";
        }
        function isPrime(numero) {
            if (numero == 0 || numero == 1 || numero == 4) return false;
            for (let x = 2; x < numero / 2; x++) {
                if (numero % x == 0) return false;
            }
            // Si no se pudo dividir por ninguno de los de arriba, sí es primo
            return true;
        }
        if(isPrime(i)){
            number.style.backgroundColor="#FD5E53";
        }
        containerNumbers.appendChild(number);
    }
});
