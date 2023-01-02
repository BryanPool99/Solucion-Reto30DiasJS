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
/*
    1.Copia el array countries (Evita mutaciones)
*/
const copyCountries = countries.slice();
console.log(copyCountries);
/*
    2.Los arrays son mutables. Crea una copia del array que no modifique el original. Ordena la copia del array y guárdala en una variable sortedCountries
*/
const sortedCountries = copyCountries.sort();
console.log(sortedCountries);
/*
    3.Ordena el array webTechs y el array mernStack
*/
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];
const webTechsSorted=webTechs.sort();
console.log(webTechsSorted);
const mernStack = ["MongoDB", "Express", "React", "Node"];
const mernStackSorted=mernStack.sort();
console.log(mernStackSorted);
/*
    4.Extrae todos los países que contengan la palabra 'land' del array countries e imprimela como un array
*/
const LandCountries=[];
for (const country of countries) {
    if(country.includes("land")){
        LandCountries.push(country);
    }
}
console.log(LandCountries);
/*
    5.Encuentra el país que contiene la mayor cantidad de caracteres en el array countries
*/
let max=0;
for (const i of countries) {
    let len=i.length;
    var item;
    if(len>max){
        max=len;
        item=i;
    }
}
console.log(item,"con ",max," letras");
/*
    6.Extrae todos los países que contienen la palabra 'land' del array countries e imprimela como un array
*/
console.log(LandCountries);
/*
    7.Extrae todos los países que contengan solo cuatro caracters del array countries e impremela como un array
*/
const len=4;
const lenFourCountries=[];
for (const item of countries) {
    if(item.length==len){
        lenFourCountries.push(item);
    }
}
console.log(lenFourCountries);
/*
    8.Extrae todos los paíse que contengan dos o más palabras del array countries e imprimela como un array
*/
const space=" ";
const CountriesTwoOrMoreWords=[];
for (const i of countries) {
    if(i.includes(space)){
        CountriesTwoOrMoreWords.push(i);
    }
}
console.log(CountriesTwoOrMoreWords);
/*
    9.Convertir el array countries y poner en mayúscula cada país y almacenalo en un array
*/
const countriesUpper=[];
for (const val of countries) {
    countriesUpper.push(val.toUpperCase());
}
console.log(countriesUpper);
