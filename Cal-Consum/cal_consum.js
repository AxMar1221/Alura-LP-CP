let respuesta1 = document.getElementById('respuesta1');
let respuesta2 = document.getElementById('respuesta2');

let gasolina = 480
let alcohol = 300
let tanque = 40

let eficienciaGas = gasolina / tanque
let eficienciaAlc = alcohol / tanque
respuesta1.innerHTML = ('La eficiencia usando gasolina es de: ' + eficienciaGas + ' KM por litro') 
respuesta2.innerHTML = ('La eficiencia usando gasolina es de: ' + eficienciaAlc + ' KM por litro')