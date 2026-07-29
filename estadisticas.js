function estadisticasGenerales(){

    let totalSorteos = resultados.length;

    let totalAnimales = animales.length;

    let masFrecuente = analizarResultados()[0];

    return {

        sorteos: totalSorteos,

        animales: totalAnimales,

        lider: masFrecuente.animal,

        indice: masFrecuente.indice

    };

}
