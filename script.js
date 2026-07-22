function agregarResultado() {
    let animal = prompt("Escribe el animal:");
    let puntaje = prompt("Escribe el puntaje:");

    let tabla = document.getElementById("tablaResultados");

    let fila = tabla.insertRow();

    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);

    celda1.innerHTML = tabla.rows.length - 1;
    celda2.innerHTML = animal;
    celda3.innerHTML = puntaje;
}
    let tabla = document.getElementById("tablaResultados");

    let fila = tabla.insertRow();

    let celda1 = fila.insertCell(0);
    let celda2 = fila.insertCell(1);
    let celda3 = fila.insertCell(2);

    celda1.innerHTML = tabla.rows.length - 1;
    celda2.innerHTML = "🐕 Perro";
    celda3.innerHTML = "80";
}
