/*
    NIVEL 1:
    Crear una closure que tenga una función interna
*/
function Ext() {
    let name="Bryan";
    function Int() {
        name+=" Pool"
        return name;
    }
    return Int;
}
const f=Ext();
console.log(f());
console.log(f());
console.log(f());
/*
    NIVEL 2:
    Crear una closure que tenga tres funciones internas
*/
function FuncionExterna(val) {
    function Sumar() {
      val++;
      return val;
    }
    function Restar() {
      val--;
      return val;
    }
    function Resetear() {
        return val=0;
    }
    return {
      Sumar: Sumar(),
      Restar: Restar(),
      Resetear:Resetear()
    };
  }
const innerFuncs = FuncionExterna(5); 
console.log(innerFuncs.Sumar);
console.log(innerFuncs.Restar);
console.log(innerFuncs.Resetear);
/*
    NIVEL 3:
    Crear una función de salida de personAccount. Tiene variables internas de nombre, apellido, ingresos y gastos. Tiene las funciones internas totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Los ingresos son un conjunto de ingresos y su descripción y los gastos son también un conjunto de gastos con su descripción.
*/
function personAccount(nombre,apellido) {
    let ingresos=[],gastos=[];
    function TotalIngresos() {
        return ingresos.reduce((acc,valA)=>acc+(valA.val),0);
    }
    function TotalGastos() {
        return gastos.reduce((acc,valA)=>acc+valA.val,0);
    }
    function accountInfo(){
        return `${nombre} ${apellido} tiene un total de ingresos de $${TotalIngresos()} y un total de gastos de $${TotalGastos()}.`;
    }
    function addIngresos(val,desc) {
        ingresos.push({val,desc});
    }
    function addGastos(val,desc) {
        gastos.push({val,desc});
    }
    function accountBalance() {
        return TotalIngresos() - TotalGastos();
    }
    return {
        accountInfo,addIngresos,addGastos,accountBalance
    };
}
const cuenta=personAccount("Bryan","Arredondo");
console.log(cuenta.accountInfo());
cuenta.addIngresos(500,"a");
console.log(cuenta.accountInfo());
cuenta.addGastos(200,"B");
console.log(cuenta.accountInfo());
console.log(cuenta.accountBalance());
