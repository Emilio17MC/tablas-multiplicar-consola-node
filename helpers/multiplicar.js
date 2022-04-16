const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("=======================================".yellow);
      console.log(
        `              ${"Tabla del:".green} ${colors.blue(base)}`.bold
      );
      console.log("=======================================".yellow);

      console.log("\n" + salida.cyan);
    }

    fs.writeFileSync(`./salida/tabla_${base}.txt`, salida);

    return `./tabla_${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
