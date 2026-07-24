function analizarResultados() {

    let estadisticas = [];

    animales.forEach(animal => {

        let salidas = resultados.filter(r => r.animal === animal).length;

        let ultimaSalida = resultados
            .filter(r => r.animal === animal)
            .sort((a,b)=> new Date(b.fecha)-new Date(a.fecha))[0];

        let diasSinSalir = 30;

        if (ultimaSalida) {
            let fecha = new Date(ultimaSalida.fecha);
            let hoy = new Date();
            diasSinSalir = Math.floor(
                (hoy - fecha) / (1000 * 60 * 60 * 24)
            );
        }

        estadisticas.push({
            animal: animal,
            salidas: salidas,
            dias: diasSinSalir
        });

    });


    estadisticas.sort((a,b)=>{

        if(b.salidas !== a.salidas){
            return b.salidas - a.salidas;
        }

        return b.dias - a.dias;

    });


    return estadisticas;
}
