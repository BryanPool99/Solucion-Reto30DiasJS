const arrowUp=document.querySelector(".arrow");
const menu=document.getElementById("menu");
const nav=document.querySelector(".nav");
const cardsProjects=document.querySelectorAll(".card-project");
const tecnologies=document.querySelectorAll(".used-technologies p")
function rgbColor() {
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}
console.log(cardsProjects);
menu.addEventListener("click",()=>{
    nav.classList.toggle("show");
    menu.classList.toggle("closed")
},false);
arrowUp.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
})
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

