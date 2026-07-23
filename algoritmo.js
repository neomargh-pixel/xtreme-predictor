function calcularRanking() {

    for (let i = 0; i < animales.length; i++) {

        let nombre = animales[i][0];

        let veces = 0;

        for (let j = 0; j < resultados.length; j++) {

            if (resultados[j].animal === nombre) {
                veces++;
            }

        }

        animales[i][1] = veces;

    }

    animales.sort((a, b) => b[1] - a[1]);

}
