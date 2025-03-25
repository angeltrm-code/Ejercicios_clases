/* Exercicio 1

Crea unha clase con diferentes métodos:
Un dos métodos deberá conter un obxeto tipo este: 

Lembra que para acceder, por exemplo a “presencial”,
deberemos utilizar o “.”, 
a medida que avanzamos entre os diferentes obxetos debemos utilizalo.


Se quero utilizar o obxeto definido previamente en calquer método interno da clase,
¿cómo debo definilo?.
Crea o método de tal xeito que este visualice por consola os seus valores utilizando un blucle tipo ‘for … in’

Crea un método que lea un array de obxetos,este array deberás introducilo dende fora,
é dicir, este novo método terá unha variable de entrada.
Cómo farías para que esta variable a poda ler outro método?
Crea un método onde lea esta variable
Executa o método creado no paso anterior, onde visualices dito array   */

class Alumno{
    public nombre:string;
    public apellido:string;
    public edad:number;
    public asignatura:string;
    public nota:number;

    constructor(nombre:string,apellido:string,edad:number,asignatura:string,nota:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.asignatura = asignatura;
        this.nota = nota;
    }

    metodoDatosAlumno(){
        return(`Los datos del alumno son los siguientes:
           Nombre:     ${this.nombre}
           Apellido:   ${this.apellido}
           Edad:       ${this.edad}
           Asignatura: ${this.asignatura}
           Nota:       ${this.nota}`)
        }
    
    metodoAsistencia(){
        const asistencia = {
                    diasTotales: 10,
                    diasAsistidos: 8,
                    faltasSinJustificar: 2
        };

     /*    for (let clave in asistencia) { 
            console.log(clave, asistencia[clave]); */   ///no entiendo esto ni se solucionarlo

        return(asistencia)
    }

    

    



}

let instanciaDatosAlumno = new Alumno("Angel","Toribio",35,"Programacion",4)
let datosAlumno = instanciaDatosAlumno.metodoDatosAlumno();
let asistenciaAlumno = instanciaDatosAlumno.metodoAsistencia();

console.log(datosAlumno);
console.log(asistenciaAlumno);
