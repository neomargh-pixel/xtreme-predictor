async function cargarResultados() {
    try {
        const respuesta = await fetch("resultados.json");
        const datos = await respuesta.json();

        resultados.length = 0;
        datos.forEach(item => resultados.push(item));

        const analisis = analizarResultados();

        if (analisis.length === 0) {
            document.getElementById("pronostico").innerHTML = "No hay datos.";
            return;
        }

        document.getElementById("pronostico").innerHTML =
            "🔥 Mayor tendencia: " + analisis[0].animal;

        document.getElementById("estadistica").innerHTML =
            "Animales analizados: " + analisis.length;

        let tabla = "";

        analisis.slice(0, 10).forEach((a, i) => {
            tabla += `
            <tr>
                <td>${i + 1}. ${a.animal}</td>
                <td>${a.salidas}</td>
                <td>${a.dias}</td>
            </tr>`;
        });

        document.getElementById("top10").innerHTML = tabla;

    } catch (error) {
        document.getElementById("pronostico").innerHTML =
            "❌ Error: " + error.message;
    }
}

window.onload = cargarResultados;
