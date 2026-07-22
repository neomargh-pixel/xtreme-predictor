let animales = [
    ["🐎 Caballo", 98],
    ["🐅 Tigre", 94],
    ["🦁 León", 91],
    ["🐓 Gallo", 88],
    ["🐊 Caimán", 85],
    ["🐍 Serpiente", 82],
    ["🐒 Mono", 80],
    ["🦅 Águila", 78],
    ["🐘 Elefante", 75],
    ["🐂 Toro", 72]
];

function cargarAnimales() {
    let tabla = document.getElementById("tablaResultados");

    for (let i = 0; i < animales.length; i++) {

        let fila = tabla.insertRow();

        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);

        celda1.innerHTML = tabla.rows.length - 1;
        celda2.innerHTML = animales[i][0];
        celda3.innerHTML = animales[i][1];
    }
}
