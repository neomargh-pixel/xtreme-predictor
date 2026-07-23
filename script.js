
window.onload = function() {

    let tabla = document.getElementById("tablaResultados");

    tabla.innerHTML += `
    <tr>
    <td>1</td>
    <td>🐎 Caballo</td>
    <td>95</td>
    <td>5 días sin salir</td>
    </tr>

    <tr>
    <td>2</td>
    <td>🐅 Tigre</td>
    <td>90</td>
    <td>2 días sin salir</td>
    </tr>

    <tr>
    <td>3</td>
    <td>🦁 León</td>
    <td>85</td>
    <td>8 días sin salir</td>
    </tr>
    `;

    document.getElementById("destacado").innerHTML = "🐎 Caballo";
    document.getElementById("atrasado").innerHTML = "🐘 Elefante";
    document.getElementById("tendencia").innerHTML = "Calculando";
};
