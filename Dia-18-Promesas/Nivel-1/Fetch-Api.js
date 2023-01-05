/*
    1.Lee la API de los países utilizando fetch e imprime el nombre del país, la capital, los idiomas, la población y la superficie.
*/
const countriesAPI = "https://restcountries.com/v2/all";
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        for (const i of data) {
            console.log(`Pais:${i.name},Capital:${i.capital}\nIdiomas:${i.languages.map(l => l.name).join(", ")},Poblacion:${i.population}\nSuperficie:${i.area}`);
        }
    })
    .catch(error => {
        console.error(error);
});