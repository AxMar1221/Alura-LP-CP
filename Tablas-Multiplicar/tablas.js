function jumpLine() {
  document.write("<br>");
}
function print(text) {
  document.write(text);
  jumpLine();
}

print('While')
let multipleW = 1

while ( multipleW <= 10 ) {
    print( 7 * multipleW)
    multipleW = multipleW + 1
}

jumpLine()
print('For')

for( let multiple = 1; multiple <= 10; multiple++){
    print ( 7 * multiple )
}