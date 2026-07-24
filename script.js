window.onload = function(){

    let datos = analizarResultados();

    let top = document.getElementById("top10");
    let pronostico = document.getElementById("pronostico");
    let estadistica = document.getElementById("estadistica");


    top.innerHTML = "";

    datos.slice(0,10).forEach((item, index)=>{

        top.innerHTML += `
        <p>
        ${index+1}. ${item.animal}
        - Salió: ${item.salidas} veces
        - Días sin salir: ${item.dias}
        </p>
        `;

    });


    if(datos.length > 0){

        pronostico.innerHTML =
        "🔥 Mayor tendencia: " + datos[0].animal;

    }


    estadistica.innerHTML =
    "Animales analizados: " + datos.length;

};
