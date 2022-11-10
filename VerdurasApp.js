const fs = require("fs");
let verduras = JSON.parse((fs.readFileSync("Verduras.json", 'utf-8')))

const procesadora = require("./verdurasModulo");

procesadora(verduras)
