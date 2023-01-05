/*
    NIVEL 1
*/
/*
    Guarda tu nombre, apellido, edad, país y ciudad en tu navegador localStorage.
*/
localStorage.setItem("nombre","Bryan");
localStorage.setItem("apellido","Arredondo");
localStorage.setItem("edad",23);
localStorage.setItem("pais","Peru");
localStorage.setItem("ciudad","Arequipa");
console.log(localStorage);

/*
    NIVEL 2
*/
/*
    Cree un objeto estudiante. El objeto estudiante tendrá el nombre, el apellido, la edad, las habilidades, el país, las claves inscritas y los valores para las claves. Almacena el objeto estudiante en el localStorage de tu navegador.
*/
const estudiante={
    nombre:"Jose",
    apellido:"Quiñones",
    edad:54,
    skills:["HTML5","CSS3","Scss","JS","SQL"],
    pais:"Peru",
}
localStorage.setItem("estudiante",JSON.stringify(estudiante));
const student=JSON.parse(localStorage.getItem("estudiante"));
console.log(student);

/*
    NIVEL 3
*/
/*
    Crear un objeto llamado personAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.
*/
const personAccount={
    nombre:"Pool",
    apellido:"Ovalle",
    ingresos:[
        { description: 'salary', amount: 2000 },
        { description: 'freelance work', amount: 1000 }
    ],
    gastos:[
        { description: 'rent', amount: 1500 },
        { description: 'utilities', amount: 200 }
    ],
    totalIngresos(){
        return this.ingresos.reduce((acc,valA)=>acc+(valA.amount),0);
    },
    totalGastos(){
        return this.gastos.reduce((acc,valA)=>acc+valA.amount,0);
    },
    accountInfo(){
        return `${this.nombre} ${this.apellido} tiene un total de ingresos de $${this.totalIngresos()} y un total de gastos de $${this.totalGastos()}.`;
    },
    addIngresos(description, amount){
        this.ingresos.push({description,amount});
    },
    addGastos(description, amount){
        this.gastos.push({description,amount});
    },
    accountBalance(){
        return `${this.nombre} ${this.apellido} tiene un balance de  $${this.totalIngresos() - this.totalGastos()}.`;
    }
}
localStorage.setItem("personAccount",JSON.stringify(personAccount));
const personA=JSON.parse(localStorage.getItem("personAccount"));
console.log(personA);