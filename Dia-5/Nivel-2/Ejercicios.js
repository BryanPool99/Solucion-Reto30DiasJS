/*
    1.
    const countries = [
        "Albania",
        "Bolivia",
        "Canada",
        "Denmark",
        "Ethiopia",
        "Finland",
        "Germany",
        "Hungary",
        "Ireland",
        "Japan",
        "Kenya",
    ];

    const webTechs = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
    ];
*/
/*
    2.Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array.

    let text ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
    console.log(words);
    console.log(words.length);

    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

    13
*/
let text ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const newT=text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()”“"…]/g,"");
console.log(newT);
const words=newT.split(" ")
console.log(words);
console.log(words.length);
/*
    3.En el siguiente carrito de compras agregue, elimine, edite artículos

    const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

    Agregue 'Meat' al comienzo de su carrito de compras si aún no se ha agregado
    Agregue 'Sugar' al final de su carrito de compras si aún no se ha agregado
    Elimine 'Honey' si es alérgico a la miel (honey)
    Modificar Tea a 'Green Tea'
*/
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart.splice(-2,1);
console.log(shoppingCart);
const idxT=shoppingCart.indexOf("Tea");
shoppingCart[idxT]="Green Tea"
console.log(shoppingCart);

/*
    4.En el array de países, verifique si 'Ethiopia' existe en el array si existe, imprima 'ETHIOPIA'. Si no existe agregar a la lista de países.
*/
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
];
const country="Ethiopia"
if(countries.includes(country)){
    console.log(country.toUpperCase());
}else{
    countries.push(country)
}
console.log(countries);
/*
    5.En el array webTechs, verifique si Sass existe en el array y si existe, imprima 'Sass es un preproceso de CSS'. Si no existe, agregue Sass al array e imprima el array.
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
const Sass="Sass";
if(webTechs.includes(Sass)){
    console.log("Sass es un preproceso de CSS");
}else{
    webTechs.push(Sass);
    console.log(webTechs);
}
/*
    6.Concatene las siguientes dos variables y guardelas en una variable fullStack.
    const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
    const backEnd = ["Node", "Express", "MongoDB"];

    console.log(fullStack);

    ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack=frontEnd.concat(backEnd);
console.log(fullStack);