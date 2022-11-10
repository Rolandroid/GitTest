const fs = require("fs");
let frutas = JSON.parse((fs.readFileSync("frutas.json", 'utf-8')))

const procesadora = require("./frutasModulo");

procesadora(frutas)