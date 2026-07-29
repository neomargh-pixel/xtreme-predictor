function calcularProbabilidad(animal){

    let historial = resultados.filter(r => r.animal === animal);

    let salidas = historial.length;

    let ultima = historial
        .sort((a,b)=>new Date(b.fecha)-new Date(a.fecha))[0];

    let dias = 30;

    if(ultima){

        dias = Math.floor(
            (new Date() - new Date(ultima.fecha))
            /(1000*60*60*24)
        );

    }

    let probabilidad = (salidas*5)+(dias*2);

    if(probabilidad>100)
        probabilidad=100;

    return probabilidad;

}
