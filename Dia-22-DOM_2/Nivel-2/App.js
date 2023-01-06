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
//creando el contenedor principal
let container=document.createElement("div");
container.className="container";
container.style.width="90%";
container.style.margin="0 auto";
container.style.display="flex";
container.style.flexDirection="column";
container.style.alignItems="center";
container.style.fontFamily="fangsong";
container.style.border="2px solid black";//tmp
document.body.appendChild(container);
//creando el h1
let title=document.createElement("h1");
title.textContent="Lista de los paises del mundo";
title.style.textAlign="center";
title.style.textTransform="uppercase";
container.appendChild(title);
//creando el div con class description(tendra como hijos a h3,p,p)
let description=document.createElement("div");
description.className="description";
description.style.textAlign="center";
container.appendChild(description);
//creando el h3
let countriesLen=document.createElement("h3");
countriesLen.textContent="Cantidad total de paises: "+countries.length;
description.appendChild(countriesLen);
//creando el p dle subtitulo
let p1=document.createElement("p");
p1.textContent="30 dias de JS:DOM-Dia2";
description.appendChild(p1);
//creando el p de autor
let p2=document.createElement("p");
p2.textContent="Autor: Bryan Arredondo";
description.appendChild(p2);
//creando el contenedor donde se encontraran los paises
let containerCountries=document.createElement("div");
containerCountries.className="container-countries";
containerCountries.style.border="2px solid black";//tmp
containerCountries.style.width="90%";
containerCountries.style.display="flex";
containerCountries.style.flexWrap="wrap";
containerCountries.style.alignItems="center";
containerCountries.style.justifyContent="center";
containerCountries.style.margin="2rem";
container.appendChild(containerCountries);
for (let i = 0; i < countries.length; i++) {
    let country=document.createElement("div");
    country.className="country";
    country.textContent=countries[i];
    country.style.boxShadow="1px 4px 10px 0px rgba(153,142,142,1)";
    country.style.width="10%";
    country.style.height="5rem";
    country.style.display="flex";
    country.style.alignItems="center";
    country.style.justifyContent="center";
    country.style.textAlign="center";
    country.style.margin=".5rem";
    country.style.padding="1rem";
    containerCountries.appendChild(country);
}