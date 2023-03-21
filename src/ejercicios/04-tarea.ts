interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

function Heroe(heroe: SuperHeroe, Sheroe: number): void {
    heroe.edad += Sheroe;
    console.log(heroe);
}

const superHeroe: SuperHeroe = {
    nombre: 'Spederman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion: function() {
        return this.nombre + ', ' + this.direccion.calle + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);