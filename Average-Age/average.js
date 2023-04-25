function jumpLine() {
  document.write("<br>");
}
function print(text) {
  document.write(text);
  jumpLine();
}

let numMiembros = parseInt(
  prompt("Ingrese la cantidad de miembros de su familia")
);
let contador = 1;
let totalEdades = 0;

while (contador <= numMiembros) {
  edad = parseInt(prompt("Ingrese la edad"));
  totalEdades = totalEdades + edad;
  contador++;
  console.log(totalEdades);
}
print('La suma de los '+ numMiembros + ' miembros de la familia es de ' + totalEdades );
print('El promedio de edad es de '+ totalEdades / numMiembros );
// let edadTachi = 39
// let edadVIla = 27
// let edadAx = 4
// let edadMar = 2

// let totalEdades = edadTachi + edadVIla + edadAx + edadMar
// let promedioEdades = totalEdades / 4

// print('El promedio de edad de la familia es de: ' + promedioEdades)
