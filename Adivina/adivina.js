function jumpLine() {
  document.write("<br>");
}
function print(text) {
  document.write(text);
  jumpLine();
}

let systemNum = Math.round(Math.random() * 10)
let tryS = 3;
let counter = 1;
console.log(systemNum)


while ( counter <= tryS ){
  
  let userNum = parseInt(prompt('Elige un nuemro entre 0-10'))
  
  if ( systemNum == userNum){
    alert('Elegiste el ' +  userNum + ' adivinaste en el intento ' + counter + ' el numero era ' + systemNum)
    break;
  } else {
    alert('Elegiste el ' + userNum + ' no adivinaste')
  }
  counter++
  if ( systemNum == userNum){
    print('Elegiste el ' +  userNum + ' adivinaste en el intento ' + counter + ' el numero era ' + systemNum)
  } else {
    print('Elegiste el ' + userNum + ' no adivinaste, el numero era ' + systemNum)
  }
}
