

// ANY SIGNIFICA LO QUE SEA

let habilidades:string[]= ['bASH', 'Counter', 'Healing'];

//objetos

interface Personaje{
    nombre: string,
    hp : number,
    habilidades : string[];
    puebloNatal?: string;
}

const personaje: Personaje= {
    nombre : 'strider',
    hp: 100,
    habilidades : ['Bash', 'Counter', 'Healing'] // personaje
}

personaje.puebloNatal = 'Pueblo paleta';

console.table(personaje);
