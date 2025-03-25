/* Crea unha clase, dentro da mesma:

Crea un método/función ‘mostrarTextoPorConsola’:
Deberemos pasar un texto a través do constructor, é dicir, deberemo ter creado unha variable ( de clase ou estado ou instancia )
Dito método deberá escribilo texto insertado por consola.

Crea un método/función ‘mostrarNumeroPorConsola’, segue os mesmos pasos que o anterior, pero pasándolle un número.

Crea un método/función ‘sumaONumero’, inserta un número o cal deberás usalo para sumar neste método, é dicir, ‘this.numero + 5’ por exemplo. 
Visualiza dito número por consola, tal como temos feito nos exemplos vistos.

Lembra : 
Instanciala clase e pasarlle as variables
Crear unha variable para gardalo texto ou número no interior da clase (variable clase ou instancia …)
Executa o método onde se mostra o texto
 */


class Texto{

    public valor1;  ////declaro la variable

    constructor(valor1:string)   ////creo el constructor con la variable y el tipo
        {
            this.valor1= valor1;   ///// la convierto para usarla con this.
        }

    mostrarTextoPorConsola(){    //// creo el metodo/funcion y pongo un return para que lo devuelva por consola
        return(this.valor1)
       
    }
}



class Numero{

    public valor2;

    constructor(valor2 : number)
        {
            this.valor2 = valor2;
        }

        mostrarNumeroPorConsola(){
            return(this.valor2)
        }

        sumaNumero(){
            return(this.valor2 + 5)
        }
}

let instanciaMostrarTexto = new Texto('holaaaaaaa')    ///// creo la instancia del texto
let contenidoTexto = instanciaMostrarTexto.mostrarTextoPorConsola();    //// creo una variable para unir la instancia y el metodo/funcion
console.log(contenidoTexto)   /// finalmente un console.log para mostrarlo por consola

let instanciaMostrarNumero = new Numero(5)
let contenidoNumero = instanciaMostrarNumero.mostrarNumeroPorConsola();
console.log(contenidoNumero)

let instanciaSuma = new Numero(10)
let resultadoSuma2 = instanciaSuma.sumaNumero();
console.log(resultadoSuma2)
