

// funciones  argumentos opcionales y obligatorios

function sumar (a: number,b:number):number{
    return a + b;
}

const sumarFlecha = (a, b): number =>{

    return a+b; }

function multiplicar ( 
    numero: number, 
    otroNumero: number, 
    base: number = 2): number{
       return numero * base;
}

// const ressultado = multiplicar(10,5,7);
//  console.log(ressultado);

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;

}

function curar(personaje: PersonajeLOR, curarX): void{
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre : 'Strider',
    pv: 50,
    mostrarHp(){
        console.log('puntos de vida:' , this.pv);

    }
}

curar (nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp();