/* Exercicio 3

Crea unha clase calculadora, onde deberás crear dúas variables privadas:
Crea diferentes métodos:

Suma
Resta
Multiplicación
División

Nun método ( que deberás crear ) o cal deberás introducir unha estructura ‘switch’
para seleccionar qué tipo de operación realizarás.
En ambos casos, cháma os métodos de maneira axeitada dende fora.
 */




class Calculadora{

    private valor1: number;
    private valor2: number;

    constructor(valor1:number,valor2:number){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }


    public sumar():number{
         return this.valor1 + this.valor2
        }

    public restar():number{
        return this.valor1 - this.valor2
    }

    public multiplicar():number{
        return this.valor1 * this.valor2
    }

    public dividir():number{
        if (this.valor2 === 0) {
            console.log("Error, no se puede dividir por 0.");
            return NaN;
        }
        return this.valor1 / this.valor2
    }

    metodoSwitch(eleccion: string){

        let resultado : number;
        switch(eleccion){

            case "suma": {
                resultado = this.sumar()
                return resultado;
            }

            case "resta": {
                resultado = this.restar()
                return resultado;
            }

            case "multiplicacion": {
                resultado = this.multiplicar()
                return resultado;
                }

            case "division": {
                resultado = this.dividir()
                return resultado;
                }
                
        }
        
    }
    

}


let instanciaCalculadora = new Calculadora(100,0);    /////aqui modifico los numeros que quiero utilizar

/////// aqui declaro los resultados y llamo a la calculadora y el metodo que necesito
let resultadoSuma = instanciaCalculadora.sumar();
let resultadoResta = instanciaCalculadora.restar();
let resultadoMultiplicacion = instanciaCalculadora.multiplicar();
let resultadoDivision = instanciaCalculadora.dividir();

///// aqui los console log para que muestre por consola, string seguido de la variable de arriba
console.log("resultado suma ", resultadoSuma);
console.log("resultado resta", resultadoResta);
console.log("resultado multiplicacion", resultadoMultiplicacion);
console.log("resultado division ",resultadoDivision);

///// opcion 2 con el switch, hace lo mismo que arriba pero debo modificar el string del metodoSwitch para hacer la operacion que quiera
let resultadoEleccion = instanciaCalculadora.metodoSwitch("suma");
console.log("resultado de la operacion escogida ",resultadoEleccion);

