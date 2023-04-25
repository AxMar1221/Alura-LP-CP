function jumpLine(){
    document.write('<br>')
}
function print(text){
    document.write(text)
    jumpLine()
}

let edadAx = 4
let edadMar = 2
print('')
print('La edad de Axel es de: ' + edadAx );
print('La edad de Mariel es de: ' + edadMar );

print('La diferencia de edad entre ambos es de: ' + (edadAx - edadMar) + ' años');

