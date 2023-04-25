function jumpLine() {
  document.write("<br>");
}
function print(text) {
  document.write(text);
  jumpLine();
}

let wins = parseInt(prompt("cuantos partidos ganaron las Chivas"));
let draws = parseInt(prompt("cuantos partidos ganaron las Chivas"));

let totalPoints = wins * 3 + draws;

print("El total de puntos de las Chivas es: " + totalPoints);


if  (totalPoints > 28) {
  print("Las Chivas estan mejor que el torneo pasado");
}

if (totalPoints == 28) {
  print("Las Chivas estan igual que el torneo pasado");
}

if (totalPoints < 20){
  print("Las Chivas estan peor que el torneo pasado");
}
