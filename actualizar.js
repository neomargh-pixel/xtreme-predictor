const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function actualizarResultados(){

try{

const url="https://loteriadehoy.com/animalito/guacharoactivo/resultados/";

const {data}=await axios.get(url);

const $=cheerio.load(data);

let resultados=[];

$("table tbody tr").each((i,el)=>{

const columnas=$(el).find("td");

if(columnas.length>=4){

resultados.push({

fecha:$(columnas[0]).text().trim(),

hora:$(columnas[1]).text().trim(),

animal:$(columnas[2]).text().trim(),

numero:$(columnas[3]).text().trim()

});

}

});

fs.writeFileSync(
"resultados.json",
JSON.stringify(resultados,null,2)
);

console.log("Resultados actualizados");

}catch(error){

console.log(error.message);

}

}

actualizarResultados();
