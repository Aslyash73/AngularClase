// desestructuracion de argumentos

export interface Producto {
    desc: string;
    precio: number;
}


const telefono : Producto = {
    desc: 'Nokia A1',
    precio: 150
}
const tableta : Producto = {
    desc: 'Airpad',
    precio: 350
}


function CalculaISV (productos: Producto[]):[number, number]{

    let total = 0;

    productos.forEach (({precio})=>{
    total += precio;    
})
    return [total, total * 0.15];
}
const articulos = [telefono, tableta];

const [total, isv] = CalculaISV(articulos);

console.log('Total:', total);
console.log('ISV:', isv)