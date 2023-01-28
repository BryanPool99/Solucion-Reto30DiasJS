const url="https://restcountries.com/v3.1/all";
const query = new URLSearchParams(window.location.search)
const params = query.get('name')
console.log(params)
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    fetchData()
});
const fetchData = async () => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        const dataDetails = data.filter(country => country.name.common === params);
        console.log(dataDetails);
        cards(dataDetails);
        //formularioReal(data) // activa formulario search
        //filtrarDatos(data) // activa filtros region
    } catch (error) {
        console.log(error)
    }
}
const section=document.querySelector(".row.section");
const cards=(data)=>{
    let elementos="";
    for (let [idx,item] of data.entries()) {
      elementos+=`
      <div class="card m-2 p-0 mb-4" aria-hidden="true" onclick="window.location.href='details.html?name=${item.name.common}'">
        <img src="${item.flags.svg}" class="card-img-top" alt="Bandera ${item.name.common}">
        <div class="card-body">
          <h5 class="card-title">
            <span class="col-12">${item.name.common}</span>
          </h5>
          <p class="card-text">
            <span class="col-12">Population: ${item.population}</span><br>
            <span class="col-10">Region: ${item.region}</span><br>
            <span class="col-8">Capital: ${item.capital}</span><br>
          </p>
        </div>
      </div>
      `
      section.innerHTML = elementos;
    }
  }