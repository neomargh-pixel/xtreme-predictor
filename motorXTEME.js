function generarPronosticoXTREME(){

    let analisis = analizarResultados();

    return analisis
        .sort((a,b)=>b.indice-a.indice)
        .slice(0,10);

}

function mejorAnimal(){

    return generarPronosticoXTREME()[0];

}
