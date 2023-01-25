//variables
const text="Reto # 29 de 30 dias de JavaScript: Animacion de caracteres.";
const arrayText=text.split(" ");
const arrayFonts=[
    'Roboto','Unbounded','Montserrat','Ubuntu','Anton','Lobster'
];
const space="&nbsp;";
//funciones
function rgbColor() {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
function FontRnd() {
    let n=Math.floor(Math.random()*arrayFonts.length);
    return arrayFonts[n];
}
//estrucutra html
const main=document.createElement("main");
document.body.appendChild(main);
arrayText.forEach(e => {
    let parrafo=document.createElement("p");
    main.appendChild(parrafo)
    for (let i = 0; i < e.length; i++) {
        let span=document.createElement("span");
        span.innerHTML=e[i];
        parrafo.appendChild(span);
    }
});
setInterval(()=>{
    main.style.backgroundColor=rgbColor();
    main.style.fontFamily=FontRnd();
    document.querySelectorAll("span").forEach((e)=>{
        e.style.color=rgbColor()
    })
},2000)