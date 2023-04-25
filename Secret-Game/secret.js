function aleatorio() {
  return Math.round(Math.random() * 10);
}

function sortearNum(cantidad) {
  let secrets = [];
  let counter = 1;

  while (counter <= cantidad) {
    let numAleatorio = aleatorio();
    console.log("numero generado " + numAleatorio);
    let found = false;

    if (numAleatorio != 0) {
      for (let position = 0; position < secrets.length; position++) {
        if (numAleatorio == secrets[position]) {
          found = true;
          break;
        }
      }
      if (found == false) {
        secrets.push(numAleatorio);
        counter++;
      }
    }
  }
  return secrets;
}

let secrets = sortearNum(4);
console.log(secrets);

let input = document.querySelector("input");

input.focus();

function verificar() {
  let found = false;

  for (let position = 0; position < secrets.length; position++) {
    if (parseInt(input.value) == secrets[position]) {
      alert("Has acertado!!");
      found = true;
      break;
    }
  }

  if (found == false) {
    alert("No has adivinado");
  }

  input.value = "";
  input.focus();
}

let button = document.querySelector("button");
button.onclick = verificar;
