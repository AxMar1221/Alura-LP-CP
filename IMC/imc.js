function jumpLine() {
  document.write("<br>");
}
function print(text) {
  document.write(text);
  jumpLine();
}

function calcIMC(peso, altura) {
  return peso / (altura * altura);
}

// print("El IMC de Tachi es de: " + Math.round(calcIMC(80, 1.75)));
// print("El IMC de Vila es de: " + Math.round(calcIMC(65, 1.6)));

nameUser = prompt("Cual es tu nombre!?");
pesoUser = prompt(nameUser + " Cual es tu peso!?");
alturaUser = prompt(nameUser + " Cual es tu altura!?");
imcUser = calcIMC(pesoUser, alturaUser);

print( nameUser  + ' su IMC es de: ' + Math.round(imcUser));


if (imcUser < 18.5) {
  print(nameUser + ' tiene un IMC de ' + Math.round(imcUser) + ' por lo que se considera que tiene un peso por debajo de lo normal')
}

if (imcUser >= 18.5 && imcUser < 25) {
    print(nameUser + ' tiene un IMC de ' + Math.round(imcUser) + ' por lo que se considera que tiene un peso normal')
}

if (imcUser >= 25 && imcUser < 30 ) {
    print(nameUser + ' tiene un IMC de ' + Math.round(imcUser) + ' por lo que se considera que tiene sobrepeso')
}

if (imcUser > 30) {
  print(nameUser + ' tiene un IMC de ' + Math.round(imcUser) + ' por lo que se considera que tiene obesidad')
}
