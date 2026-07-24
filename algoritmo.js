function generarPronostico() {

    let ranking = [];

    animales.forEach(animal => {

        let apariciones = resultados.filter(
            r => r.animal === animal
        ).length;


        let ultimo = resultados.find(
            r => r.animal === animal
        );


        let diasSinSalir = 30;

        if (ultimo) {

            let fechaUltima = new Date(ultimo.fecha);
            let hoy = new Date();

            diasSinSalir = Math.floor(
                (hoy - fechaUltima) / (1000 * 60 * 60 * 24)
            );

        }


        let puntaje = 
            (apariciones * 10) + 
            (diasSinSalir * 2);


        ranking.push({

            animal: animal,
            veces: apariciones,
            dias: diasSinSalir,
            puntaje: puntaje

        });

    });


    ranking.sort((a,b)=> b.puntaje - a.puntaje);


    return ranking;

}
