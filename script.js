window.onload = function() {

    let ranking = generarPronostico();

    let tabla = document.getElementById("tablaResultados");

    ranking.slice(0,10).forEach((item,index)=>{

        let fila = tabla.insertRow();

        fila.insertCell(0).innerHTML = index + 1;
        fila.insertCell(1).innerHTML = item.animal;
        fila.insertCell(2).innerHTML = item.puntaje;
        fila.insertCell(3).innerHTML = item.dias + " días sin salir";

    });


    document.getElementById("destacado").innerHTML =
    ranking[0].animal;

    document.getElementById("atrasado").innerHTML =
    ranking.sort((a,b)=>b.dias-a.dias)[0].animal;

    document.getElementById("tendencia").innerHTML =
    "Analizando datos";

};
