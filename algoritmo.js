function calcularRanking() {

    for (let i = 0; i < animales.length; i++) {

        let nombre = animales[i][0];

        let veces = resultados.filter(r => r.animal === nombre).length;

        animales[i][1] = veces;

    }

    animales.sort((a, b) => b[1] - a[1]);

}
