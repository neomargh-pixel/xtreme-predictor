const animales = [
{nombre:"🐎 Caballo", frecuencia:18, atraso:9},
{nombre:"🐅 Tigre", frecuencia:15, atraso:6},
{nombre:"🦁 León", frecuencia:13, atraso:11},
{nombre:"🐓 Gallo", frecuencia:12, atraso:8},
{nombre:"🐊 Caimán", frecuencia:10, atraso:14}
];

function calcularPuntaje(a){
    return (a.frecuencia*3)+a.atraso;
}

function actualizarRanking(){

    animales.forEach(a=>{
        a.puntaje=calcularPuntaje(a);
    });

    animales.sort((a,b)=>b.puntaje-a.puntaje);

    const filas=document.querySelectorAll("table tr");

    for(let i=1;i<filas.length && i<=animales.length;i++){

        filas[i].cells[0].textContent=i;
        filas[i].cells[1].textContent=animales[i-1].nombre;
        filas[i].cells[2].textContent=animales[i-1].puntaje;

    }

}

document.querySelector("button").addEventListener("click",actualizarRanking);

actualizarRanking();
