fetch("resultados.json")
.then(r=>r.json())
.then(datos=>{

const contador={};

datos.forEach(item=>{
contador[item.animal]=(contador[item.animal]||0)+1;
});

console.log(contador);

});
