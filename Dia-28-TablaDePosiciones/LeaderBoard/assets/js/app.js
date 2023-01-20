console.log("hola");
const error=document.querySelector(".error");
const sectionPlayers=document.querySelector(".players");

//inputs
const nameInput=document.getElementById("name");
const lastnameInput=document.getElementById("lastname");
const countryInput=document.getElementById("country");
const scoreInput=document.getElementById("score");

//button para agregar datos al sectionPlayers
const btnAdd=document.getElementById("btnAdd");

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
        // row.classList.add('animate__animated', 'animate__fadeInDown');
        players.appendChild(row);
    });
}
//eventListener
btnAdd.addEventListener("click",()=>{
    if(nameInput.value.length===0 || lastnameInput.value.length===0 || countryInput.value.length===0 || scoreInput.value.length===0){
        error.classList.add("active")
    }
    else{
        error.classList.remove("active");
        //Creacion de estructura html de la section players usando JS
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
        containerScore.innerText=`${scoreInput.value}`
        row.appendChild(containerScore);
        var containerBtns=document.createElement("div");
        containerBtns.className="container-btns";
        row.appendChild(containerBtns);
        var buttonDelete=document.createElement("button");
        buttonDelete.className="btnDelete";
        buttonDelete.innerHTML=`<ion-icon name="trash-outline"></ion-icon>`;
        containerBtns.appendChild(buttonDelete);
        var buttonMore=document.createElement("button");
        buttonMore.className="btnMore";
        buttonMore.innerText="+5";
        containerBtns.appendChild(buttonMore);
        var buttonLess=document.createElement("button");
        buttonLess.className="btnLess";
        buttonLess.innerText="-5";
        containerBtns.appendChild(buttonLess);
        ClearInputs();
    } 
    var btnsDelete=document.querySelectorAll(".btnDelete");
    btnsDelete.forEach((btnD)=>{
        btnD.addEventListener("click",(event)=>{
            event.currentTarget.closest('.row').remove();
        })
    })
    var btnsMore=document.querySelectorAll(".btnMore");
    btnsMore.forEach((btnM)=>{
        btnM.addEventListener("click",(e)=>{
            let score= e.currentTarget.closest('.row').querySelector('.container-score');
            score.classList.add('animate__animated', 'animate__fadeInDownBig');
            let newScore=parseInt(score.textContent);
            score.textContent=newScore+5;
        })
    })
    btnsMore.forEach((e)=>{
        e.addEventListener("click",sortRows);
    })
    var btnsLess=document.querySelectorAll(".btnLess");
    btnsLess.forEach((btnL)=>{
        btnL.addEventListener("click",(e)=>{
            let score= e.currentTarget.closest('.row').querySelector('.container-score').classList.add('animate__animated', 'animate__fadeInUpBig');
            let newScore=parseInt(score.textContent);
            score.textContent=newScore-5;
        })
    })
    btnsLess.forEach((e)=>{
        e.addEventListener("click",sortRows)
    })

})
btnAdd.addEventListener("click",sortRows);
