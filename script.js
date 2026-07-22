const animales = [
{nombre:"Caballo", frecuencia:18, atraso:9},
{nombre:"Tigre", frecuencia:15, atraso:6},
{nombre:"León", frecuencia:13, atraso:11},
{nombre:"Gallo", frecuencia:12, atraso:8},
{nombre:"Caimán", frecuencia:10, atraso:14}
];

function calcularPuntaje(animal){
    return (animal.frecuencia * 3) + animal.atraso;
}

animales.forEach(a=>{
    a.puntaje = calcularPuntaje(a);
});

animales.sort((a,b)=>b.puntaje-a.puntaje);

console.log(animales);
