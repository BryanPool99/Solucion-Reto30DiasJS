const url="https://restcountries.com/v3.1/all"
const iconMoon=document.querySelector(".icon-moon");
const btnSwitch=document.querySelector(".switch");
const imgCountries=document.querySelectorAll(".card-img-top");
const placeholders=document.querySelectorAll(".card-body span");
const name=document.querySelectorAll(".name");
const population=document.querySelectorAll(".population");
const region=document.querySelectorAll(".region");
const capital=document.querySelectorAll(".capital");
btnSwitch.addEventListener("click",()=>{
    console.log("di click en switch");
    if(iconMoon.name=="moon"){
        iconMoon.name="moon-outline";
    }
    else{
        iconMoon.name="moon";
    }
});
setTimeout(()=>{
    console.log("ahora se desactivara los placeholders");
    placeholders.forEach((e)=>{
        e.classList.remove("placeholder");
    })
    fetchData();
},1000)
const fetchData = async () => {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      const filteredCountries = countries.filter(country => country.region !== "Antarctic");
      for (const key in filteredCountries) {
        imgCountries[key].src=filteredCountries[key].flags.png;
        name[key].innerHTML=filteredCountries[key].name.common;
        population[key].innerHTML=`Population: ${filteredCountries[key].population}`;
        region[key].innerHTML=`Region: ${filteredCountries[key].region}`;
        capital[key].innerHTML=`Capital: ${filteredCountries[key].capital}`;
      }
    } catch (err) {
      console.error(err);
    }
};
