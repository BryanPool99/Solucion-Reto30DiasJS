const iconMoon=document.querySelector(".icon-moon");
const btnSwitch=document.querySelector(".switch");
btnSwitch.addEventListener("click",()=>{
    console.log("di click en switch");
    if(iconMoon.name=="moon"){
        iconMoon.name="moon-outline";
    }
    else{
        iconMoon.name="moon";
    }
});