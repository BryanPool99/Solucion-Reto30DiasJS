const error=document.querySelector(".error");
const sectionPlayers=document.querySelector(".players");

//inputs
const nameInput=document.getElementById("name");
const lastnameInput=document.getElementById("lastname");
const countryInput=document.getElementById("country");
const scoreInput=document.getElementById("score");

//button para agregar datos al sectionPlayers
const btnAdd=document.getElementById("btnAdd");
function createContainerRow() {
        var row=document.createElement("div");
        row.className="row";
        sectionPlayers.appendChild(row);
        var containerFullDates=document.createElement("div");
        containerFullDates.className="container-Full_Date";
        var fullName=document.createElement("div");
        fullName.className="fullName";
        fullName.innerText=`${nameInput.value} ${lastnameInput.value}`;
        containerFullDates.appendChild(fullName);
        var date=document.createElement("div");
        date.className="date";
        var now=new Date();
        date.innerHTML=formatDate(now);
        containerFullDates.appendChild(date);
        row.appendChild(containerFullDates);
        var containerCountry=document.createElement("div");
        containerCountry.className="container-country";
        containerCountry.innerText=`${countryInput.value}`;
        row.appendChild(containerCountry);
        var containerScore=document.createElement("div");
        containerScore.className="container-score";
        var spanScore=document.createElement("span");
        spanScore.innerText=`${scoreInput.value}`
        containerScore.appendChild(spanScore)
        row.appendChild(containerScore);
        var containerBtns=document.createElement("div");
        containerBtns.className="container-btns";
        row.appendChild(containerBtns);
        var buttonDelete=document.createElement("button");
        buttonDelete.className="btnDelete";
        containerBtns.appendChild(buttonDelete);
        var buttonMore=document.createElement("button");
        buttonMore.className="btnMore";
        buttonMore.innerHTML="+5";
        containerBtns.appendChild(buttonMore);
        var buttonLess=document.createElement("button");
        buttonLess.className="btnLess";
        buttonLess.innerHTML="-5";
        containerBtns.appendChild(buttonLess);
}
//funcion limpiar inputs
function ClearInputs() {
    nameInput.value="";
    lastnameInput.value="";
    countryInput.value="";
    scoreInput.value="";
}
//funcion para dar formato a la fecha
function formatDate(date) {
    let options = { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric" };
    let formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
}
//funcion para ordenar
function sortRows() {
    var rows = Array.from(document.querySelectorAll(".row"));
    rows.sort(function(a, b) {
        var scoreA = parseInt(a.querySelector(".container-score").textContent);
        var scoreB = parseInt(b.querySelector(".container-score").textContent);
        return scoreB - scoreA;
    });

    var players = document.querySelector(".players");
    rows.forEach(function(row) {
        players.appendChild(row);
    });
}
//eventListener
btnAdd.addEventListener("click",()=>{
    if(nameInput.value.length===0 || lastnameInput.value.length===0 || countryInput.value.length===0 || scoreInput.value.length===0){
        error.classList.remove("animate__animated", "animate__heartBeat");
        error.offsetWidth = error.offsetWidth; // esta linea es para forzar un reflow
        error.classList.add("active");
        error.classList.add('animate__animated', 'animate__heartBeat');
    }
    else{
        error.classList.remove("active");
        createContainerRow();
        ClearInputs();
    } 
    sortRows();
})
sectionPlayers.addEventListener("click",(e)=>{
    if (e.target) {
        if (e.target.className=="btnDelete" || e.target.className=="hydrated") {
            e.target.closest(".row").classList.add("animate__animated","animate__hinge");
            setTimeout(function() {
                e.target.closest('.row').remove();
            }, 2000);
            //e.target.closest('.row').remove();
            sortRows();

        }else if(e.target.className=="btnMore"){
            let score= e.target.closest('.row').querySelector('.container-score span');
            let currentScore=parseInt(score.innerHTML);
            score.innerHTML=currentScore+5;
            sortRows();

        }else if(e.target.className=="btnLess"){
            let score= e.target.closest('.row').querySelector('.container-score span');
            let currentScore=parseInt(score.innerHTML);
            score.innerHTML=currentScore-5;
            sortRows();
        }
    }
})