function obtenerResultadosHoy(){

    let hoy = new Date().toISOString().slice(0,10);

    return resultados.filter(r => r.fecha === hoy);

}

function mostrarResultadosHoy(){

    let lista = obtenerResultadosHoy();

    if(lista.length===0){

        return "<p>No hay resultados registrados hoy.</p>";

    }

    let html="";

    lista.forEach(r=>{

        html += `
        <p>
        🕒 ${r.hora} —
        ${r.animal}
        (#${r.numero})
        </p>
        `;

    });

    return html;

}
