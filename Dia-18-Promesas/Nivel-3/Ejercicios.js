/*
    1.Lee el api de los gatos y encuentra el peso medio del gato en unidad métrica.
*/
const catsAPI = "https://api.thecatapi.com/v1/breeds";
let weightsP=[]
const fetchData = async () => {
    try {
        const response = await fetch(catsAPI);
        const data = await response.json();
        for (const item of data) {
            let val=item.weight.metric;
            const patron=/\d+/g;
            const numbers=val.match(patron);
            let sum=numbers.reduce((acc,valA)=>acc+parseInt(valA),0);
            weightsP.push(sum/(Object.keys(item.weight).length))
            console.log("El gato "+item.name+" tiene peso promedio de "+(sum/2));
        }
        let PromWeights=((weightsP.reduce((a,v)=>a+v,0))/weightsP.length).toFixed(2);
        console.log("El promedio de peso de todos los gatos es: "+PromWeights);
    } catch (err) {
        console.error(err);
    }
};  
fetchData();
/*
    2.Lee la api de países y descubre los 10 países más grandes
*/
const countriesAPI = "https://restcountries.com/v2/all";

const TenLargestCountries= async () =>{
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json();
        const sortAreaCountries=data.sort((a,b)=>b.area-a.area);
        const mostTenArea=sortAreaCountries.slice(0,10);
        console.log(mostTenArea.map(country=>`${country.name}:${country.area}`));
    } catch (error) {
        console.log(error);
}
}
TenLargestCountries();
/*
    3.Lea la api de los países y cuente el número total de lenguas del mundo utilizadas como oficiales.
*/
const CountWorldLanguages=async()=>{
    try {
        const response = await fetch(countriesAPI);
        const data = await response.json();
        const languagesLen=data.map((c)=>c.languages.length);
        const cantLanguages=languagesLen.reduce((a,b)=>a+b,0);
        console.log("Cantidad  total de idiomas");
        console.log(cantLanguages);
        const languages=data.map((c)=>`Pais:${c.name}/Cantidad de idiomas:${c.languages.length}`)
        console.log("Cantidad de idiomas de cada pais");
        console.log(languages);
        
    } catch (error) {
        console.log(error);
    }
}
CountWorldLanguages();