export default class ContactModel{
    nombre;
    apellido;
    email;
    isConected;

    constructor(nombre, apellido, email, isConected){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.isConected = isConected;
    }
}