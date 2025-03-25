/* Exercicio 3

	Aquí vamos seguir traballando co concepto de instancia.
Un exemplo moi clasico en clases, é crear unha clase ‘Coche’. Polo que:
Crea as seguintes variables de clase ou de estado:
marca, modelo, numPortas
Introduce na clase creada, os valores ‘marca’, ‘modelo’ e ‘numPortas’
Crea un método onde deberás sacar por consola ditos datos introducidos, ca seguinte mensaxe:
“O coche é un modelo … marca … e ten … portas”
 */

class Coche{

    private _marca:string;
    private _modelo:string;
    private _numPortas:number;

    constructor(marca:string,modelo:string,numPortas:number){
   
        this._marca = marca;
        this._modelo = modelo;
        this._numPortas = numPortas;

        this.marca = marca;  // 🔹 Usamos los setters para validaciones
        this.modelo = modelo;
        this.numPortas = numPortas;
    }

    metodoDatosCoche(){
        return(`O coche é un modelo ${this.modelo} da marca ${this.marca}, con ${this.numPortas} portas`);
    }

    get marca():string{
        return this._marca;
    }
    get modelo():string{
        return this._modelo;
    }
    get numPortas():number{
        return this._numPortas;
    }

    set marca(nuevaMarca: string){
        if (nuevaMarca.length < 2) {
            console.log("ERROR: La marca debe tener al menos 2 caracteres!");
            return;
        }
        this._marca = nuevaMarca;
    }
    set modelo(nuevoModelo: string){
        if(nuevoModelo.length < 1 ) {
            console.log("ERROR: el modelo debe contener al menos 2 cifras o letras")
            return;
        }
        this._modelo = nuevoModelo;
    }
    set numPortas(nuevoNumPortas: number){
        if(nuevoNumPortas < 2 ){
            console.log("ERROR: un coche debe tener al menos 2 puertas");
            return;
        }
        this._numPortas = nuevoNumPortas;
    }
}

let instanciaDatosCoche = new Coche ("Renault", "Megane", 5);

let datosCoche = instanciaDatosCoche.metodoDatosCoche();  //// esta linea se puede omitir, aunque viene bien si hace falta reutilizarlo

console.log(datosCoche);



let nuevoCoche = new Coche ("BMW","120D",5);
let datosNuevoCoche = nuevoCoche.metodoDatosCoche();

console.log(datosNuevoCoche)


