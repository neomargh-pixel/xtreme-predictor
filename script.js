function cargarAnimales() {
    let tabla = document.getElementById("tablaResultados");

    // Borra las filas anteriores y deja solo el encabezado
    tabla.innerHTML = `
        <tr>
            <th>#</th>
            <th>Animal</th>
            <th>Puntaje</th>
        </tr>
    `;

    for (let i = 0; i < animales.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell(0).innerHTML = i + 1;
        fila.insertCell(1).innerHTML = animales[i][0];
        fila.insertCell(2).innerHTML = animales[i][1];
    }
}

// Carga la tabla automáticamente al abrir la página
window.onload = cargarAnimales;
let historial = [];

function guardarResultado() {
    let resultado = document.getElementById("resultado").value;

    if (resultado.trim() === "") {
        alert("Escribe un animal");
        return;
    }

    historial.push(resultado);

    alert("Resultado guardado: " + resultado);

    document.getElementById("resultado").value = "";
}
