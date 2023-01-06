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
let title=document.createElement("h1");
title.textContent="Números primos,pares e impares";
title.style.textAlign="center";
let h2=document.createElement("h2");
h2.textContent="Reto de 30 dias de JS:DOM-2";
h2.style.textAlign="center";
h2.style.textDecoration="underline";
h2.style.margin="0";
h2.style.fontWeight="300";
let autor=document.createElement("h3");
autor.textContent="Autor:Bryan Arredondo";
autor.style.textDecoration="underline";
autor.style.margin="0";
autor.style.fontWeight="300";
//Crear container de numbers
let containerNumbers=document.createElement("div");
containerNumbers.className="container-numbers";
containerNumbers.style.width="80%";
containerNumbers.style.border="2px solid black"//temp
containerNumbers.style.display="flex";
containerNumbers.style.flexWrap="wrap";
containerNumbers.style.alignItems="center";
containerNumbers.style.justifyContent="center";
containerNumbers.style.margin="2rem"
container.appendChild(title);
container.appendChild(h2);
container.appendChild(autor);
container.appendChild(containerNumbers);
for (let i = 0; i <=101; i++) {
    let number=document.createElement("div");
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

