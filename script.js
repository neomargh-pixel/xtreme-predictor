async function cargarResultados() {

    const respuesta = await fetch("resultados.json");
    const datos = await respuesta.json();

    resultados.length = 0;
    datos.forEach(item => resultados.push(item));

    // Pronóstico XTREME
    const top10 = generarPronosticoXTREME();
    const mejor = mejorAnimal();

    document.getElementById("pronostico").innerHTML = `
        <h3>${mejor.animal}</h3>
        <p>🔥 Índice XTREME: ${mejor.indice}/100</p>
        <p>${mejor.tendencia}</p>
    `;

    // Resultados del día
    const divResultados = document.getElementById("resultadosHoy");

    if(divResultados){
        divResultados.innerHTML = mostrarResultadosHoy();
    }

    // Estadísticas generales
    const e = estadisticasGenerales();

    document.getElementById("estadistica").innerHTML = `
        <p>📊 Sorteos analizados: ${e.sorteos}</p>
        <p>🐾 Animales: ${e.animales}</p>
        <p>🏆 Líder: ${e.lider}</p>
        <p>🔥 Índice XTREME: ${e.indice}/100</p>
    `;

    // TOP 10
    let tabla = "";

    top10.forEach((a,i)=>{

        tabla += `
        <tr>
            <td>${i+1}. ${a.animal}</td>
            <td>${a.salidas}</td>
            <td>${a.dias}</td>
            <td>${a.indice}/100</td>
            <td>${a.tendencia}</td>
        </tr>`;

    });

    document.getElementById("top10").innerHTML = tabla;

}

cargarResultados();
