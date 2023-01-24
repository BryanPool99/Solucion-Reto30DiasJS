console.log("hola mundo");
//variables
const text="Reto # 29 de 30 dias de JavaScript : Animacion de caracteres.";
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
const containerSpans=document.createElement("h1");
main.appendChild(containerSpans);
arrayText.forEach(e => {
    let span=document.createElement("span");
    span.innerHTML=e+space;
    containerSpans.appendChild(span);
});
setInterval(()=>{
    main.style.backgroundColor=rgbColor();
    containerSpans.style.fontFamily=FontRnd();
    document.querySelectorAll("span").forEach((e)=>{
        e.style.color=rgbColor();
    })
},2000)
/*
setInterval(()=>{
    tecnologies.forEach((e)=>{
        e.style.color=rgbColor();
        e.style.fontWeight="600";
    })
    cardsProjects.forEach((e)=>{
    e.style.border="5px solid transparent";
    e.style.backgroundImage=`linear-gradient(white, white),linear-gradient(315deg,${rgbColor()},50%,${rgbColor()})`;
})
},1000)
*/