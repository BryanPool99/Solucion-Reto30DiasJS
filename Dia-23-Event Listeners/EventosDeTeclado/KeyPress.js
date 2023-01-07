console.log("Hola mundo");
//Creando contenedor principal
const container=document.createElement("div");
container.className="container-principal";
container.style.width="100vw";
container.style.height="100vh";
container.style.display="flex";
container.style.flexDirection="column";
container.style.alignItems="center";
container.style.justifyContent="center";
container.style.fontFamily="serif";
container.style.fontWeight="700";
container.style.color="#424242"
document.body.appendChild(container);
//creando div para ver que tecla esta presionando
const info=document.createElement("div");
info.className="info";
info.textContent="Presione cualquier tecla del teclado";
info.style.boxShadow="4px 4px 11px 4px rgba(166,163,163,0.54)";
info.style.width="70%";
info.style.textAlign="center";
info.style.padding="1rem";
info.style.margin="1rem";
info.style.fontSize="28px";
container.appendChild(info);
//creando el div para el keycode(numero)
const keycode=document.createElement("div");
keycode.className="keycode";
//uso de evento
document.body.addEventListener("keypress",(e)=>{
    keycode.style.boxShadow="4px 4px 11px 4px rgba(166,163,163,0.54)";
    keycode.style.width="5rem";
    keycode.style.padding="1rem";
    keycode.style.textAlign="center";
    keycode.style.fontSize="25px";
    container.appendChild(keycode);
    keycode.textContent=e.keyCode;
    let val=document.createElement("span");
    val.textContent=e.key;
    val.style.color="#5BBC7A";
    if(e.key==" "){
        val.textContent="space";
    }
    info.textContent="Tu haz presionado la tecla ";
    info.appendChild(val);
})