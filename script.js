fetch("resultados.json")
.then(r=>r.json())
.then(datos=>{

const contador={};

datos.forEach(item=>{
contador[item.animal]=(contador[item.animal]||0)+1;
});

console.log(contador);

});
const tabla=document.querySelector("table");

Object.entries(contador)
.sort((a,b)=>b[1]-a[1])
.slice(0,5)
.forEach((item,i)=>{

tabla.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${item[0]}</td>
<td>${item[1]}</td>
</tr>
`;

});
