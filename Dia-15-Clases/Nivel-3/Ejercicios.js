/*
    1.Intentemos desarrollar un programa que calcule la medida de tendencia central de una muestra (media, mediana, moda) y la medida de variabilidad (rango, variación, desviación estándar). Además de esas medidas, encuentre el mínimo, el máximo, el recuento, el porcentaje y la distribución de frecuencias de la muestra. Puedes crear una clase llamada Statistics y crear todas las funciones que hacen cálculos estadísticos como método para la clase Statistics. Comprueba el resultado que aparece a continuación.
*/
class Statistics{
    constructor(ages){
        this.ages=ages;
    }
    count(){
        return ages.length;
    }
    sum(){
        return this.ages.reduce((acc,valA)=>(acc+valA),0);
    }
    min(){
        return this.ages.sort((a,b)=>(a-b))[0];
    }
    max(){
        return this.ages.sort((a,b)=>(b-a))[0];
    }
    range(){
        return this.max()-this.min();
    }
    mean(){
        return Math.round(this.sum()/this.count());
    }
    median(){
        const agesSort=ages.sort((a,b)=>(a-b));
        let idx=Math.floor(agesSort.length/2);
        if (this.count()%2==0) {
        console.log(agesSort[idx],agesSort[idx+1]);
        return (agesSort[idx]+agesSort[idx+1])/2;
        } 
        return agesSort[idx];
    }
    mode(){
        const agesSet=new Set(this.ages);
        const arrayAgesSet=[...agesSet];
        let res={};
        for (let i = 0; i < arrayAgesSet.length; i++) {
        let age=this.ages[i];
            if(res.hasOwnProperty(age)){
            res[age]++;
            }
            else{
                res[age]=1;
            }
        }
        const rpta=Object.entries(res).map(([mode,count])=>({mode,count})).sort((a,b)=>b.count-a.count);
        return rpta.slice(0,1);
    }
    var(){
        let sum=0;
        for (let i = 0; i < this.ages.length; i++) {
        sum+=Math.pow((this.ages[i]-this.mean()),2);
        }
        return sum/this.count();
    }
    std(){
        return (Math.sqrt(this.var())).toFixed(1);
    }   
    freqDist(){
        const res=[],frecuencias={},arrLen=this.count();
        for (const age of this.ages) {
            if(frecuencias[age]){
                frecuencias[age]++;
            }
            else{
                frecuencias[age]=1;
            }
        }
        for (const age in frecuencias) {
            res.push(
                [(frecuencias[age]/arrLen*100).toFixed(1),age]
            );
        }
        res.sort((a, b) => {
            if (a[0] !== b[0]) {
                return b[0] - a[0];
            }
            return b[1] - a[1];
        });
        return res;
    }
    describe(){
        return (
            `Count: ${this.count()}\nSum: ${this.sum()}\nMin: ${this.min()}\nMax: ${this.max()}\nRage: ${this.range()}\nMean: ${this.mean()}\nMedian: ${this.median()}\nMode: ${JSON.stringify(this.mode())}\nVariance: ${this.var()}\nStandart Desviation: ${this.std()}\nFrequency Distribution: ${JSON.stringify(this.freqDist())}`
          )
    }
}
let ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const Stat=new Statistics(ages);
console.log(Stat.count());
console.log(Stat.sum());
console.log(Stat.min());
console.log(Stat.max());
console.log(Stat.range());
console.log(Stat.mean())
console.log(Stat.median())
console.log(Stat.mode())
console.log(Stat.var())
console.log(Stat.std())
console.log(Stat.freqDist())
console.log(Stat.describe())
/*
    2.Crea una clase llamada PersonAccount. Tiene propiedades de nombre, apellido, ingresos, gastos y tiene métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos y su descripción.
*/
class PersonAccount{
    constructor(nombre,apellido,ingresos,gastos){
        this.nombre=nombre;
        this.apellido=apellido;
        this.ingresos=ingresos;
        this.gastos=gastos;
    }
    totalIncome(){
        return this.ingresos.reduce((acc,valA)=>acc+valA[0],0);
    }
    totalExpense(){
        return this.gastos.reduce((acc,valA)=>acc+valA[0],0);
    }
    accountInfo(){
        return `${this.nombre} ${this.apellido}-Ingresos:${this.totalIncome()},Gatos:${this.totalExpense()}`
    }
    addIncome(money,description){
        this.ingresos.push({money,description});
    }
    addExpense(money,description){
        this.gastos.push({money,description});
    }
    accountBalance(){
        return this.ingresos()-this.gastos();
    }
}
let ingresos=[{10:"A"},{20:"B"},{30:"C"}];
let gastos=[{1:"a"},{2:"b"},{3:"c"}];
const Obj1=new PersonAccount("Bryan","Arredondo",ingresos,gastos);
console.log(Obj1.totalExpense());
