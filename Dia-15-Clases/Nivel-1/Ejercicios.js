/*
    1.Crea una clase de Animal. La clase tendrá propiedades de nombre, edad, color, piernas y creará diferentes métodos.
*/
class Animal{
    constructor(nombre,edad,color,piernas){
        this.nombre=nombre;
        this.edad=edad;
        this.color=color;
        this.piernas=piernas;
    }
    get getNombre(){
        return this.nombre;
    }
    get getEdad(){
        return this.edad
    }
    get getColor(){
        return this.color;
    }
    set setEdad(edad){
        this.edad=edad;
    }
    getDescription(){
        let descripcion=`Mi mascota se llama ${this.getNombre}, y tiene ${this.getEdad} años de edad,asimismo es de color ${this.getColor} y es una mascota de ${this.piernas} patas.`
        return descripcion;
    }
} 
const animal1=new Animal("Logan",2,"Negro",4);
console.log(animal1.getDescription());
const animal2=new Animal("Coto",2,"Negro",4);
console.log(animal2.getDescription());
const animal3=new Animal("Gatubela",5,"Blanco y negro",4);
console.log(animal3.getDescription());
/*
    2.Cree una clase hijo de Perro y Gato a partir de la Clase Animal.
*/
class Perro extends Animal{
    constructor(nombre,edad,color,piernas,genero){
        super(nombre,edad,color,piernas);
        this.genero=genero;
    }
    getDescription(){
        let descripcion=`Mi perro se llama ${this.getNombre},su genero es ${this.genero} y tiene ${this.getEdad} años de edad,asimismo es de color ${this.getColor} y es una mascota de ${this.piernas} patas.`
        return descripcion;
    }
}
const perro=new Perro("barakus",4,"Marron",4,"Macho");
console.log(perro.getDescription());
class gato extends Animal{
    constructor(nombre,edad,color,piernas,genero){
        super(nombre,edad,color,piernas);
        this.genero=genero;
    }
    getDescription(){
        let descripcion=`Mi gato se llama ${this.getNombre},su genero es ${this.genero} y tiene ${this.getEdad} años de edad,asimismo es de color ${this.getColor} y es una mascota de ${this.piernas} patas.`
        return descripcion;
    }
}
const gato1=new gato("Capachum",9,"Gringo",4,"macho");
console.log(gato1.getDescription());