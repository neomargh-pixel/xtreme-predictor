function analizarResultados() {

    let estadisticas = [];
    let hoy = new Date();

    animales.forEach(animal => {

        let historial = resultados.filter(r => r.animal === animal);

        let salidas = historial.length;

        let ultimaSalida = historial.sort((a,b)=>new Date(b.fecha)-new Date(a.fecha))[0];

        let diasSinSalir = 30;

        if (ultimaSalida) {
            diasSinSalir = Math.floor(
                (hoy - new Date(ultimaSalida.fecha)) /
                (1000 * 60 * 60 * 24)
            );
        }

        // Índice XTREME
        let indice = 0;

        indice += Math.min(salidas * 10, 40);
        indice += Math.min(diasSinSalir, 30);

        if (salidas >= 5) {
            indice += 20;
        } else if (salidas >= 3) {
            indice += 10;
        }

        indice += 10;

        if (indice > 100) indice = 100;

        let tendencia = "🔴 Baja";

        if (indice >= 90)
            tendencia = "🔥 Muy Alta";
        else if (indice >= 75)
            tendencia = "🟢 Alta";
        else if (indice >= 60)
            tendencia = "🟡 Media";

        estadisticas.push({
            animal,
            salidas,
            dias: diasSinSalir,
            indice,
            tendencia
        });

    });

    estadisticas.sort((a,b)=>b.indice-a.indice);

    return estadisticas;

}
