/* Exercicio 2

	Crea unha nova clase, crea varios métodos:

Un deles terá que devolver a suma de dous números.
Outro, deberás utilizar unha variable de entrada (non no constructor)
a ese método e visualizala por consola nese método.

Outro, utilizando o constructor, 
introduce unha variable de entrada a cal, deberás devolvela noutro método.
Utilizando a instancia á clase, saca por consola o texto ou número introducido.
 */

class Ejercicio2{

    public numero1;
    public numero2;
    public textoPrueba;
    

    constructor(numero1:number,numero2:number,textoPrueba:string){

        this.numero1 = numero1;
        this.numero2 = numero2;
        this.textoPrueba = textoPrueba;
    }

    metodoSumando(){
        return(this.numero1 + this.numero2);
        
    }
    
    metodoTextoPrueba(){
        return(this.textoPrueba)
    }
    


}



let instanciaSumando = new Ejercicio2(10,4,"holahola!");
let instanciaTextoPrueba = new Ejercicio2(10,4,"holaholaaaa");

let resultadoSumaEj2 = instanciaSumando.metodoSumando();
let contenidoTextoPrueba = instanciaTextoPrueba.metodoTextoPrueba();


console.log(resultadoSumaEj2);
console.log(contenidoTextoPrueba);