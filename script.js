async function cargarResultados() {

    const respuesta = await fetch("resultados.json");
    const datos = await respuesta.json();

    resultados.length = 0;

    datos.forEach(item => resultados.push(item));

    let analisis = analizarResultados();

    document.getElementById("pronostico").innerHTML =
        "🔥 Mayor tendencia: " + analisis[0].animal;

    document.getElementById("estadistica").innerHTML =
        "Animales analizados: " + analisis.length;

    let tabla = "";

    analisis.slice(0,10).forEach((a,i)=>{

        tabla += `
        <tr>
            <td>${i+1}. ${a.animal}</td>
            <td>${a.salidas}</td>
            <td>${a.dias}</td>
        </tr>`;

    });

    document.getElementById("top10").innerHTML = tabla;

}

cargarResultados();
