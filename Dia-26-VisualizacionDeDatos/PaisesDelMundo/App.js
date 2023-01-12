const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
const main=document.querySelector("main");
const btnStart=document.querySelector(".btn-Start");
const btnInclude=document.querySelector(".btn-Includes");
const btnSort=document.querySelector(".btn-Sort");
const imgSort=document.querySelector(".btn-Sort>img");
const input=document.querySelector(".input");
const LenCountries=document.querySelector(".LenCountries");
const p_Filter=document.querySelector(".p-filter");
const textSelectBtn=document.querySelector(".SelectBtn");
const text_Input=document.querySelector(".text-Input");
const lenFilter=document.querySelector(".LenFilter");
LenCountries.textContent=countries.length;
countries.forEach((e)=>{
    let card=document.createElement("div");
    card.className="cardCountry";
    card.textContent=e;
    main.appendChild(card);
});
btnSort.addEventListener("click",()=>{
    let cardCountry=main.querySelectorAll(".cardCountry");
    for (let i = cardCountry.length - 1; i >= 0; i--) {
        main.appendChild(cardCountry[i]);
    }
    btnSort.classList.toggle("activo"); 
    if (btnSort.classList.contains("activo")) {
        imgSort.src="./Img/iconoSortZA.png";
    }else{
        imgSort.src="./Img/iconoSortAZ.png"
    }
});
btnStart.addEventListener("click",()=>{
    textSelectBtn.textContent="comienzan con ";
    btnStart.classList.add("activo");
    btnInclude.classList.remove("activo");
    btnSort.classList.remove("activo");
    input.value="";
    input.addEventListener("input",(e)=>{
        let value=e.target.value.toUpperCase();
        text_Input.textContent=value;
        if(value.length!==0){
            p_Filter.classList.add("activo");
            let countFS=0;
            let cardCountry=main.querySelectorAll(".cardCountry");
            for (let i = 0; i < cardCountry.length; i++) {
                main.removeChild(cardCountry[i]);
            }
                countries.filter(i =>{
                if(i.toUpperCase().startsWith(value)){
                    var card=document.createElement("div");
                    card.className="cardCountry";
                    card.textContent=i;
                    main.appendChild(card);
                    countFS++;
                }
            });
            lenFilter.textContent=countFS;
        }else{
            p_Filter.classList.remove("activo");
            let cardCountry=main.querySelectorAll(".cardCountry");
            for (let i = 0; i < cardCountry.length; i++) {
                main.removeChild(cardCountry[i]);
            }
            countries.forEach((e)=>{
                let card=document.createElement("div");
                card.className="cardCountry";
                card.textContent=e;
                main.appendChild(card);
            });
        }
    });
})
btnInclude.addEventListener("click",()=>{
    textSelectBtn.textContent="contienen ";
    btnInclude.classList.add("activo");
    btnStart.classList.remove("activo");
    btnSort.classList.remove("activo");
    input.value="";
    input.addEventListener("input",(e)=>{
        
        let value=e.target.value.toUpperCase();
        text_Input.textContent=value;
        if(value.length!==0){
            p_Filter.classList.add("activo")
            let cardCountry=main.querySelectorAll(".cardCountry");
            for (let i = 0; i < cardCountry.length; i++) {
                main.removeChild(cardCountry[i]);
            }
            let countFI=0;
            countries.filter(i =>{
                if(i.toUpperCase().includes(value)){
                    let card=document.createElement("div");
                    card.className="cardCountry";
                    card.textContent=i;
                    main.appendChild(card);
                    countFI++;
                }
            });
            lenFilter.textContent=countFI;
        }else{
            p_Filter.classList.remove("activo");
            let cardCountry=main.querySelectorAll(".cardCountry");
            for (let i = 0; i < cardCountry.length; i++) {
                main.removeChild(cardCountry[i]);
            }
            countries.forEach((e)=>{
                let card=document.createElement("div");
                card.className="cardCountry";
                card.textContent=e;
                main.appendChild(card);
            });
        }
    });
})