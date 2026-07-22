function agregarResultado() {
    alert("Entró a la función");

    let tabla = document.getElementById("tablaResultados");

    let fila = tabla.insertRow();

    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);

    celda1.innerHTML = tabla.rows.length - 1;
    celda2.innerHTML = "🐕 Perro";
    celda3.innerHTML = "80";
}
