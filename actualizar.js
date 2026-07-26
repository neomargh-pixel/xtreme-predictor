async function actualizarResultados() {

    const respuesta = await fetch("resultados.json");
    const datos = await respuesta.json();

    console.log("Resultados cargados:", datos);

    return datos;

}

actualizarResultados();
