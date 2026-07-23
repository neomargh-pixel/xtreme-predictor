function generarPronostico() {

    let ranking = [];

    for (let i = 0; i < animales.length; i++) {

        let animal = animales[i];

        let dato = resultados.find(r => r.animal === animal);

        let dias = dato ? dato.dias : 0;

        let puntaje = dias * 5 + Math.floor(Math.random() * 20);

        ranking.push({
            animal: animal,
            dias: dias,
            puntaje: puntaje
        });
    }

    ranking.sort((a,b)=> b.puntaje - a.puntaje);

    return ranking;
}
