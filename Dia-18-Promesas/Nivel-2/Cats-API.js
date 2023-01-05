/*
    1.Imprime todos los nombres de los gatos en la variable catNames.
*/
const catsAPI = "https://api.thecatapi.com/v1/breeds";
let catNames=[];
fetch(catsAPI)
    .then(response=>response.json())
    .then((data)=>{
        for (const i of data) {
            console.log(i.name);
            catNames.push(i.name);
        }
    })
    .catch((e)=>console.log(e));