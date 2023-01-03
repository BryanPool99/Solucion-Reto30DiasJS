//ESTRUCTURA
    try {
    // código que puede arrojar un error
    } catch (err) {
        // código a ejecutar si se produce un error
    } finally {
        // código que se ejecutará independientemente de que se produzca un error o no
    }
//------------------------------------------------------------------
  try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
  } catch (err) {
    console.log(err);
  }

  try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
  } catch (err) {
    console.error(err); // podemos utilizar console.log() o console.error()
  } finally {
    console.log("In any case I will be executed");
  }
/*throw "Error2"; // genera una excepción con un valor de cadena
throw 42; // genera una excepción con el valor 42
throw true; // genera una excepción con el valor true
throw new Error("Required"); // genera un objeto de error con el mensaje de Requerido
const throwErrorExampleFun = () => {
    let message;
    let x = 5;
    try {
      if (x == "") throw "empty";
      if (isNaN(x)) throw "not a number";
      x = Number(x);
      if (x < 5) throw "too low";
      if (x > 10) throw "too high";
    } catch (err) {
      console.log(err);
    }
  };
throwErrorExampleFun();
*/
//ReferenceError: Se ha producido una referencia ilegal. Se lanza un ReferenceError si utilizamos una variable que no ha sido declarada.
let firstName = "Asabeneh";
//let fullName = firstName + " " + lastName;
//console.log(fullName);
//SyntaxError: Se ha producido un error de sintaxis
/*let square = 2 x 2
console.log(square)

console.log('Hello, world');
*/
//TypeError: Se ha producido un error sobre el tipo
let num = 10;
console.log(num.toLowerCase());