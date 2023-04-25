function jumpLine() {
  document.write("<br>");
}
function print(text) {
  document.write(text);
  jumpLine();
}

let anioWorldCup = 1930;
let anioLimit = parseInt(prompt('Ingrese al año limite que quiere consultar'))

// alert("Hubo mundial de la FIFA en el año " + anioWorldCup);
// print("Hubo mundial de la FIFA en el año " + anioWorldCup);

while ( anioWorldCup <= anioLimit ) {

    print("Hubo mundial de la FIFA en el año " + anioWorldCup);
    anioWorldCup = anioWorldCup + 4
}

