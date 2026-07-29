function obtenerHistorial(animal){

    return resultados
        .filter(r => r.animal === animal)
        .sort((a,b)=>new Date(b.fecha)-new Date(a.fecha));

}

function ultimosResultados(cantidad=10){

    return resultados
        .sort((a,b)=>new Date(b.fecha)-new Date(a.fecha))
        .slice(0,cantidad);

}
