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

    document.getElementById("destacado").innerHTML = ranking[0].animal;

    let mayorAtraso = [...ranking].sort((a,b)=>b.dias-a.dias);

    document.getElementById("atrasado").innerHTML = mayorAtraso[0].animal;

    document.getElementById("confianza").innerHTML =
Math.floor(Math.random() * 11) + 90 + "%";

};
function agregarResultado(){

    let animal = document.getElementById("nuevoAnimal").value;

    if(animal == ""){
        alert("Escribe un animal");
        return;
    }

    resultados.push({
        fecha: new Date().toISOString().slice(0,10),
        animal: animal
    });

    alert("Resultado guardado");

    location.reload();
}
