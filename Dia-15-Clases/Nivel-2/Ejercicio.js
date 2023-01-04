/*
    1.Sobrescribir el método que se crea en la clase Animal.
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
class Perro extends Animal{
    constructor(nombre,edad,color,piernas,genero){
        super(nombre,edad,color,piernas);
        this.genero=genero;
    }
    getDescription(){
        let descripcion="Wow wow wow wow";
        console.log(descripcion);
        return descripcion;
    }
}
const Perro1=new Perro("Masha",2,"negro",4,"Hembra");
Perro1.getDescription();