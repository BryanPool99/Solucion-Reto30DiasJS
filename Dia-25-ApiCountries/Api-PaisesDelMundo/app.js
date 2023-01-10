const lenCountries=document.querySelector(".LenCountries");
const container_PL=document.querySelector(".container-PL");
const totalP=document.querySelector(".count");
const btnP=document.querySelector(".btn-P");
const btnL=document.querySelector(".btn-L");
const SelectText=document.querySelector(".SelectText");
const url = "https://restcountries.com/v2/all"; // api de países
const populationData = async () => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        lenCountries.textContent=countries.length;
        const sortPopulationCountries=countries.sort((a,b)=>b.population-a.population);
        const mostTenPopulation=sortPopulationCountries.slice(0,10);
        for (const i in mostTenPopulation) {
            let data=document.createElement("div");
            data.className="data";
            container_PL.appendChild(data);
            let country=document.createElement("div");
            country.className="country";
            country.textContent=countries[i].name;
            data.appendChild(country);
            let grafic=document.createElement("div");
            grafic.className="grafic";
            let porcent=document.createElement("div");
            porcent.style.padding="1rem";
            porcent.style.backgroundColor="#FFA500";
            let widthP=(countries[i].population/countries[0].population).toFixed(5)*100+"%";
            porcent.style.width=widthP;
            grafic.appendChild(porcent);
            data.appendChild(grafic);
            let count=document.createElement("div");
            count.className="count";
            count.textContent=new Intl.NumberFormat().format(countries[i].population);
            if(screen.width<=768){
                porcent.textContent=count.textContent;
                porcent.style.textAlign="center";
            }
            data.appendChild(count);
        }
    } catch (err) {
        console.error(err);
    }
};
btnP.addEventListener("click",()=>{
    for (let i =container_PL.childNodes.length-1; i >0 ; i--) {
        container_PL.childNodes[i].remove();
    }
    SelectText.textContent="Poblacion";
    populationData();
})
btnL.addEventListener("click",()=>{
    for (let i =container_PL.childNodes.length-1; i >0 ; i--) {
        container_PL.childNodes[i].remove();
    }
    SelectText.textContent="Idiomas";
    languageData();
})
function mostSpokenLanguages(countries) {
    
    let arrayLanguages=[];
        let languages = new Map();
        for (const i in countries) {
            arrayLanguages.push(countries[i].languages[0].name);
        }
        for (const language of arrayLanguages) {
            if (languages.has(language)) {
                languages.set(language, languages.get(language) + 1);
            }else {
                languages.set(language, 1);
            }
        }
        let sortedLanguages = [...languages].sort((a, b) => b[1] - a[1]);
  
    return sortedLanguages.slice(0, 10);
  }
const languageData=async()=>{
    try {
        const response = await fetch(url);
        const countries = await response.json();
        let languages =mostSpokenLanguages(countries);
        const totalLanguages=languages.reduce((acc,valA)=>acc+valA[1],0);
        for (const i in languages) {
            let data=document.createElement("div");
            data.className="data";
            container_PL.appendChild(data);
            let country=document.createElement("div");
            country.className="country";
            country.textContent=languages[i][0];
            data.appendChild(country);
            let grafic=document.createElement("div");
            grafic.className="grafic";
            let porcent=document.createElement("div");
            porcent.style.padding="1rem";
            porcent.style.backgroundColor="#FFA500";
            let widthP=(languages[i][1]/languages[0][1]).toFixed(5)*100+"%";
            console.log(widthP);
            porcent.style.width=widthP;
            grafic.appendChild(porcent);
            data.appendChild(grafic);
            let count=document.createElement("div");
            count.className="count";
            count.textContent=languages[i][1];
            if(screen.width<=768){
                porcent.textContent=count.textContent;
            }
            data.appendChild(count);
        }

    } catch (error) {
        console.error(error);
    }
}
