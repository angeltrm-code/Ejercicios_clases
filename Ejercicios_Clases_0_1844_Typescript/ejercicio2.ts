/* Exercicio 2

Vas crear unha clase de concatenar texto, para iso, crea dúas propiedades:

Texto_1
Texto_2
Inicialízalas dende o constructor mediante a instancia.

Crea un método onde crearás a concatenación e sacarás o texto por consola.
Instancia a clase e utiliza o método creado.
 */

class Concatenar{
    texto_1:string;
    texto_2:string;

    constructor(texto_1:string,texto_2:string){
        this.texto_1 = texto_1;
        this.texto_2 = texto_2;
    }

    metodoConcatenarTexto(){
        let resultado = this.texto_1 + this.texto_2
        console.log(resultado)
    }
}

let instanciaConcatenarTexto = new Concatenar('Este es el texto 1...', 'Aqui comienza el texto 2');

instanciaConcatenarTexto.metodoConcatenarTexto();

