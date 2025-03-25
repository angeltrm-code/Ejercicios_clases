/* Exercicio 1

Crea unha clase que conteña as seguintes propiedades:
nome
apelido1
apelido2
email
data de nacemento

Crea un método o cal utilizarás para sacar os datos introducidos na instancia pola consola.
 */

class Informacion {
    public nome : string;
    public apelido1 : string;
    public apelido2 : string;
    public email : string;
    public dataNacemento : string;

    constructor(nome:string,apelido1:string,apelido2:string,email:string,dataNacemento:string){
        this.nome = nome;
        this.apelido1 = apelido1;
        this.apelido2 = apelido2;
        this.email = email;
        this.dataNacemento = dataNacemento;
    }

    mostrarDatosAlumno(){
        console.log(
            `Los datos del alumno son: 
            ${this.nome}
            ${this.apelido1}
            ${this.apelido2}
            ${this.email}
            ${this.dataNacemento}`)
    }

}

let instanciaInformacion = new Informacion ('Angel', 'Toribio-Rodriguez','Martorell','Angeltoribiorodriguez@gmail.com','22/02/1990' )

instanciaInformacion.mostrarDatosAlumno();