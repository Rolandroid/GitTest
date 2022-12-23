const fs = require("fs");
const path = require("path")
const { agregar } = require("./frutasModulo");
let frutas = JSON.parse((fs.readFileSync("frutas.json", 'utf-8')))
let nuevaFruta = process.argv[2]
guardar = function (array) {
    fs.writeFileSync(path.join(__dirname, 'frutas.json'), JSON.stringify(array, null, 3), 'utf-8');
}



ObjetoFunciones = {
    conteoDeCantidad : function (array){
        let numero = 0
        for (let i = 0; i < array.length; i++) {
            if(array[i] == nuevaFruta){
                numero = numero + 1
            }
        }
        console.log(numero);
    },
    agregar: function (target) {
        if (nuevaFruta) {
            target.push(nuevaFruta)
        }
    },
    guardar : function (array) {
        fs.writeFileSync(path.join(__dirname, 'frutas.json'), JSON.stringify(array, null, 3), 'utf-8');
    },
    sorter: function (array,array2) {
            let variedad = []
            for (let index = 0; index < array.length; index++) {
                if (array2.includes(array[index])) 
                variedad.push(array[index]) 
                if (variedad.length = 3)
                console.log(variedad)
            }
        }
}



ObjetoFunciones.agregar(frutas)
//

//ObjetoFunciones.conteoDeCantidad(frutas)
//
//console.log("la ensalda tiene " + frutas.length + " " + frutas)
ObjetoFunciones.guardar(frutas)
ObjetoFunciones.sorter(frutas,frutas)